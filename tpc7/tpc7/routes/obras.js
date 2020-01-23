var express = require('express');
var router = express.Router();

var Obras = require('../controllers/obras')

/* GET home page. */
router.get('/', function(req, res) {
  const periodo = req.query.periodo
  const anoCriacao = req.query.anoCriacao 
  const compositor = req.query.compositor
  
  if (periodo!=null && anoCriacao==null && compositor==null) {
    //Query de procura por periodo
    Obras.listPeriodo(periodo)
         .then(dados=>res.jsonp(dados))
         .catch(erro=>res.status(500).jsonp(erro))
  }

  if (periodo==null && anoCriacao!=null && compositor==null){
    //Query de procura por ano de criacao
    Obras.listAno(anoCriacao)
         .then(dados=>res.jsonp(dados))
         .catch(erro=>res.status(500).jsonp(erro))
  }

  if (periodo==null && anoCriacao==null && compositor!=null){
    // Query de procura
    Obras.listCompositor(compositor)
         .then(dados=>res.jsonp(dados))
         .catch(erro=>res.status(500).jsonp(erro))
  }

  if (periodo==null && anoCriacao==null && compositor==null){
    Obras.list()
       .then(dados=>res.jsonp(dados))
       .catch(erro=>res.status(500).jsonp(erro))
  }
  
});

module.exports = router;
