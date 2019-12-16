module.exports= function(app) {
	app.get('/celula_animal', function(req,res){
		res.render('secoes/paginas/celula_animal/index')
	});
}