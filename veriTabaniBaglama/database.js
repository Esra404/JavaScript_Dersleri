var mysql2=require("mysql2");
var connection=mysql2.createConnection({
	host:"localhost",
	database:"employee_database",
	user:"root",
	password:"esra123"
});
module.exports=connection;
