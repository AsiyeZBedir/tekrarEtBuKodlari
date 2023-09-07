import redis

# Redis bağlantısı oluşturun
redis_client = redis.StrictRedis(host='localhost', port=6379, db=0)

# Anahtar-değer çiftini ekleyin
redis_client.set('anahtar1', 'değer1')

# Anahtar'daki değeri okuyun
deger = redis_client.get('anahtar1')
print(deger.decode('utf-8'))  # Redis'den gelen veri byte olarak gelir, bu yüzden decode işlemi yapmamız gerekiyor

# Bir anahtarı silin
redis_client.delete('anahtar1')

# Bir hash (sözlük) oluşturun ve içine değerler ekleyin
hash_key = 'musteri:1'
redis_client.hset(hash_key, 'ad', 'Ahmet')
redis_client.hset(hash_key, 'soyad', 'Yılmaz')
redis_client.hset(hash_key, 'yas', 30)

# Hash içindeki bir değeri okuyun
musteri_ad = redis_client.hget(hash_key, 'ad')
print(musteri_ad.decode('utf-8'))

# Hash içindeki tüm alanları ve değerleri okuyun
tum_alanlar_ve_degerler = redis_client.hgetall(hash_key)
for alan, deger in tum_alanlar_ve_degerler.items():
    print(alan.decode('utf-8'), deger.decode('utf-8'))

# Hash içindeki bir alanı silin
redis_client.hdel(hash_key, 'yas')
