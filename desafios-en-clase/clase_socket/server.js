const express = require('express')
const {Server : HttpServer} = require('http')
const {Server: IoServer} = require('socket.io')

const app = express()
const httpServer = new HttpServer(app)
const io = new IoServer(httpServer)

app.use(express.static('./public'))
app.get('/', (req,res)=> {
    res.sendFile('index.html', {root:__dirname})
})

    io.on('connection', (socket)=> {
    console.log("usuario conectado")
    socket.emit('messages', messages)

    //Para enviar un mensaje que sea recibido por todos los usuarios
    //io.sockets.emit('mensajes', mensajes)
    
    socket.on('new-message',data => {
        messages.push(data);
        io.sockets.emit('messages', messages);
    });    
    

})

 const messages = [
     { autor: "juan", texto: "hola soy juan "},
     { autor: "dani", texto: "hola soy dani "},
     { autor: "nahir", texto: "hola soy nahir "},
     { autor: "matt", texto: "hola soy matt "}
 ]

const port = 8080;
//En socket se usa httpServer.listen
httpServer.listen(8080, ()=> console.log(`Listening on port http://localhost:${port}/`, 'me quedé en el minuto 01.44.52'))

