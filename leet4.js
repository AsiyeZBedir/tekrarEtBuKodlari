/**
 * @param {number[]} arr - İşlenecek dizi.
 * @param {Function} fn - Her öğe için uygulanacak işlev.
 * @return {number[]} - İşlenmiş öğeleri içeren yeni dizi.
 */
var map = function(arr, fn) {
    // Sonuç dizisini oluştur. Uzunluğu orijinal diziyle aynıdır.
    const res = new Array(arr.length); 

    // Dizi üzerinde döngü başlatılır.
    for (const i in arr) {
        // İşlev, her öğe ve öğenin indeksi ile çağrılır.
        // İşlevin sonucu, sonuç dizisine atanır.
        res[i] = fn(arr[i], Number(i));
    }

    // İşlenmiş öğeleri içeren yeni diziyi döndür.
    return res;
}
