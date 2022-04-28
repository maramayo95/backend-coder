const {model, Schema } = require('mongoose')

//const cn = connect("mongodb://localhost/eccomerce")
//console.log(cn)


const Product = new Schema({
    name: String,
    price: Number,
    thumbnail: String,
    createdAt: Date,
})

module.exports = model("Product", Product)