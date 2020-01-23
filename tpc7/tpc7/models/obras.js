/** Local onde é definido o esquema dos dados na base de dados*/

const mongoose = require('mongoose')

var obrasSchema = new mongoose.Schema ({
    _id: mongoose.Schema.Types.ObjectId,
    nome: String,
    desc: String,
    anoCriacao: String,
    periodo: String,
    compositor: String,
    duracao: String
})

module.exports = mongoose.model('obras',obrasSchema) 