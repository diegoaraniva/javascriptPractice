"use strict";

function enfocando(e){ //El objeto e, existe por defecto y sirve para saber el elemento que desencadenó el evento
    console.log("Hola mundo" + e.target + e.type);
    e.target.style.background = "red"; //El objeto element es util para cambiar propiedades del objeto que desencadeno´el evento
}

var eventosAntes = function (){
    var texto = document.querySelector("section > input"); //Query selector regresa solo un valor, el primero, no obstante, querySelectorAll() devuelve un arreglo.
    texto.addEventListener("focus", enfocando);
}

window.addEventListener("load", eventosAntes);