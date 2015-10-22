//route for http methods
var url = require('url');
var qs = require('querystring');

var mongoloideloide = require('./mongoloideUtil');

//web.proxy(req.method, req);

module.exports = {
	proxy: function(method, req){
		if(method === 'GET'){
			var queryObject = url.parse(req.url,true).query;

		} else if(method === 'POST'){			
			
			var aluno;

			aluno = parse(req);

			insert(aluno);
		} else if(method === 'PUT'){
			update();
		} else if(method === 'DELETE'){
			deleta();
		}
	}
}

var insert = function(aluno){
		console.log('inserindo...');
		mongoloide.insert(aluno);
	};

var	update = function(){
		mongoloide.update();
		return("update");
	};

var	deleta = function(){
		mongoloide.deleta();
		return("delete");
	};

var	getAll = function(){
		mongoloide.getAll();
	};

var	get = function(){
		console.log("get");
		mongoloide.get();
		return("get");
	};