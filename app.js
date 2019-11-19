var app=require('./config/server');

var rota_home=require('./app/routes/home')(app);
var rota_landing=require('./app/routes/landing')(app);
var rota_cel_animal=require('./app/routes/celula_animal')(app);
var rota_cel_vegetal=require('./app/routes/celula_vegetal')(app);
var rota_mitose=require('./app/routes/mitose')(app);

app.listen(3000, function(){
	console.log("Rodando")
});