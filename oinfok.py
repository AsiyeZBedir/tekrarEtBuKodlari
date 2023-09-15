# Verilen DNA dizisi
dna = 'ATGCATGCTAGCATGCTAGCTAGCTA'

# K-mer uzunluğunu belirle
k = 3

# K-mer sayılarını saklamak için bir sözlük oluştur
kmer_count = {}

# DNA dizisini tarayarak k-mer'leri bul ve say
for start in range(len(dna) - k + 1):
    # Mevcut k-mer'i kes
    kmer = dna[start:start + k]
    
    # Bu k-mer daha önce görüldü mü? Görülmediyse 0 olarak başla
    mevcut_sayi = kmer_count.get(kmer, 0)
    
    # K-mer'in sayısını bir artır ve güncelle
    kmer_count[kmer] = mevcut_sayi + 1
    
    # Her adımda güncel k-mer sayılarını ekrana bas
    print(kmer_count)
