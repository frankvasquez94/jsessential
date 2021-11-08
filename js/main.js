
"use strict";


var platillos = ["Ceviche", "Tacos", "Pasta"];

// For in
console.log("=====loop for in ======")
for (let i in platillos) {
    console.log(platillos[i]);
}


// For each

console.log("======For each========")
// Primero va el valor del elemento y luego el indice
platillos.forEach((platillo, i) => console.log(i, platillo));
