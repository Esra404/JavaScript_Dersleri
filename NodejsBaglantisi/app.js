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
	
	*/
var http=require("http");
var fs=require("fs");
http.createServer(function(req,res){
	fs.appendFile("page.txt","derya",function(err){
		if(err) throw err;
		console.log("kadedildi");
	});
}).listen(8080);