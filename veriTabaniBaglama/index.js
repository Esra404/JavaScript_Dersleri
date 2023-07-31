var express=require("express");
var app=express();
var connection=require("./database");

app.get("/",function(req,res){
	let sql ="SELECT * FROM employee_info";
	connection.query(sql,function(err,results){
		if(err) throw err;
		res.send(results);
	});
	
});


app.listen(3000,function(){
	//console.log("app ye başarıyla bağlandı");
	//connection.connect("app listening on port 3000");
	connection.connect(function(err){
		if(err) throw err;
		console.log("veritabanına bağlandı");
	});
});
