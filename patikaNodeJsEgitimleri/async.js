const { error } = require("console");

function getData(data) {
	return new Promise((resolve, reject) => { // promise dönüyoruz.
	  console.log("Veriler alınmaya çalışılıyor..");
          
	  if (data) {
	    resolve("Verilen alındı"); 
	  } else {
	    reject("Veriler alınamadı");
	  }
	});
          }
          
          function cleanData(receivedData) { // promise dönüyoruz.
	return new Promise((resolve, reject) => {
	  console.log("Veriler düzenleniyor..");
          
	  if (receivedData) {
	    resolve("Verilen düzenlendi"); 
	  } else {
	    reject("Veriler düzenlenemedi");
	  }
	});
          }
/*     getData(false)
	.then(result =>{
		console.log(result);
		return cleanData(true)
	}).then(result =>{
		console.log(result);
	}).catch(error =>{
		console.log(error);
	})
*/

async function processData(){
	try{
	const receivedData=await getData(true);
	console.log(receivedData);
	const cleanedData=await cleanData(false);
	console.log(cleanedData);

	}catch(error){
		console.log(error);
	}
	
}
processData();