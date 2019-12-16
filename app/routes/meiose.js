module.exports= function(app) {
	app.get('/meiose', function(req,res){
		res.render('secoes/paginas/meiose/index')
	});
}