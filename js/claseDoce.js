"use strict";

function obtenerElementos(){
    var encabezado = document.getElementsByTagName("h1"); //Ambas opciones son para llamar usando etiquetas: document.querySelector("") document.querySelectorAll("")
    var parrafo = document.getElementById("parrafo");
    var parrafos = document.getElementsByClassName("parrafos");
    parrafo.style.color = "red";
    //document.write(encabezado + parrafo + parrafos);
}

var evento = function (cadena){
    console.log(cadena);
}

var eventoTexto = function (cadena){
    console.log(cadena);
}

var eventoCarga = function (cadena){
    console.log(cadena);
}