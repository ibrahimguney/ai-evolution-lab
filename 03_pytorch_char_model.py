import math
import random
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
    block_size: int = 12
    embedding_dim: int = 24
    hidden_dim: int = 64
    epochs: int = 450
    batch_size: int = 32
    learning_rate: float = 0.01
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


class CharRNNLanguageModel(nn.Module):
    def __init__(self, vocab_size, embedding_dim, hidden_dim):
        super().__init__()
        self.embedding = nn.Embedding(vocab_size, embedding_dim)
        self.rnn = nn.GRU(embedding_dim, hidden_dim, batch_first=True)
        self.output = nn.Linear(hidden_dim, vocab_size)

    def forward(self, x, hidden=None):
        embedded = self.embedding(x)
        output, hidden = self.rnn(embedded, hidden)
        logits = self.output(output)
        return logits, hidden


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
    random.seed(config.seed)
    torch.manual_seed(config.seed)

    corpus = build_corpus()
    vocab = Vocabulary(corpus)
    encoded = vocab.encode(corpus)
    x_data, y_data = build_dataset(encoded, config.block_size)

    model = CharRNNLanguageModel(
        vocab_size=len(vocab),
        embedding_dim=config.embedding_dim,
        hidden_dim=config.hidden_dim,
    )
    optimizer = torch.optim.Adam(model.parameters(), lr=config.learning_rate)

    print("=== Aşama 3: PyTorch Karakter Modeli ===")
    print(f"Corpus length: {len(corpus)} karakter")
    print(f"Vocabulary size: {len(vocab)}")
    print(f"Training examples: {len(x_data)}")
    print()

    losses = []

    for epoch in range(1, config.epochs + 1):
        model.train()
        x_batch, y_batch = get_batch(x_data, y_data, config.batch_size)
        logits, _ = model(x_batch)
        loss = F.cross_entropy(logits.reshape(-1, len(vocab)), y_batch.reshape(-1))

        optimizer.zero_grad()
        loss.backward()
        optimizer.step()

        losses.append(loss.item())

        if epoch == 1 or epoch % 75 == 0:
            print(f"Epoch {epoch:>3} | loss: {loss.item():.4f} | perplexity: {math.exp(loss.item()):.2f}")

    return model, vocab, losses


@torch.no_grad()
def generate(model, vocab, seed_text, max_new_chars=80, temperature=0.8):
    model.eval()
    ids = vocab.encode(seed_text.lower())
    x = torch.tensor([ids], dtype=torch.long)
    hidden = None

    logits, hidden = model(x, hidden)
    generated = ids[:]

    current_id = x[:, -1:]

    for _ in range(max_new_chars):
        logits, hidden = model(current_id, hidden)
        next_logits = logits[:, -1, :] / temperature
        probs = torch.softmax(next_logits, dim=-1)
        next_id = torch.multinomial(probs, num_samples=1)
        generated.append(next_id.item())
        current_id = next_id

    return vocab.decode(generated)


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
    model, vocab, losses = train_model(config)

    print_loss_sparkline(losses)

    print("\n=== Metin üretimi ===")
    for temperature in [0.5, 0.8, 1.2]:
        print(f"\nTemperature: {temperature}")
        for seed in ["bul", "dos", "kla", "pay"]:
            print(f"{seed!r} -> {generate(model, vocab, seed, temperature=temperature)}")

    print("\nYorum:")
    print("- Bu model n-gram gibi sadece saymaz; embedding, GRU ve output katmanlarindaki agirliklari ogrenir.")
    print("- Kucuk veri nedeniyle hala garip metinler uretebilir.")
    print("- Bir sonraki asamada GRU yerine attention/Transformer mantigina gececegiz.")


if __name__ == "__main__":
    run_demo()
