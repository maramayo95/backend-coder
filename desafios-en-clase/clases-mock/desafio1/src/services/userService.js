const createUser = require('../utils/userUtil')
 

class UserService {
    constructor(){
        this.users = []
        this.lastid = 0
    }
    async createUserService(cant=50){
        this.users = [];
            for (let index = 0; index < cant; index++) {
                const user = createUser()
                user.id = index + 1
                this.users.push(user)                
            } 
        this.lastid = cant;    
        return this.users;
    }
    async getUsers(id){
        if(!id){
        return this.users
        } else{
            return this.users.filter((user) => user.id === Number(id) )
        }
    }
    async addUser(){
        const user = createUser();
        user.id = this.lastid + 1;
        this.lastid++
        this.users.push(user)
    }
    async updateUser(id, data){
        if(this.users.length === 0) throw new Error('No hay Data')
        let index = null;
        try {
            let usuario = this.users.filter((usuario, _index)=> {
                if(usuario.id === Number(id)){
                    index = _index
                    return usuario
                }
            })[0]
            Object.assign(usuario,data)
            this.users[index] = usuario;

        }catch (e){
            console.log(e)
        }
    }
    async deleteUser(id){
        if(this.users.length === 0) throw new Error('No hay Data')
        let index = null;
        try {
            let usuario = this.users.filter((usuario, _index)=> {
                if(usuario.id === Number(id)){
                    index = _index
                }
            })[0]
            this.users.splice(index, 1);
        }catch (e){
            console.log(e)
        }
    }
}

module.exports = UserService

