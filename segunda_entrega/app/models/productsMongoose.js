const {Schema, model} = require('mongoose')


const productos = new Schema({
    title: String,
    price: Number,
    url: String,
    date: Date(),
})

const Producto = model('Productos', productos)



module.exports = Producto;