/*var listele = document.getElementById("listele");

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(veri => {
    veri.forEach(element => {
      listele.innerHTML += `<li>${element.title}</li>`;
    });
  })
  .catch(error => {
    console.error('Veri alınırken bir hata oluştu:', error);
  });


var listele = document.getElementById("listele");

fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(veri => {
    veri.forEach(element => {
      listele.innerHTML += `<li>${element.title}</li>`;
    });
  })
  .catch(error => {
    if(element.id<=9){

      console.error('Veri alınırken bir hata oluştu:', error);
    }
    
  });
  
  Anladığım kadarıyla catch bloğu içinde bir if yapısı eklemişsiniz. 
  Ancak, bu yapıda bazı sorunlar var ve genel olarak kullanımda yanlışlık var.

catch bloğu, fetch işleminin başarısız olduğu durumlarda çalışan bir bloktur ve hata ile ilgili bilgileri içerir.
 Eğer catch bloğu içinde if koşuluyla bir şeyler yapmak istiyorsanız, bu bloğa geçen hata nesnesini inceleyebilirsiniz. 
 Ancak forEach döngüsünden çıkmak ve bir döngü dışında console.error ile hata yazdırmak mantıklı olmayabilir.

Eğer fetch işlemi başarısız olursa, muhtemelen tüm veriler alınamamış demektir. Bu durumda, hata nesnesini catch bloğu içinde kullanabilirsiniz. 
Örnek olarak şöyle düşünebiliriz:
  
Bu kodda, fetch işlemi başarısız olursa, catch bloğu çalışır ve hata nesnesi error olarak alınır ve bu hata konsola yazdırılır.

Ancak, forEach döngüsünü durdurmak veya yarıda kesmek için catch bloğunu kullanmak uygun değildir. Eğer fetch işlemi başarısız olursa, döngü zaten çalışmayacak ve listede hiçbir şey görüntülenmeyecektir. Bu nedenle if yapısını catch bloğunda kullanmanıza gerek yok.

Özetle, if yapısı ile catch bloğunu birleştirme ihtiyacı duymadan verileri çekebilir ve gösterebilirsiniz. Yalnızca catch bloğu, hata durumlarında ilgili mesajları görüntülemek için kullanılmalıdır.
*/
  var listele = document.getElementById("listele");

fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(veri => {
    // Verileri "id" değerine göre filtrele
    const filteredData = veri.filter(element => element.id < 9);

    // Filtrelenmiş verileri liste olarak ekle
    filteredData.forEach(element => {
      listele.innerHTML += `<li>${element.title}</li>`;
    });
  })
  .catch(error => {
    console.error('Veri alınırken bir hata oluştu:', error);
  });

