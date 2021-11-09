"use strict";

var contenedor = document.getElementById("contenedor");
var boton = document.getElementById("boton");

var posts = null;
boton.addEventListener('click', function(){

});

boton.addEventListener('click', function(){
    fetch("https://jsonplaceholder.typicode.com/posts").then(data => data.json()).then(data => {
        posts = data;
        mostrarDatos(posts);
    });
});

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