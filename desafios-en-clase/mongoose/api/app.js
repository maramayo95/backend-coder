const express = require('express')
const app = express()
const PORT = 8080;
const routesProducts = require('./routes/routesProd')

app.use('/api/productos', routesProducts)

module.exports = {app , PORT}