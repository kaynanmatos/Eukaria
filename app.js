var app=require('./config/server');

var rota_home=require('./app/routes/home')(app);
var rota_landing=require('./app/routes/landing')(app);
var rota_cel_animal=require('./app/routes/celula_animal')(app);
var rota_cel_vegetal=require('./app/routes/celula_vegetal')(app);
var rota_mitose=require('./app/routes/mitose')(app);
var rota_meiose=require('./app/routes/meiose')(app);
var rota_resp_celular=require('./app/routes/respiracao_celular')(app);
var rota_exercicios=require('./app/routes/exercicios')(app);

app.listen(3000, function(){
	console.log("Rodando")
});