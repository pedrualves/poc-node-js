var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer();

var resp = '';
var mongoloide = require('./mongoUtil');

server.on('request', function(req,res){
	if(req.url != '/favicon.ico'){
		resp = res;
		switch(url.parse(req.url).pathname) {
		    case '/':
		    	if(req.method == 'GET'){
					fs.readFile('./index.html', function (err, data) {
						resp.writeHeader(200, {"Content-Type": "text/html"});
						resp.write(data);
			      resp.end();
					});
			  	}else{
		     		redirect('405.html');
		     	}
		     	break;
		    case '/api/alunos':
				case '/api/alunos/':
		    	if(req.method == 'GET'){
			     	mongoloide.getAll(redirect);
		     	}else{
		     		redirect('405.html');
		     	}
			  	break;
			case '/api/aluno':
			case '/api/aluno/':
				if(req.method == 'GET'){
					var queryObject = url.parse(req.url,true).query;
			    	mongoloide.get(queryObject.nome);
			     	redirect('opa.html');
		     	}else{
		     		redirect('405.html');
		     	}
			  	break;
			case '/api/aluno':
			case '/api/aluno/':
				if(req.method == 'POST'){
			    	mongoloide.getAll();
			     	redirect('opa.html');
		     	}else{
		     		redirect('405.html');
		     	}
			  	break;
			case '/api/aluno/{aluno}':
			case '/api/aluno/{aluno}/':
		     	if(req.method == 'PUT'){
			    	mongoloide.getAll();
			     	redirect('opa.html');
		     	}else{
		     		redirect('405.html');
		     	}
			  	break;
			case '/api/aluno':
			case '/api/aluno/':
				if(req.method == 'DELETE'){
					var queryObject = url.parse(req.url,true).query;
			    	mongoloide.deleta(queryObject.nome);
			     	redirect('opa.html');
		     	}else{
		     		redirect('405.html');
		     	}
			  	break;
			default:
				redirect('404.html');
			  	break;
		}
	}
});

server.listen(1234);

console.log("node started...");

var redirect = function(data){
	var json = JSON.stringify(data);
	resp.writeHead(200, {"Content-Type": "application/json"});
	resp.end(json);
};
