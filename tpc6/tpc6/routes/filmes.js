var express = require('express');
var router = express.Router();
const axios = require('axios')

/* GET home page. */
router.get('/', function(req, res, next) {
    axios.get('http://localhost:3005/api/filmes')
        .then(dados => {
            res.render('lista-filmes', { lista: dados.data });
        })
        .catch(erro => {
            res.render('error', {error: erro})
        })
})

router.get('/inserir', function(req,res){
    res.render('form-filme')
})

router.get('/procurar', function(req,res){
    res.render('procurar')
})

router.get('/remover', function(req,res){
    res.render('remover')
})

router.post('/inserir', function(req,res){
    axios.post('http://localhost:3005/api/inserir', req.body)
        .then(dados => {
            res.redirect('/')
        })
        .catch(erro => {
            res.render('error', {error: erro})
        })
})

router.get('/:id', function(req, res, next) {
    axios.get('http://localhost:3005/api/filmes/'+req.params.id)
        .then(dados => {
            console.log(req.params.id);
            res.render('filme', { lista: dados.data });
        })
        .catch(erro => {
            res.render('error', {error: erro})
        })
})

router.delete('apagar/:id', function(req, res, next) {
    axios.delete('http://localhost:3005/api/apagar/'+req.params.id)
        .then(dados => {
            console.log(req.params.id);
            res.render('filme', { lista: dados.data });
        })
        .catch(erro => {
            res.render('error', {error: erro})
        })
})


module.exports = router;
