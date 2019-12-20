module.exports= function(app) {
	app.get('/celula_vegetal', function(req,res){
		res.render('secoes/paginas/celula_vegetal/index')
	});
}