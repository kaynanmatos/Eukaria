module.exports= function(app) {
	app.get('/respiracao_celular', function(req,res){
		res.render('secoes/paginas/respiracao_celular/index')
	});
}