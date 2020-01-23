var express = require('express');
var router = express.Router();

var Compositores = require('../controllers/obras')

/* GET home page. */
router.get('/', function(req, res) {
    const nome = req.query.nome

    if(nome){
        console.log(nome)
        Compositores.getObras(nome)
                    .then(dados=>res.jsonp(dados))
                    .catch(erro=>res.status(500).jsonp(erro))
    }
    else{
        Compositores.getCompositor()
                    .then(dados=>res.jsonp(dados))
                    .catch(erro=>res.status(500).jsonp(erro))
    }
});

module.exports = router