/* Local onde são efetuadas as queries à base de dados*/

var Obras = require('../models/obras')

module.exports.list = () =>{
    return Obras
           .find()
           .exec()
}

module.exports.listId = id =>{
    return Obras
           .findOne({_id:id})
           .exec()
}

module.exports.listPeriodo = periodo =>{
    return Obras
           .find({periodo:periodo})
           .exec()
}

module.exports.listAno = ano =>{
    return Obras
           .find({anoCriacao:ano})
           .exec()
}

module.exports.listCompositor = compositor =>{
    return Obras
           .find({compositor:compositor})
           .exec()
}

module.exports.getCompositor = ()=>{
    return Obras
           .find({},{compositor:1})
           .exec()
}

module.exports.getObras = nome => {
    return Obras
           .find({compositor:nome})
           .exec()
}