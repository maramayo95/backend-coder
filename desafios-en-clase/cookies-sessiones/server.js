const express = require('express')
const cookieParser = require('cookie-parser')
const session = require('express-session')

const app = express()
app.use(cookieParser())

app.use(session({
    secret: 'secreto',
    resave: true,
    saveUninitialized: true
}))

app.get('/con-session', (req,res)=> {
    if(req.session.contador){
        req.session.contador++
        res.send(`Usted ha visitado el sitio ${req.session.contador} veces`)
    }
    else {
        req.session.contador = 1;
        res.send("Bienvenido")
    }
})

app.get('/logout', (req,res)=> {
    req.session.destroy(err => {
        if(!err){
            res.send('Logout Ok')
        } else{
            res.send({status: 'logout failed', body : err } )
        }
    })
})

app.get('/login', (req,res)=>{
    const {username,password} = req.query
    if (username !== 'pepe' || password !== 'pepepass'){
        return res.send('login failed')
    }
    req.session.user = username
    req.session.admin = true
    res.send('login success')
})

function auth(req,res,next){
    if(req.session?.user === 'pepe' && req.session?.admin){
        return next()
    }
    return res.status(401).send('error')
}

app.get('/privado', auth , (req,res)=> {
    res.send('Si estas viendo esto es por que ya te logueaste')
})

app.get('/set', (req,res)=> {
    res.cookie('server','express').send('cookie set')
})

app.listen(8080)