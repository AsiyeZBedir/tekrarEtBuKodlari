import requests

# API'nin URL'sini belirtin
api_url = "https://jsonplaceholder.typicode.com/posts/1"

try:
    # GET isteği yapın
    response = requests.get(api_url)
    
    # Yanıtın durum kodunu kontrol edin (200, başarılı istek anlamına gelir)
    if response.status_code == 200:
        # JSON verilerini alın
        data = response.json()
        
        # JSON verilerini işleyin veya ekrana yazdırın
        print("Başlık:", data['title'])
        print("İçerik:", data['body'])
    else:
        print("API isteği başarısız. Durum Kodu:", response.status_code)

except requests.exceptions.RequestException as e:
    print("API'ye ulaşırken hata oluştu:", e)
