# pymongo kütüphanesini içe aktarın
import pymongo

# MongoDB veritabanına bağlanın (Varsayılan bağlantı URL: mongodb://localhost:27017/)
client = pymongo.MongoClient("mongodb://localhost:27017/")

# Bir veritabanı seçin veya oluşturun
mydb = client["mydatabase"]

# Bir koleksiyon (collection) seçin veya oluşturun
mycol = mydb["customers"]

# Bir belge (document) oluşturun
customer_data = {
    "name": "John",
    "email": "john@example.com",
    "age": 30
}

# Belgeyi koleksiyona ekleyin
insert_result = mycol.insert_one(customer_data)

# Eklenen belgenin ID'sini alın
print("Eklenen belgenin ID'si:", insert_result.inserted_id)

# Tüm belgeleri koleksiyondan alın
all_documents = mycol.find()

# Belgeleri döngü ile gezin ve ekrana basın
for document in all_documents:
    print(document)
