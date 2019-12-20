var mysql= require("mysql");

var connMySQL= function(){
	console.log("Tatu do Bem")
	return mysql.createConnection({
		host:'localhost',
		user:'root',
		password:'',
		database:'Eukaria'
	});
}

module.exports = function(){
	console.log("deu tudo certo")
	return connMySQL;
}