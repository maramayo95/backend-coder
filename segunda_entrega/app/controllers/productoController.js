const productoDAO = require('../daos/fs/ProductosDao')
require('dotenv').config()
const productoDAO = require('../daos/'+process.env.AMBIENTE+'/ProductosDAO')


class ProductosController{
 
    async guardarProducto(req, res) {
 
        const { title, price, url } = req.body
        const productoAgregado = productoDao.guardarProducto(req.body)
        res.send(productoAgregado)
    }
 
    async mostrarProductos(req, res){
        res.send(productos)
    }
   
    async mostrarProducto(req, res){
        res.send(producto)
    }
   
    async actualizarProducto(req, res){
        const { title, price, url } = req.body
       
 
        res.send(producto)
    }
 
    async eliminarProducto(req, res){
        const id = req.params.id
       
        res.send(eliminarProd)
    }
}
 
module.exports = new ProductosController()

