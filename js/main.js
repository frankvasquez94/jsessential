
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



// busqueda con find

var menu = [
{nombre: "Ceviche", precio: 15.25, pais: "Peru"},
{nombre: "Tacos", precio: 10.30, pais: "Mexico"},
{nombre: "Pasta", precio: 11.50, pais: "Italia"},
];

var platillo = menu.find(platillo => platillo.nombre == "Ceviche");
console.log("=============Busqueda con find==============================");
console.log(platillo);

// Find index
console.log("===========Find index==================")
var numPlatillo = menu.findIndex(platillo => platillo.nombre == "Pasta");
console.log(`El platillo ${menu[numPlatillo].nombre} esta en la posicion ${numPlatillo}`);