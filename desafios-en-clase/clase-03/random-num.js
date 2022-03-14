console.clear()

function randomNumber(min, max){
    const r = Math.random()*(max-min) + min
    return Math.floor(r)
}


for(let i = 0 ; i <= 10000 ; i++){
   let ids = randomNumber(0,20)
   myObj = {} ;
   myObj.key = ids;

   if (!myObj.key){
       myObj.key = 1 
   } else {
       myObj.key += 1
   }
   
    console.log(myObj)
}

