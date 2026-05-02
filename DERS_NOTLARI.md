# AI Evolution Lab Ders Notlari

## Proje Tabanli Yapay Zeka Evrimi

Bu ders notlari, `AI Evolution Lab` reposundaki dort laboratuvari adim adim aciklar. Amac, yapay zekanin tarihsel ve teknik evrimini soyut bir konu olarak degil, calisan kucuk modeller uzerinden anlamaktir.

Repo adresi:

```text
https://github.com/ibrahimguney/ai-evolution-lab
```

## Dersin Ana Fikri

Modern LLM'ler cok buyuk sistemlerdir. Ancak temel soru sasirtici derecede basittir:

```text
Verilen baglama gore siradaki token ne olabilir?
```

Bu repo ayni fikri dort seviyede inceler:

1. N-gram sayma modeli
2. Web arayuzlu n-gram demo
3. PyTorch karakter modeli
4. Minimal Transformer

Her seviye bir oncekinin eksigini gosterir ve bir sonraki yaklasimin neden ortaya ciktigini aciklar.

## Ogrenme Hedefleri

Bu notlari tamamladiginda sunlari anlaman beklenir:

- N-gram modelinin nasil calistigini
- Next-token prediction fikrinin neden onemli oldugunu
- Temperature parametresinin uretime etkisini
- Embedding katmaninin ne ise yaradigini
- GRU gibi sirali modellerin mantigini
- Transformer'da causal self-attention mekanizmasini
- Minimal bir LLM fikrinin hangi parcalardan olustugunu

## Laboratuvar 1: N-gram Text Predictor

Dosya:

```text
01_ngram_text_predictor.py
```

### Concept

N-gram modeli, gecmiste gorulen karakter dizilerini sayar.

Ornek:

```text
"dos" -> "y"
"osy" -> "a"
```

Model su soruyu cevaplar:

```text
Son n-1 karakterden sonra hangi karakterler geldi?
```

### Intuition

Bu model anlam ogrenmez. Sadece istatistik tutar.

Bir tablo dusun:

```text
Context   Sonraki karakter sayimlari
bul       u: 3
dos       y: 5
kla       s: 3
pay       l: 2
```

Yeni metin uretirken model son context'e bakar ve en olasi karakteri secer veya olasilikla ornekler.

### Example

Egitim verisi:

```text
bulut dosya yukle
bulut dosya indir
dosya sil
```

Model:

```text
"bul" contextinden sonra "u" karakteri gelir.
"dos" contextinden sonra "y" karakteri gelir.
```

### Code

Temel fikir:

```python
context = prepared[index : index + n - 1]
next_char = prepared[index + n - 1]
table[context][next_char] += 1
```

Bu kod, context ve sonraki karakter arasindaki gecis sayisini artirir.

### Interpretation

Avantajlari:

- Basit
- Hizli
- Aciklanabilir
- Ek kutuphane gerektirmez

Sinirlari:

- Anlam bilmez
- Uzun baglam tutamaz
- Daha once gormedigi context'lerde zayiftir
- "paylasor" gibi garip birlesimler uretebilir

### Mini Task

`TRAINING_TEXTS` listesini genislet.

Ornek:

```python
"yapay zeka modeli egit"
"transformer attention kullanir"
"veri seti hazirla"
```

Sonra scripti tekrar calistir ve uretimlerin degisip degismedigini gozlemle.

## Laboratuvar 2: Web N-gram Predictor

Klasor:

```text
02-web-ngram/
```

### Concept

Bu asama, ayni n-gram modelini tarayici icinde etkilesimli hale getirir.

Artik kullanici:

- Egitim metnini degistirebilir
- `n` degerini ayarlayabilir
- Temperature degerini degistirebilir
- Uretilen metni gorebilir
- Context olasiliklarini inceleyebilir

### Intuition

Model ayni modeldir, ama bu kez deney yapmak daha kolaydir.

Bu asama bize sunu ogretir:

```text
Bir model sadece algoritma degildir; kullaniciya nasil sunuldugu da onemlidir.
```

Bu, AI sistem tasariminin onemli bir parcasidir.

### Example

Kullanici `seed = "bul"` girer.

Model:

```text
bul -> u
bulu -> t
bulut -> space
```

seklinde devam uretebilir.

### Code

JavaScript tarafinda model yine tablo tutar:

```js
const counts = this.table.get(context) || new Map();
counts.set(nextChar, (counts.get(nextChar) || 0) + 1);
this.table.set(context, counts);
```

Olasiliklar ise soyle hesaplanir:

```js
probability = count / total
```

### Interpretation

Bu asamada teknik ogrenme kadar arayuz ogrenmesi de vardir.

Iyi bir AI demosu:

- Modelin girdisini gosterir
- Modelin ciktisini gosterir
- Ara adimlari aciklar
- Parametrelerle oynama imkani verir

### Mini Task

Web demoda:

1. `n=2`, `n=4`, `n=6` degerlerini dene.
2. Temperature degerini `0.3`, `1.0`, `1.8` yap.
3. Hangi ayarda daha tekrarli, hangi ayarda daha garip metin uretildigini not et.

## Laboratuvar 3: PyTorch Character Model

Dosya:

```text
03_pytorch_char_model.py
```

### Concept

Bu asamada model artik sadece sayma tablosu degildir. Parametreleri olan ve gradient descent ile egitilen bir neural network'tur.

Model yapisi:

```text
character id -> embedding -> GRU -> linear output -> next character distribution
```

### Intuition

N-gram modeli contextleri ezberler.

PyTorch karakter modeli ise sunu ogrenmeye calisir:

```text
Karakterlerin vektor temsilleri ve sirali iliskileri
```

Embedding katmani her karakteri sayisal bir vektore cevirir.

GRU katmani karakter dizisini sirali olarak isler.

Linear output katmani siradaki karakterin olasiliklarini uretir.

### Example

Girdi:

```text
bulut dosy
```

Hedef:

```text
ulut dosya
```

Yani model her pozisyonda bir sonraki karakteri tahmin etmeyi ogrenir.

### Code

Modelin ana bolumu:

```python
self.embedding = nn.Embedding(vocab_size, embedding_dim)
self.rnn = nn.GRU(embedding_dim, hidden_dim, batch_first=True)
self.output = nn.Linear(hidden_dim, vocab_size)
```

Egitim:

```python
logits, _ = model(x_batch)
loss = F.cross_entropy(logits.reshape(-1, len(vocab)), y_batch.reshape(-1))
loss.backward()
optimizer.step()
```

### Interpretation

Bu model n-gram'dan daha geneldir cunku agirliklar ogrenir.

Ama kucuk veriyle egitildigi icin hala sinirlidir.

Avantaj:

- Temsil ogrenir
- Gradient descent mantigini gosterir
- Neural language model fikrine gecis saglar

Sinir:

- Uzun baglamlarda zorlanabilir
- Sirali isleme nedeniyle Transformer kadar paralel degildir
- Veri azsa kolayca ezberler

### Mini Task

Su degerleri degistir:

```python
embedding_dim = 24 -> 48
hidden_dim = 64 -> 128
epochs = 450 -> 800
```

Sonra loss ve uretilen metinleri karsilastir.

## Laboratuvar 4: Minimal Transformer

Dosya:

```text
04_minimal_transformer.py
```

### Concept

Bu asamada GRU yerine Transformer mantigi kullanilir.

Model yapisi:

```text
character id
  -> token embedding
  -> positional embedding
  -> causal self-attention blocks
  -> linear output
  -> next character distribution
```

### Intuition

GRU karakterleri sirayla isler.

Transformer ise her pozisyondaki tokenin onceki tokenlara dikkat etmesini saglar.

Soru:

```text
Bu karakteri tahmin etmek icin onceki hangi karakterler daha onemli?
```

Bu sorunun cevabi attention agirliklaridir.

### Example

Seed:

```text
bulut dos
```

Son token icin attention su karakterlere yuksek olabilir:

```text
d, o, s, space, t
```

Bu, modelin hangi gecmis karakterlerden bilgi aldigini gosterir.

### Code

Self-attention formulu:

```text
Attention(Q, K, V) = softmax(QK^T / sqrt(d_k)) V
```

Kodda:

```python
scores = q @ k.transpose(-2, -1) / math.sqrt(self.head_dim)
attention = F.softmax(scores, dim=-1)
context = attention @ v
```

Causal mask:

```python
mask = torch.tril(torch.ones(block_size, block_size))
scores = scores.masked_fill(mask == 0, float("-inf"))
```

Bu maske, modelin gelecekteki karakterleri gormesini engeller.

### Interpretation

Transformer'in temel gucu:

- Attention ile baglam iliskilerini dogrudan kurar
- Sirali gizli durum zorunlulugunu azaltir
- Buyuk olcekte cok iyi paralellesir
- LLM mimarisinin temelidir

Bu minimal model gercek LLM degildir; ama LLM mimarisinin cekirdek fikrini gosterir.

### Mini Task

Su parametreleri dene:

```python
num_heads = 4 -> 2 veya 6
num_layers = 2 -> 3
block_size = 16 -> 24
```

Sonra:

- loss degisti mi?
- metin uretimi daha iyi mi?
- attention inceleme ciktisi nasil degisti?

## Donemler Arasi Karsilastirma

| Asama | Model | Ogrenme Sekli | Guc | Sinir |
| --- | --- | --- | --- | --- |
| 1 | N-gram | Sayma | Basit ve aciklanabilir | Anlam yok |
| 2 | Web n-gram | Sayma + etkilesim | Deney yapmak kolay | Hala anlam yok |
| 3 | GRU karakter modeli | Gradient descent | Temsil ogrenir | Sirali isleme |
| 4 | Minimal Transformer | Attention + gradient descent | LLM mimarisine yakin | Kucuk veri ve kucuk model |

## Genel Sonuc

Bu repo, LLM fikrine giden yolu kucuk parcalara boler.

En temel fikir:

```text
Baglam -> siradaki token
```

N-gram bunu sayarak yapar.

GRU bunu sirali neural network ile yapar.

Transformer bunu attention ile yapar.

Gercek LLM'ler ise ayni temel fikri devasa veri, buyuk model, cok katmanli Transformer ve ileri egitim teknikleriyle uygular.

## Sonraki Gelistirme Fikirleri

1. Loss degerlerini CSV dosyasina kaydet.
2. Matplotlib ile loss grafigi ciz.
3. Web arayuzunu GitHub Pages ile yayinla.
4. Transformer modelinin attention heatmap'ini ciz.
5. Daha buyuk bir Turkce metin veri seti ekle.
6. Token seviyesine gecmek icin subword tokenizer arastir.
7. Mini bir chatbot arayuzu ekle.
