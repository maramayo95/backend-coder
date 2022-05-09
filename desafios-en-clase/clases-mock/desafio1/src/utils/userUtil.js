const {faker} = require('@faker-js/faker')

function generateUser(){
    return{
        nombre: faker.name.findName(),
        email: faker.internet.email(),
        website: faker.internet.url(),
        image: faker.image.imageUrl()
    }
}

module.exports = generateUser