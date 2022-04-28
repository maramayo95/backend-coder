const {Router} = require('express')
const routes = Router()
const {listProducts} = require('../controllers/prodControllers')

routes.get("/", listProducts )

module.exports = routes;