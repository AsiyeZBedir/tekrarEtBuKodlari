import requests

# API'nin URL'si
api_url = "https://jsonplaceholder.typicode.com/posts/1"

try:
    # GET isteği 
    response = requests.get(api_url)
    
    
    if response.status_code == 200:
        # JSON verilerini alın
        data = response.json()
        
        
        print("Başlık:", data['title'])
        print("İçerik:", data['body'])
    else:
        print("API isteği başarısız. Durum Kodu:", response.status_code)

except requests.exceptions.RequestException as e:
    print("API'ye ulaşırken hata oluştu:", e)
