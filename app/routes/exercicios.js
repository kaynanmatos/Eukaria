module.exports= function(app) {
	app.get('/exercicios', function(req,res){
		res.render('secoes/exercicios/index')
	});
}