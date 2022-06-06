// import {fork} from 'child_process'



function randomNumbers() {
    const numeros = []
    const min = 1;
    const max = 1000;
    const count = process.env.COUNT
    for(let i = 0; i <  count  ; i++) {
        const numbers = {numbers: Math.floor(Math.random() * (max - min) + min)}
        numeros.push(numbers)
    } 
    return numeros
}



process.on('message', (message) => {
    if (message === 'start') {
    //   const operation = randomNumbers();
      process.send(randomNumbers());
    }
  });