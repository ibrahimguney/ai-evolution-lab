# AI Evolution Lab

Yapay zekanin sembolik AI'dan modern LLM'lere kadar gelisimini proje tabanli ogrenmek icin hazirlanan kucuk laboratuvar serisi.

Bu repo universite seviyesinde, matematik ve istatistik temeli olan bir ogrencinin AI tarihini teknik olarak anlamasini hedefler.

## Yol Haritasi

1. `01_ngram_text_predictor.py` - Karakter seviyesinde n-gram metin tahmin modeli
2. Web arayuzlu predictor
3. PyTorch karakter modeli
4. Minimal Transformer

## Ogrenme Hedefleri

- Sembolik AI, Machine Learning, Deep Learning ve Transformer donemlerini ayirt etmek
- Dil modellemenin "sonraki token tahmini" fikrini kucuk olcekte anlamak
- N-gram gibi istatistiksel modellerin gucunu ve sinirlarini gormek
- PyTorch ve Transformer asamalarina gecmeden once sezgisel temel kurmak

## Gereksinimler

- Python 3.10 veya uzeri

Ek kutuphane gerekmeyen ilk laboratuvar:

```bash
python 01_ngram_text_predictor.py
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

## Calistirma

Repo klasorundeyken:

```bash
python 01_ngram_text_predictor.py
```

Beklenen cikti:

- Egitim metinleri
- Context aciklamalari
- Deterministik tahminler
- Farkli temperature degerleriyle metin uretimi

## Not

Bu proje egitim amaclidir. Amac buyuk ve guclu bir model kurmak degil; modern AI sistemlerinin temel fikirlerini kucuk ve okunabilir kodlarla anlamaktir.
