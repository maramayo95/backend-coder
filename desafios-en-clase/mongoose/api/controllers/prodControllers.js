const  Product = require('../models/Product')
//const  mongoose = require('mongoose')

const storeProds = new Product()

const listProducts = async (req , res)  => {
    const arr = await Product.findOne({price: 500});
    res.send(arr)
    
}

module.exports = {
    listProducts

}