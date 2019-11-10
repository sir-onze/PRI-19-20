const express = require('express');
const router = express.Router();

var Filmes = require('../controllers/filmes')

/* GET: lista de filmes */
router.get('/filmes', function(req, res) {
    Filmes.listar()
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
})

// POST: inserir um filme
router.post('/inserir', function(req,res){
  console.log(req.body)
  Filmes.inserir(req.body)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
})

/* GET: recupera a informação de um filme */
router.get('/filmes/:id', function(req, res) {
  console.log(req.params.id)
  Filmes.consultar(req.params.id)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
})

/** DELETE: Eliminar um determinado filme**/

router.delete('/apagar/:id', function(req, res) {
  console.log(req.params.id)
  Filmes.apagar(req.params.id)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
})


module.exports = router