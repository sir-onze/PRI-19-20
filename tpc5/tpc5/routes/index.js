var express = require('express');
var router = express.Router();
var jsonfile = require('jsonfile')
var nanoid = require('nanoid')

var myBD = __dirname + "/../data/alunos.json"

/* GET home page. */
router.get('/alunos', function(req, res) {
  jsonfile.readFile(myBD, (erro, dados) => {
    if(!erro){
        res.render('index', {lista: dados})              
    }
    else{
        res.render('error', {error: erro})  
    }
  }) 
})

router.post('/alunos', function(req, res) {
    var registo = req.body
    registo['id'] = nanoid()
    jsonfile.readFile(myBD, (erro, alunos)=>{
        if(!erro){
          alunos.push(registo)
            jsonfile.writeFile(myBD, alunos, erro => {
                if(erro) console.log(erro)
                else console.log('Registo gravado com sucesso.')
            })
        }
        res.render('index', {lista: alunos})
    })
})

router.delete('/alunos/:id', function(req, res) {
  var id = req.params.id
  jsonfile.readFile(myBD, (erro, alunos)=>{
    if(!erro){
      var index = alunos.findIndex(c => c.id == id)
      if(index > -1){
        alunos.splice(index, 1)
        jsonfile.writeFile(myBD, alunos, erro => {
          if(erro) console.log(erro)
          else console.log('Registo removido com sucesso.')
        })
      }
    }
    res.render('index', {lista: alunos})
  })
})

router.get('/alunos/:idAluno', function(req, res) {
  var id = req.params.idAluno
  jsonfile.readFile(myBD, (erro,alunos)=>{
    if(!erro){
        var aluno = alunos.find(a => a.id == id)
        if(aluno){
          res.render('aluno', {aluno: aluno})
        }
    }
    else {
        res.render('error', {error:erro})
    }
  })
})

router.post('/alunos/:idAluno/notas', function(req,res) {
  var id = req.params.idAluno
  var nota = req.body
  jsonfile.readFile(myBD, (erro,alunos)=> {
    if(!erro){
      var aluno = alunos.find(a => a.id == id)
      aluno.notas.push(nota)
      jsonfile.writeFile(myBD, alunos, erro => {
        if (erro) console.log(erro)
        else console.log('Nota gravada com sucesso')
      })     
    }
    res.render('aluno', {aluno: aluno})
  })
})

router.post('/alunos/:idAluno/notas', function(req,res) {
  var id = req.params.idAluno
  var nota = req.body
  jsonfile.readFile(myBD, (erro,alunos)=> {
    if(!erro){
      var aluno = alunos.find(a => a.id == id)
      aluno.notas.push(nota)
      jsonfile.writeFile(myBD, alunos, erro => {
        if (erro) console.log(erro)
        else console.log('Nota gravada com sucesso')
      })     
    }
    res.render('aluno', {aluno: aluno})
  })
})
module.exports = router;
