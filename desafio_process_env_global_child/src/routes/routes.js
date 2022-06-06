import { Router } from 'express'
import passport from "passport";
import { isAuth } from '../middlewares/authenticated.js'
import {objInfo} from '../utils/info.js'
import { fork } from "child_process";

const rutas = Router()


/**
 * Rutas get para renderizar las vistas
 */
rutas.get('/', isAuth, (req, res) => res.render('productos', {
    user: req.user
}))

rutas.get('/login', (req, res) => {
    if (req.isAuthenticated()) return res.redirect('/ecommerce')
    res.render('login')
})

rutas.get('/register', (req, res) => {
    if (req.isAuthenticated()) return res.redirect('/ecommerce')
    res.render('register')
})

rutas.get('/error', (req, res) => {
    if (req.isAuthenticated()) return res.redirect('/ecommerce')
    res.render('error-login')
})

rutas.get('/logout', isAuth, (req, res) => {
    req.logout(err => {
        if (err) return err
        res.redirect('/ecommerce/login')
    })
})

// routes.get('/', isAuth, (req, res) => res.render('products', {
//     user: req.user
// }))

rutas.get('/info', (req,res)=> {
    res.render('info', {data : objInfo})
})

rutas.get('/api/random', (req,res)=> {
   const cantidad = req.query.cantidad || 100000000
    
    

    console.log("Ejecutando la funcion randomNumbers");

    const child = fork("random.js", cantidad)

    child.on("message", function (respuesta) {
        res.send(respuesta)
    });

})

/**
 * Rutas para autenticar
 */

rutas.post('/login', passport.authenticate('login', {failureRedirect: '/ecommerce/error'}), (req, res) => res.redirect('/ecommerce/'))

rutas.post('/register', passport.authenticate('signup', {failureRedirect: '/ecommerce/error'}), (req, res) => res.redirect('/ecommerce/login'))


export default rutas