"use strict";

var contenedor = document.getElementById("contenedor");
var banderas = document.getElementById("banderas");
var boton = document.getElementById("boton");

var posts = null;
var paises = null;
boton.addEventListener('click', function(){

});

boton.addEventListener('click', function(){
    getPosts().then(data => data.json()).then(data => {
        posts = data;
        mostrarDatos(posts);
        // Retonamos la promesa de las banderas
        // Dentro de una promesa
        return getBanderas();
    }).then(data => data.json()).then(data => {
        paises = data;
        mostrarBanderas(paises);
    });
});

// Retorna la promesa de posts
function getPosts(){
    return fetch("https://jsonplaceholder.typicode.com/posts");
}

// Retorna la promesa banderas
function getBanderas(){
    return fetch("https://restcountries.com/v2/all");
}

function mostrarDatos(posts)  {
    posts.map((post, i) => {
        let title = document.createElement("h1");
        let content = document.createElement("p");
        let division = document.createElement("hr");
        title.innerHTML = (i + 1) + " - "+ post.title;
        content.innerHTML = post.body;        
        contenedor.appendChild(title);
        contenedor.appendChild(content);
        contenedor.appendChild(division);
    });

}


function mostrarBanderas(paises) {

    paises.map((pais, i) => {
        var img = document.createElement("img");
        img.src = pais.flag
        img.height = 20;
        img.width = 40;
        banderas.appendChild(img);
    });
}