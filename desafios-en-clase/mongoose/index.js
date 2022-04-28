const mongoose = require('mongoose')
const {app, PORT} = require('./api/app')

const cn = mongoose.connect("mongodb://localhost/eccomerce", () =>{
    console.log("conected")
}, e => console.error(e.message))

//Conection Events
// mongoose.connection.on('open', ()=> console.log('Database is conected to mongodb://localhost/ecommerce'))
// mongoose.connection.on('error', err => console.log(err.message))
 

app.listen(PORT , ()=> {
    console.log(`Listen on http://localhost:${PORT}`)
})