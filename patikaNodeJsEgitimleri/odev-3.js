// index.js
// circle.js

const circleArea = (r) => {
	return Math.PI * r * r;
          };
          
          const circleCircumference = (r) => {
	return 2 * Math.PI * r;
          };
          
          module.exports = { circleArea, circleCircumference };
          
const { circleArea, circleCircumference } = require('./circle');

const r = 5;
const area = circleArea(r);
const circumference = circleCircumference(r);

console.log(`Yarıçapı ${r} olan dairenin alanı: ${area}`);
console.log(`Yarıçapı ${r} olan dairenin çevresi: ${circumference}`);
/* 
Tabii ki! Bu konuyu daha ayrıntılı bir şekilde açıklayabilirim.

JavaScript'te modül sistemleri, kodunuzun parçalarını farklı dosyalara bölebileceğiniz ve bu parçaları ihtiyaç duyduğunuz yerlerde kullanabileceğiniz yapıları ifade eder. Modül sistemleri, kodunuzun daha organize olmasını sağlar ve kodu yeniden kullanılabilir hale getirir.

Node.js tarafından desteklenen CommonJS, JavaScript'te modül sistemlerinden biridir. CommonJS, module.exports ve require anahtar kelimelerini kullanarak modül tanımlama ve içe aktarma işlemlerini gerçekleştirir.

module.exports ifadesi, bir modülün başka bir dosya tarafından kullanılabilmesi için dışa aktarılan öğeleri belirtmek için kullanılır. Bu, fonksiyonlar, değişkenler veya nesneler gibi herhangi bir JavaScript öğesini içerebilir. Modül içindeki öğeleri dışa aktarmak için module.exports ifadesini kullanırız.

require ifadesi, başka bir dosyadan bir modülü içe aktarmak için kullanılır. İçe aktarılan modül, bir değişkene atanabilir ve modül içindeki öğelere bu değişken üzerinden erişilebilir. require ifadesi, içe aktarılan modül dosyasının yolu veya modül adıyla birlikte kullanılır.

Örneğimizde, circle.js dosyasında circleArea ve circleCircumference fonksiyonlarını module.exports ile dışa aktardık. Bu fonksiyonlara, index.js dosyasında require kullanarak erişim sağladık ve const { circleArea, circleCircumference } = require('./circle'); satırıyla bu fonksiyonları ayrı değişkenlere atadık.

Sonrasında index.js dosyasında yarıçapı 5 olan dairenin alanını ve çevresini hesaplayıp consola yazdırdık.

Bu şekilde modüler bir yapı oluşturarak, circle.js dosyasında tanımlanan fonksiyonları başka dosyalarda da kullanabilir ve kodunuzu daha modüler ve düzenli hale getirebilirsiniz.

*/