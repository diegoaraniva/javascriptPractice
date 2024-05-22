"use strict";

//
var botonUno = document.getElementById("botonColor");
var botonDos = document.getElementById("botonClase");

function intercambiarColorEnc(){
    var encabezado = document.getElementById("encabezadoUno");
    encabezado.classList.toggle("encabezadoDos"); //Intercambia nombre de clases
}

function agregarClase(){
    var cajas = document.querySelector("div");
    cajas.classList.add("cajas"); // O bien, remove() className() Tambien es posible para agregar un nombre

}

botonUno.addEventListener("click", intercambiarColorEnc); // removeEventListener() es otra opcion, "no se invoca la funcion"
botonDos.addEventListener("click", agregarClase);
