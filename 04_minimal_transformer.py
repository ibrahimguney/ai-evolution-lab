import math
from dataclasses import dataclass

try:
    import torch
    import torch.nn as nn
    import torch.nn.functional as F
except ModuleNotFoundError as error:
    raise SystemExit(
        "PyTorch bulunamadi. Bu laboratuvari calistirmak icin once su komutu kullan:\n"
        "python -m pip install -r requirements.txt"
    ) from error


TRAINING_TEXTS = [
    "bulut dosya yukle",
    "bulut dosya indir",
    "bulut klasor olustur",
    "dosya paylas",
    "dosya sil",
    "dosya ara",
    "depolama alani doldu",
    "kullanici giris yapti",
    "sifre ile kayit ol",
    "paylasim linki olustur",
    "klasor yeniden adlandir",
    "bos klasoru sil",
]


@dataclass
class TrainConfig:
    block_size: int = 16
    embedding_dim: int = 48
    num_heads: int = 4
    num_layers: int = 2
    dropout: float = 0.1
    epochs: int = 650
    batch_size: int = 32
    learning_rate: float = 0.003
    seed: int = 42


class Vocabulary:
    def __init__(self, text):
        chars = sorted(set(text))
        self.char_to_id = {char: index for index, char in enumerate(chars)}
        self.id_to_char = {index: char for char, index in self.char_to_id.items()}

    def encode(self, text):
        return [self.char_to_id[char] for char in text]

    def decode(self, ids):
        return "".join(self.id_to_char[index] for index in ids)

    def __len__(self):
        return len(self.char_to_id)


class CausalSelfAttention(nn.Module):
    def __init__(self, embedding_dim, num_heads, block_size, dropout):
        super().__init__()
        if embedding_dim % num_heads != 0:
            raise ValueError("embedding_dim num_heads ile tam bolunmelidir.")

        self.num_heads = num_heads
        self.head_dim = embedding_dim // num_heads
        self.query = nn.Linear(embedding_dim, embedding_dim)
        self.key = nn.Linear(embedding_dim, embedding_dim)
        self.value = nn.Linear(embedding_dim, embedding_dim)
        self.projection = nn.Linear(embedding_dim, embedding_dim)
        self.dropout = nn.Dropout(dropout)

        mask = torch.tril(torch.ones(block_size, block_size))
        self.register_buffer("causal_mask", mask.view(1, 1, block_size, block_size))

    def forward(self, x, return_attention=False):
        batch_size, seq_len, embedding_dim = x.shape

        q = self.query(x)
        k = self.key(x)
        v = self.value(x)

        q = q.view(batch_size, seq_len, self.num_heads, self.head_dim).transpose(1, 2)
        k = k.view(batch_size, seq_len, self.num_heads, self.head_dim).transpose(1, 2)
        v = v.view(batch_size, seq_len, self.num_heads, self.head_dim).transpose(1, 2)

        scores = q @ k.transpose(-2, -1) / math.sqrt(self.head_dim)
        scores = scores.masked_fill(self.causal_mask[:, :, :seq_len, :seq_len] == 0, float("-inf"))
        attention = F.softmax(scores, dim=-1)
        attention = self.dropout(attention)

        context = attention @ v
        context = context.transpose(1, 2).contiguous().view(batch_size, seq_len, embedding_dim)
        output = self.projection(context)

        if return_attention:
            return output, attention

        return output


class TransformerBlock(nn.Module):
    def __init__(self, embedding_dim, num_heads, block_size, dropout):
        super().__init__()
        self.attention_norm = nn.LayerNorm(embedding_dim)
        self.feed_forward_norm = nn.LayerNorm(embedding_dim)
        self.attention = CausalSelfAttention(embedding_dim, num_heads, block_size, dropout)
        self.feed_forward = nn.Sequential(
            nn.Linear(embedding_dim, 4 * embedding_dim),
            nn.GELU(),
            nn.Linear(4 * embedding_dim, embedding_dim),
            nn.Dropout(dropout),
        )

    def forward(self, x):
        x = x + self.attention(self.attention_norm(x))
        x = x + self.feed_forward(self.feed_forward_norm(x))
        return x


class MiniTransformerLanguageModel(nn.Module):
    def __init__(self, vocab_size, config):
        super().__init__()
        self.block_size = config.block_size
        self.token_embedding = nn.Embedding(vocab_size, config.embedding_dim)
        self.position_embedding = nn.Embedding(config.block_size, config.embedding_dim)
        self.blocks = nn.Sequential(
            *[
                TransformerBlock(
                    config.embedding_dim,
                    config.num_heads,
                    config.block_size,
                    config.dropout,
                )
                for _ in range(config.num_layers)
            ]
        )
        self.final_norm = nn.LayerNorm(config.embedding_dim)
        self.output = nn.Linear(config.embedding_dim, vocab_size)

    def forward(self, x):
        batch_size, seq_len = x.shape
        if seq_len > self.block_size:
            raise ValueError("Girdi block_size degerinden uzun olamaz.")

        positions = torch.arange(seq_len, device=x.device)
        token_emb = self.token_embedding(x)
        pos_emb = self.position_embedding(positions)[None, :, :]
        hidden = token_emb + pos_emb
        hidden = self.blocks(hidden)
        hidden = self.final_norm(hidden)
        logits = self.output(hidden)
        return logits


def build_corpus():
    return "\n".join(TRAINING_TEXTS).lower()


def build_dataset(encoded, block_size):
    x_rows = []
    y_rows = []

    for index in range(len(encoded) - block_size):
        x_rows.append(encoded[index : index + block_size])
        y_rows.append(encoded[index + 1 : index + block_size + 1])

    return torch.tensor(x_rows, dtype=torch.long), torch.tensor(y_rows, dtype=torch.long)


def get_batch(x_data, y_data, batch_size):
    indices = torch.randint(0, x_data.shape[0], (batch_size,))
    return x_data[indices], y_data[indices]


def train_model(config):
    torch.manual_seed(config.seed)

    corpus = build_corpus()
    vocab = Vocabulary(corpus)
    encoded = vocab.encode(corpus)
    x_data, y_data = build_dataset(encoded, config.block_size)

    model = MiniTransformerLanguageModel(len(vocab), config)
    optimizer = torch.optim.AdamW(model.parameters(), lr=config.learning_rate)

    print("=== Asama 4: Minimal Transformer ===")
    print(f"Corpus length: {len(corpus)} karakter")
    print(f"Vocabulary size: {len(vocab)}")
    print(f"Training examples: {len(x_data)}")
    print(f"Parameters: {sum(param.numel() for param in model.parameters()):,}")
    print()

    losses = []

    for epoch in range(1, config.epochs + 1):
        model.train()
        x_batch, y_batch = get_batch(x_data, y_data, config.batch_size)
        logits = model(x_batch)
        loss = F.cross_entropy(logits.reshape(-1, len(vocab)), y_batch.reshape(-1))

        optimizer.zero_grad()
        loss.backward()
        optimizer.step()

        losses.append(loss.item())

        if epoch == 1 or epoch % 100 == 0:
            print(f"Epoch {epoch:>3} | loss: {loss.item():.4f} | perplexity: {math.exp(loss.item()):.2f}")

    return model, vocab, losses, config


@torch.no_grad()
def generate(model, vocab, seed_text, config, max_new_chars=80, temperature=0.8):
    model.eval()
    ids = vocab.encode(seed_text.lower())

    for _ in range(max_new_chars):
        context = ids[-config.block_size :]
        x = torch.tensor([context], dtype=torch.long)
        logits = model(x)
        next_logits = logits[:, -1, :] / temperature
        probs = torch.softmax(next_logits, dim=-1)
        next_id = torch.multinomial(probs, num_samples=1).item()
        ids.append(next_id)

    return vocab.decode(ids)


@torch.no_grad()
def inspect_attention(model, vocab, seed_text, config):
    model.eval()
    ids = vocab.encode(seed_text.lower())[-config.block_size :]
    x = torch.tensor([ids], dtype=torch.long)

    positions = torch.arange(x.shape[1])
    hidden = model.token_embedding(x) + model.position_embedding(positions)[None, :, :]
    first_block = model.blocks[0]
    normalized = first_block.attention_norm(hidden)
    _, attention = first_block.attention(normalized, return_attention=True)

    tokens = [vocab.id_to_char[index] for index in ids]
    last_token_attention = attention[0, 0, -1, :].tolist()
    pairs = list(zip(tokens, last_token_attention))
    pairs.sort(key=lambda item: item[1], reverse=True)
    return [(token, round(weight, 3)) for token, weight in pairs[:5]]


def print_loss_sparkline(losses, width=40):
    if not losses:
        return

    sample_step = max(1, len(losses) // width)
    sampled = losses[::sample_step][:width]
    low = min(sampled)
    high = max(sampled)
    bars = "▁▂▃▄▅▆▇█"

    if high == low:
        line = bars[0] * len(sampled)
    else:
        line = "".join(bars[int((value - low) / (high - low) * (len(bars) - 1))] for value in sampled)

    print("\nLoss trend:")
    print(line)


def run_demo():
    config = TrainConfig()
    model, vocab, losses, config = train_model(config)

    print_loss_sparkline(losses)

    print("\n=== Metin uretimi ===")
    for temperature in [0.5, 0.8, 1.2]:
        print(f"\nTemperature: {temperature}")
        for seed in ["bul", "dos", "kla", "pay"]:
            print(f"{seed!r} -> {generate(model, vocab, seed, config, temperature=temperature)}")

    print("\n=== Attention inceleme ===")
    for seed in ["bulut dos", "klasor ol", "paylasim"]:
        print(f"{seed!r} son token dikkatleri: {inspect_attention(model, vocab, seed, config)}")

    print("\nYorum:")
    print("- Bu model GRU yerine causal self-attention kullanir.")
    print("- Causal mask sayesinde her pozisyon sadece kendisini ve gecmis karakterleri gorebilir.")
    print("- Minimal yapidadir; amaci buyuk LLM performansi degil, Transformer mekanigini ogretmektir.")


if __name__ == "__main__":
    run_demo()
