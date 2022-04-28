const {Schema, model} = require('mongoose')
const Producto = require('./productsMongoose')

const carrito = new Schema({
    date: Date.now(),
    productos: [{
        type: Schema.Types.ObjectId, ref: 'Productos'

    }]
})

const Carrito = model('Carritos', carrito)

module.exports = Carrito