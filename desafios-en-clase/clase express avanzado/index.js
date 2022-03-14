const express = require('express')
const app = express();
const PORT = 8080;

app.use(express.json())
app.use(expres.urlencoded({extended: true})

const server = app.listen(PORT, ()=> {
    console.log(`Servidor http escuchando al puerto ${server.address().port}`)
}) 
server.on("error", error => console.log(`Error en el servidor ${error}`))


const frase = 'Hola a todos como estan'
app.get('/api/frase', (req,res)=>{
    res.send(frase)
})

app.get('/api/letras/:num', (req,res)=> {

    res.send()
})
