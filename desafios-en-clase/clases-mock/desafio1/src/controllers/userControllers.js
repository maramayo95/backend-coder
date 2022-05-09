const UserService = require("../services/userService");

class UserController {
  constructor() {
    this.userService = new UserService();
    this.createUserController = this.createUserController.bind(this);
    this.getUsers = this.getUsers.bind(this)
    this.addUser = this.addUser.bind(this)
    this.updateUser = this.updateUser.bind(this)
    this.deleteUser = this.deleteUser.bind(this)

  }
  async createUserController(req, res) {
    const { cant } = req.query;
    try {
      const response = await this.userService.createUserService(cant);
      res.status(200).json({ users: response });
    } catch (error) {
      console.log(error);
    }
  }
  async getUsers(req, res) {
    let id = req.params.id;
    try {
      const response = await this.userService.getUsers(id);
      res.status(200).json({ usuarios: response });
    } catch (error) {
      console.log(error);
    }
  }
  async  addUser(req,res){
    await this.userService.addUser()
    res.status(200).send('Usuario agregado')
  }
  async updateUser(req, res) {
      const {id} = req.params
      const {body} = req

      await this.userService.updateUser(id,body)
      res.status(200).send('Usuario actualizado')
  }
  async deleteUser(req, res) {
    const {id} = req.params
    await this.userService.deleteUser(id);
    res.status(200).send('Usuario Borrado')

  }

}

module.exports = UserController;
