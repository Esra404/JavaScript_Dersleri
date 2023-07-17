/*const fs = require('fs');
fs.readFile('password.txt', 'utf8', (err, data) => { // callback fonksiyonu ile birlikte çalıştırıyoruz.
	if (err) console.log(err);                         // hata kontrolü
	console.log(data);                                 // okunan verinin çıktısının alınması
          })
          

          fs.writeFile('example.json', '{"name": "Arin", "age": 6}', 'utf8', (err) => {
	if (err) console.log(err);
        });*/


        fs.appendFile('example.txt', '\n YENI TEXT', 'utf8', (err) => {
	if (err) console.log(err);
        });
// JSON, geçici verileri depolamak için idealdir. Örneğin, geçici veriler bir web sitesinde gönderilen form gibi kullanıcı tarafından oluşturulmuş veriler olabilir. 
//JSON, yüksek düzeyde birlikte çalışabilirlik sunmak için tüm programlama dillerine yönelik bir veri formatı olarak da kullanılabilir.