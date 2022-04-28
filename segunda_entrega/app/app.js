const express = require('express')
const app = express()
const productosRoute = require('../app/routes/productosRoutes')

app.use(express.json())
app.use('/api/productos', productosRoute)





module.exports = app ;
