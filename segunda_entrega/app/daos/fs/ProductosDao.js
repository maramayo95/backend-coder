
const ContenedorArchivos = require('../../contenedor/ContenedorArchivos')

class ProductosDao extends ContenedorArchivos {
    constructor(){
        super('./__temporal__/productos.txt')
    }
    async guardarProducto(data){
        try {
            await super.guardar(data)
        } catch (error) {
            throw new Error(e.message)
        }
    }
}

module.exports = new ProductosDao()