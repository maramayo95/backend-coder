const express = require('express')
const UserControllers = require('../controllers/userControllers')

 class UserRoute extends express.Router{
    constructor(){
        super()
        this.UserControllers = new UserControllers()
        
        this.post("/popular", this.UserControllers.createUserController)
        this.get("/:id?", this.UserControllers.getUsers),
        this.post("/" , this.UserControllers.addUser)
        this.put("/:id", this.UserControllers.updateUser),
        this.delete("/:id", this.UserControllers.deleteUser)
    }

}

module.exports = UserRoute
