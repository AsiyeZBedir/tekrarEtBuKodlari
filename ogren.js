async function fetchData() {
  try {
    // 1. İlk olarak, 'fetch' fonksiyonu kullanılarak bir ağ isteği yapılır ve 'response' adında bir yanıt alınır.
    const response = await fetch('https://api.example.com/data');

    // 2. 'response' nesnesinin 'json' metodu kullanılarak yanıtın JSON formatına çözümlenmesi beklenir ve sonuç 'data' adında bir değişkende saklanır.
    const data = await response.json();

    // 3. JSON verisi kullanılabilir hale geldiğinde, bu veriyle bir şeyler yapabiliriz. Örneğin, ekrana yazdırabiliriz.
    console.log(data);
  } catch (error) {
    // 4. Eğer herhangi bir hata oluşursa (örneğin, ağ hatası veya JSON çözümlemesi hatası), 'catch' bloğu çalışır ve hatayı yakalarız.
    console.error('Hata:', error);
  }
}

// 5. 'fetchData' adlı işlevi çağırarak asenkron işlemi başlatırız.
fetchData();
