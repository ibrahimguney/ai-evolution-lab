# AI Evolution Lab

Yapay zekanin sembolik AI'dan modern LLM'lere kadar gelisimini proje tabanli ogrenmek icin hazirlanan kucuk laboratuvar serisi.

Bu repo universite seviyesinde, matematik ve istatistik temeli olan bir ogrencinin AI tarihini teknik olarak anlamasini hedefler.

## Yol Haritasi

1. `01_ngram_text_predictor.py` - Karakter seviyesinde n-gram metin tahmin modeli
2. `02-web-ngram/` - Tarayicida calisan interaktif n-gram predictor
3. `03_pytorch_char_model.py` - PyTorch ile egitilen karakter seviyesinde dil modeli
4. `04_minimal_transformer.py` - Causal self-attention kullanan minimal Transformer

Detayli ders anlatimi icin:

```text
DERS_NOTLARI.md
```

## Ogrenme Hedefleri

- Sembolik AI, Machine Learning, Deep Learning ve Transformer donemlerini ayirt etmek
- Dil modellemenin "sonraki token tahmini" fikrini kucuk olcekte anlamak
- N-gram gibi istatistiksel modellerin gucunu ve sinirlarini gormek
- PyTorch ve Transformer asamalarina gecmeden once sezgisel temel kurmak

## Gereksinimler

- Python 3.10 veya uzeri
- Asama 3 icin PyTorch

Ek kutuphane gerekmeyen ilk laboratuvar:

```bash
python 01_ngram_text_predictor.py
```

Web laboratuvari icin:

```text
02-web-ngram/index.html
```

PyTorch laboratuvari icin:

```bash
python -m pip install -r requirements.txt
python 03_pytorch_char_model.py
```

Minimal Transformer laboratuvari icin:

```bash
python 04_minimal_transformer.py
```

## Mevcut Laboratuvar

### 01 - N-gram Text Predictor

Bu laboratuvar karakter seviyesinde bir n-gram modeli kurar.

Model su soruyu cevaplar:

```text
Son n-1 karakter verildiginde siradaki karakter ne olabilir?
```

Ornek:

```text
"dos" -> "y"
"bul" -> "u"
```

Bu, LLM'lerdeki next-token prediction fikrinin cok kucuk ve istatistiksel bir benzeridir.

### 02 - Web N-gram Predictor

Bu laboratuvar ayni n-gram fikrini tarayicida etkilesimli hale getirir.

Kullanici:

- Egitim metinlerini degistirebilir
- `n` degerini ayarlayabilir
- Temperature degerini oynatabilir
- Uretilen metni gorebilir
- Son context icin karakter olasiliklarini inceleyebilir

### 03 - PyTorch Character Model

Bu laboratuvar karakter seviyesinde egitilen kucuk bir neural language model kurar.

Model yapisi:

```text
character id -> embedding -> GRU -> linear output -> next character distribution
```

N-gram modelinden farki, gecisleri sadece saymak yerine parametreleri gradient descent ile ogrenmesidir.

### 04 - Minimal Transformer

Bu laboratuvar karakter seviyesinde kucuk bir Transformer language model kurar.

Model yapisi:

```text
character id
  -> token embedding
  -> positional embedding
  -> causal self-attention blocks
  -> linear output
  -> next character distribution
```

GRU modelinden farki, sirali gizli durum yerine attention kullanmasidir. Causal mask sayesinde model gelecekteki karakterleri gormeden siradaki karakteri tahmin eder.

## Calistirma

Repo klasorundeyken:

```bash
python 01_ngram_text_predictor.py
```

Web demosu icin `02-web-ngram/index.html` dosyasini tarayicida ac.

PyTorch modeli icin:

```bash
python -m pip install -r requirements.txt
python 03_pytorch_char_model.py
```

Minimal Transformer icin:

```bash
python 04_minimal_transformer.py
```

Beklenen cikti:

- Egitim metinleri
- Context aciklamalari
- Deterministik tahminler
- Farkli temperature degerleriyle metin uretimi

## Not

Bu proje egitim amaclidir. Amac buyuk ve guclu bir model kurmak degil; modern AI sistemlerinin temel fikirlerini kucuk ve okunabilir kodlarla anlamaktir.
