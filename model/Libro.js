const mongoose = require('mongoose');

const Schema = mongoose.Schema

const libroSchema = new Schema({
    title: String,
    Precio: Number,
    Portada: String,
    desc: String,
    autor: String

}, {versionkey:false})


libroSchema.index({title: 'text'});


module.exports = mongoose.model('libros', libroSchema)