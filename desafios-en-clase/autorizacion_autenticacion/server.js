// Modulos

import express from 'express'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import bodyParser from 'body-parser'


const app = express()


// Middlewares


// Session
app.use(cookieParser())
app.use(session({
    secret: '123456789',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60000
    }
}))

// Base de datos
const usuarios = []

// Motor de plantillas
app.set("view engine", "pug");
app.set("views", "./src/views");

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())

//Rutas
app.get("/", function (req, res, next) {
    // res.render("index", locals);
    res.redirect('/login')
});
app.get('/login', (req,res)=> {
    res.render('login')
})
app.get('/registro', (req,res)=> {
    res.render('registro')
})
app.get('/login-error', (req,res)=> {
    res.render('login-error')
})
app.post('/registro', (req,res)=> {
    const {nombre, password, direccion} = req.body

    const usuario = usuarios.find(usuario => usuario.nombre == nombre )

    if(usuario){
        res.render('registro-error')
    } else {
        usuarios.push({nombre,password,direccion})
        res.redirect('/login')
        console.log(usuarios);
    }

})
app.post('/login', (req,res)=> {
    const {nombre, password, direccion} = req.body
    const usuario = usuarios.find(usuario => usuario.nombre == nombre)

    if(!usuario){

        res.render('/login-error')
    } else {
        req.session.nombre = nombre;
        req.session.contador = 0;
        res.redirect('/datos')

    }

    // usuarios.push({nombre,password,direccion})
    // res.redirect('/login')
    // console.log(usuarios);
})
app.get('/datos', (req,res)=> {
    if(req.session.nombre){
        req.session.contador++
        const usuario = usuarios.find(usuario => usuario.nombre == req.session.nombre)
        res.render('datos', {datos: usuario, contador:req.session.contador})
    }else{
        res.redirect('/login')
    }
})
app.get('/logout', (req,res)=> {
    req.session.destroy(err => {
        res.redirect('/login')
    })
})

//Server
const PORT = 8080;
const server = app.listen(PORT, () =>{
    console.log(`Servidor corriendo en ${PORT} en http://localhost:${PORT}`)
}  )
server.on('error', error => {
    console.log(`Error en el servidor ${error}`)
})
