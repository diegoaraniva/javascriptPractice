"use strict";

function agregarParrafo(){
    var cajaUno = document.getElementById("cajaUno");
    cajaUno.innerHTML = "<p> Hola mundo </p>";
}

function sustituirParrafo(){
    var cajaUno = document.getElementById("cajaUno");
    cajaUno.outerHTML = "<p> Hola mundo </p>";
}

function agregarParrafoCerca(){
    var cajaUno = document.getElementById("cajaUno"); //Por esto se reomienda utilizar mejor oyentes en lugar de eventos de HTML
    cajaUno.insertAdjacentHTML("beforebegin", "<h1> Hola mundo </h1>"); //beforebegin, afterbegin, beforeend, afterend
}

function crearLista(){
    var item = "";
    var lista = document.createElement("ul"); //Simplemente crea un elemento
    var cajaUno = document.getElementById("cajaUno");
    var opciones = ["Opcion uno", "Opcion dos", "Opcion tres"];
    for(var i = 0; i < opciones.length; i++){
        item += "<li>" + opciones[i] + "</li>";
    }
    lista.innerHTML = item;
    cajaUno.appendChild(lista); //Tambien existe removeChild()
}