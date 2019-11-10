const mongoose = require('mongoose')


var filmeSchema = new mongoose.Schema({
    title: String,
    year: Number,
    cast: [{type : String}],
    genres:[{type : String}]
  });

module.exports = mongoose.model('filme', filmeSchema)
