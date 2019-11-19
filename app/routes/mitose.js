module.exports= function(app) {
	app.get('/mitose', function(req,res){
		res.render('secoes/paginas/mitose/index')
	});
}