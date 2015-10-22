var MongoClient = require('mongodb').MongoClient;

var util;

MongoClient.connect("mongodb://localhost:27017/local1", function(err, db) {
  if(!err) {
    util = db;
  }else{
  	console.log(err);
  }
});

module.exports = {
  insert: function(){
    util.collection('Aluno').insert({nome: 'Pedro',idade: 27, curso: 'NodeJS'});
  },

  update: function(){
    util.collection('Aluno').update({nome: 'Pedro'},{nome: 'Pedro',idade: 27, curso: 'NodeJS'},{"multi" : false,"upsert" : false});
  },

  deleta: function(){
    util.collection('Aluno').remove({ nome : 'Pedro' });
  },

  getAll: function(done){
    util.collection('Aluno').find({}).toArray(function(err, docs){
      if (err) throw err;
      done(docs);
    });
  },

  get: function(aluno){
    util.collection('Aluno').find({nome:aluno}).toArray(function(err, docs){
      console.log(docs);
    });
  }
}
