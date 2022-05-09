const express = require('express')
const app = express()
const UserRoute = require('./routes/userRoute')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api/usuarios', new UserRoute())

const PORT = 3001;

const server = app.listen(PORT, ()=> {
    console.log("⚡ Servidor en localhost 3001");
})
server.on('err' , (err)=> console.log(err))

