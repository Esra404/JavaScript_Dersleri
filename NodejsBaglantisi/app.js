//moduller
/*
var http=require("http"); //http server yapıyor node js
var tarih=require("./myModule")
http.createServer(function(req,res){//server oluştur req ve res istek yolla ve cevap al
	res.end("anlık tarijh"+tarih.myDateTime());
}).listen(8080);// portu dinle ve isteği bitir

var http=require("http"); //http modül oluştur
http.createServer(function(req,res){//isteği yönetmeye çalışyorum
	res.writeHead(200,{"content-Type":"text/html"});
	res.write(req.url);
	if(req.url=="/homepage");
		res.write("Ana sayfa");
	if(req.url =="/login");
	            res.write("giriş sayfası");
	res.end();//bitir
}).listen(8080);
	
	
var http=require("http");
var fs=require("fs");
http.createServer(function(req,res){
	fs.appendFile("page.txt","derya",function(err){
		if(err) throw err;
		console.log("kadedildi");
		res.writeHead(200, { "Content-Type": "text/plain" });
		res.end("Dosya başarıyla eklendi!\n");
	});
	
}).listen(8080);

//url modülleri
var url=require("url");
var adr="http://localhost:8080/default.htm?year=2017&manth=Şubat&day=Pazartesi";
var q=url.parse(adr,true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search)
console.log("----------------------");
var qdata=q.query;

console.log("yıl="+qdata.year+"ay="+qdata.month+"gün="+qdata.day);

var http=require("http");
var url=require("url");
var fs=require("fs");

http.createServer(function(req,res){
	var q=url.parse(req.url,true);
	var filename="."+q.pathname;
	fs.readFile(filename,function(err,data){
		if(err){
			res.writeHead(404,{"Content-Type":"text/html"});
			return res.end("404 not found");
		}
		res.writeHead(200,{"Content-Type":"text/html"});
		res.write(data);
		return res.end();
	});
}).listen(8080);

var uc=require("upper_case");//npm kullanımı node js paketleri için paket yöneticisi
var http=require("http");

http.createServer(function(req,res){
	res.end(uc("node js dersleri"));
}).listen(8080);
*/

var mysql =require("mysql");
var baglanti=mysql.createConnection,({
	host:"localhost",
	user:"root",
	pass:""
})
baglanti.connect(function(err){
	if (err) throw err;
	console.log("bağlantı başarılı")
});