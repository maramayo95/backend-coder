
export const isAuth = (req, res, next) => {
    if (req.isAuthenticated()) return next()
    res.redirect('/ecommerce/login')
}