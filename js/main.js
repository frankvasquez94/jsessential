"use strict";

try {
    var x = y;
}catch(error){
    console.log("==============manejo de errores===========");
    console.log(error.name);
    console.log(error.message);    
}