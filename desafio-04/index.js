    const express = require('express');
    const Contenedor = require('./Contenedor');
    const app = express()
    const rutaProductos = express.Router();
    const PORT = 8080 
    
    
    app.use(express.json())
    app.use(express.urlencoded({extended: true}))
    app.use('/static', express.static(__dirname + '/public'))
    
    
    const storeProducts = new Contenedor()
    
    
    app.use('/api/productos', rutaProductos)
    rutaProductos.get('/', (req,res) => {
        const productos =  storeProducts.productsAll

        res.json(productos)
    })
    rutaProductos.get('/:id', (req,res) => {
        const producto = storeProducts.getProductById(req.params.id)
       if(producto) {
           res.send(producto)
       } else {
           res.status(404).send({error: 'No existe el producto que está buscando'})
       }
    })
    rutaProductos.put('/:id', (req,res)=> {
        const producto = storeProducts.updateProduct(req.params.id,req.body)
        res.send(producto)
    })
    rutaProductos.delete('/:id', (req,res)=> {
        storeProducts.deleteProduct(req.params.id)
       if(producto){
           res.send(`Se elimino ${req.params.id} `)
       } else {
           res.status(404).send({error: 'No existe el producto que estas buscando'})
       }
    })
    rutaProductos.post('/', (req,res)=> {
        //console.log(req.body)
        if(req.body.title && req.body.price) {
            const producto = storeProducts.saveProduct(req.body) 
            res.send(producto)
        } else {
            res.send('Carga los productos ')
        } 

    })




    const server = app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`))
    server.on('error', (err) => console.log(err.message))

