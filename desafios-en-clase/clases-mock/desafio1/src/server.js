const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const nombres = ["juan", "pedro", "roberto"]
const apellidos = ["perez", "garcia", "lopez"]
const colores = ["rojo", "verde", "azul"]


app.get("/test", (req,res)=> {
    const users = []
    for(let i = 0; i< 10; i++){
        const user = {
            nombre: nombres[Math.round(Math.random() * (nombres.length -1) )],
            apellido: apellidos[Math.round(Math.random() * (apellidos.length -1) )],
            color: colores[Math.round(Math.random() * (colores.length -1)  )]
        }
       users.push(user)
    }
    res.status(200).json(users)
})

const PORT = 3001;

const server = app.listen(PORT, ()=> {
    console.log("🔥 Servidor en localhost 3001");
})
server.on('err' , (err)=> console.log(err))

