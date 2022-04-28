const {Router} = require('express')
const route = Router()
const ProductosController = require('../controllers/productoController')

route.get('/', async (req,res)=> {
    res.send('Hello World')
})

route.post('/', ProductosController.guardarProducto)

route.get('/', ProductosController.traerProductos)

route.get('/:id', ProductosController.traerProducto)

route.delete('/:id', ProductosController.eliminarProducto)

route.put('/id', ProductosController.actualizarProducto)

module.exports = route;
