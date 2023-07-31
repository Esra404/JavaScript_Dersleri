var express=require("express");
var app=express();
app.get('/app',(req,res)=>{
	res.send("merhaba mehmet");
});
var port =3000;
app.listen(port,()=>{
	console.log(`Sunucu http://localhost:${port} adresinde çalışıyor.`);
});