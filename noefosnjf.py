# pandas kütüphanesini 'pd' adı altında içe aktarın
import pandas as pd

# Melbourne konut verilerinin dosya yolunu tanımlayın
melbourne_file_path = '../input/melbourne-housing-snapshot/melb_data.csv'

# 'pd.read_csv()' fonksiyonunu kullanarak CSV dosyasını okuyun ve veriyi 'melbourne_data' adlı bir DataFrame'e yükleyin
melbourne_data = pd.read_csv(melbourne_file_path)

# DataFrame'in sütunlarını görüntülemek için 'columns' özelliğini kullanın
# Bu özellik, DataFrame'in sütun başlıklarını içeren bir liste döndürür
sütunlar = melbourne_data.columns

# Sütunların isimlerini görüntülemek
print(sütunlar)
