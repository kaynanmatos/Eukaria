module.exports= function(app) {
	app.get('/home', function(req,res){
		res.render('home/index')
	});

	app.post('/home/adicionar_sugestao', function(req,res){
		var sugestao=req.body;

		var connection = app.config.dbconnection();
		var form_models= new app.app.models.Form_DAO(connection);

		form_models.adicionar_sugestao(sugestao, function(error, result){
			res.redirect('/home');
		})

	})
}