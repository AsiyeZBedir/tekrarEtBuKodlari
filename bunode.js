var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
// Bağlantı başarılı olduğunda, dbo değişkenine bir veritabanı nesnesi atanır: var dbo = db.db("mydb");. 
// Bu, "mydb" adlı bir veritabanına erişim sağlayacak bir db nesnesi oluşturur. 
//Bu veritabanını daha sonra kullanabiliriz.
   var dbo = db.db("mydb");
  //Ardından, dbo.createCollection fonksiyonunu kullanarak "customers" adında bir koleksiyon (tablo) oluşturuyoruz: dbo.createCollection("customers", function(err, res) {...}.
  //Bu işlev de bir geri çağırma işlevi alır ve koleksiyon oluşturma işlemi başarılı olduğunda veya başarısız olduğunda çağrılır.
  dbo.createCollection("customers", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});
