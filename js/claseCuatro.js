"use strict";

//BOM
window.alert("Hola mundo");
let booleano = window.confirm("¿Desea salir de la pagina WEB?");
let cadena = window.prompt("Ingrese su correo", "ejemplo@dominio.com");
let alto = window.outerHeight;
let ancho = window.outerWidth; //Anchura incluyendo la interfaz del navegador
let altoI = window.innerHeight; //Altura incluyendo la interfaz del navegador
let anchoI = window.innerWidth; //Anchura sin incluir la interfaz del navegador
let altoS = window.screen.height;
let anchoS = window.screen.width;
let enlace = window.location; //Altura sin incluir la interfaz del navegador
let datosNavegador = window.navigator;
//window.location.reload();

//Impresiones en consola
window.console.log("Hola mundo");
window.console.log(booleano);
window.console.log(cadena);
window.console.log("La altura de la pantalla es: " + alto + "PX y el ancho es: " + ancho + "PX");
window.console.log("La altura de la pantalla es: " + altoI + "PX y el ancho es: " + anchoI + "PX");
window.console.log("La altura de la pantalla es: " + altoS + "PX y el ancho es: " + anchoS + "PX");
window.console.log("El enlace de la pagina es: " + enlace);
window.console.log("Datos del navegador:");
window.console.log(datosNavegador);

if(booleano == true){
    window.location.href = "https://aranivadiego.me"; //Redireccionar a otro sitio WEB, o pagina
    window.open("https://aranivadiego.me");
}