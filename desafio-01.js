class Usuario {
      constructor(nombre, apellido, libros, mascotas) {
          this.nombre = nombre;
          this.apellido = apellido;
          this.libros = libros;
          this.mascotas = mascotas;
      }
    
      getFullName() {
     return console.log(`Mi nombre es ${this.nombre} ${this.apellido}`)
    }

      addMascota(mascota) {
          let arr = this.mascotas; 
         return  arr.push(mascota);
      }

      addBook(nombre,autor) {
        let arr = this.libros; 
           return  arr.push({nombre, autor});
    }

      countMascota() {
       let arr = this.mascotas; 
        return console.log(arr.length)
      }
      
      getBookNames() {
        return  this.libros.map(libro => { console.log(libro)})
      }
      
     
}

const usuarioUno = new Usuario( 'Matias', 'Aramayo', ['Fahrenheit 451', 'Un Mundo Feliz', '1984'], ['Kassandra', 'Lobo'])

//console.log(usuarioUno);

console.log(usuarioUno.getFullName());
console.log(usuarioUno.addMascota('Pelusa'))
console.log(usuarioUno.countMascota())
console.log(usuarioUno.addBook('Dune', 'Frank Herbert'))
console.log(usuarioUno.getBookNames())