const mongoose = require('mongoose')
const app = require('./app/app')
const {process} =require('dotenv').config()
const PORT = process.env.PORT


mongoose.connect('mongodb://localhost:27017/ecommerce') 

app.listen(PORT , ()=> {
    console.log(`Listen on http://locahlhost${PORT}`)
})