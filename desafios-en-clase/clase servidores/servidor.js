const http = require('http')

const server = http.createServer((peticion, respuesta) => {
   respuesta.end('Hola mundo')
})

const connectedServer = server.listen(8080, () => {
   let fecha = new Date();
   let hora = fecha.getHours()
   if ((hora >= 6) && (hora <= 12)){
       console.log('Buenos dias!')
   } else if ((hora >= 13) && (hora <= 19)) {
       console.log('Buenas Tardes')
   } else {
       console.log('Buenas Noches')
   }
  
   console.log(hora) 
})
