"use strict";

var variableGlobal = "Hola, el número es: "; //Se puede utilizar en todo el documento

//Funciones que no retornan valor:

function mostrarMensaje(){
    var variableLocal = 5; //Limitada solamente a la funcion
    document.write("<h1>" + variableGlobal + variableLocal + "</h1>");
}

function calcularArea(radio){
    var area = Math.PI*(Math.pow(radio, 2));
    document.write("<p>" + variableGlobal + area.toFixed(2) + "</p>"); //toFixed() Es para indicar el numero de decimales
}

function totalPago(importe, impuesto){
    var total = Number(importe) + Number(impuesto);
    document.write("<p>" + variableGlobal + total + "</p>");
}

//Funciones que retornan valores:

function conversionCadena(cadena, tipo){
    var cadenaConvertida;
    if(tipo == "Mayuscula"){
        cadenaConvertida = cadena.toUpperCase();
    } if (tipo == "Minuscula"){
        cadenaConvertida = cadena.toLowerCase();
    }
    return cadenaConvertida;
}

//Funcion anonima
var nombreFuncion = function holaMunda(){
    alert("Hola mundo");
}