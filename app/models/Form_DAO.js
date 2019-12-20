function Form_DAO(connection) {
	this._connection=connection;
}

	Form_DAO.prototype.adicionar_sugestao=function(sugestao, callback){
		this._connection.query('insert into sugestoes set ?', sugestao, callback);
	}

	Form_DAO.prototype.selecionar_sugestao=function(sugestao, callback){
		this._connection.query('select* from sugestoes', callback);
	}

module.exports= function(){
	return Form_DAO;
}