const express = require('express');
const { engine } = require('express/lib/application');
const res = require('express/lib/response');
const path = require("path")

const app = express();
const port = 8080;


app.set('views', './views')
app.set('view engine', 'pug');

app.get("/", (req,res )=> {
    res.status(200).send("Aloha")
})
app.get("/layout", (req,res)=> {
    res.render('layout.pug', {mensaje: 'Usando pug con express'})
})





app.listen(port, ()=> {
    console.log(`Listening to request on http://localhost:${port}`)
})

