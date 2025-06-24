const { createElement } = require("react");

const app = () => {
    const divRoot= document.getElementById("root");

    const titulo =document.createElement("h1");
    titulo.textContent ="Bienvenido al curso de REACT";
    divRoot.appendChild(titulo);

}
document.addEventListener("DOMContentLoaded", app);
