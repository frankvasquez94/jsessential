"use strict";

try {
    var x = y;
}catch(error){
    console.log("==============manejo de errores===========");
    console.log(error.name);
    console.log(error.message);    
}


var num1 = 10;
var num2 = 20;

try {

    if(num1 > num2) {
        console.log(`Numero ${num1} es mayor que ${num2}`);        
    }else{
        throw Error(`Numero ${num1} no es mayor que ${num2}`)
    }
}catch(error){
    console.log("==============manejo de error personalizado===========");
    console.log(error);
}