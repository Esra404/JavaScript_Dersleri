/*const fs=require('fs');
const data=fs.readFileSync(/file.md);
console.log(data);
moreWork();  */

function showPrimeNumbers(lownumber, highNumber) {
	for (let i =lownumber; i <= highNumber; i++) {
	    let isPrime = true;
	    for (let j = 2; j <= i; j ++) {
	        if( i % j ===0 && j !==i) {
		isPrime = false
	        }
	    }
        
	    if(isPrime) {
	        console.log(i);
	    }
	}
        }
        
        module.exports = showPrimeNumbers // Burada fonksiyonu diğer dosyaların kullanımına açıyoruz.
        const primeNumbers = require('./primeNumbers'); // Fonksyonu bir değişkene atıyoruz.

primeNumbers.showPrimeNumbers(10, 22); // Kendi değişkenimiz üzerinden çalıştırıyoruz. 