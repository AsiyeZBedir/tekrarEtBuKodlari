/**
 * @param {number[]} nums - İşlenecek dizi.
 * @param {Function} fn - Her öğe için uygulanacak işlev.
 * @param {number} init - Başlangıç değeri.
 * @return {number} - İşlenmiş sonuç.
 */
var reduce = function(nums, fn, init) {
    // Başlangıç değeri (init) ile sonucu (res) başlat.
    let res = init;

    // forEach yöntemi ile dizi üzerinde döngü başlatılır.
    nums.forEach((n) => {
        // Her öğe (n) ve mevcut sonuç (res), fn işlevine iletilir.
        // İşlevin sonucu, sonucu güncellemek için kullanılır.
        res = fn(res, n);
    });

    // İşlenmiş sonucu döndür.
    return res;
};
