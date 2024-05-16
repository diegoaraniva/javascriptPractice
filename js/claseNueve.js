"use strict";

var condicion = prompt("Ingrese una opción");
var edad = prompt("Ingrese una su edad");

(condicion == 3) ? document.write("<h1> El valor es verdadero usando 'ternario' </h1>") : document.write("<h1> El valor es falso usando 'ternario' </h1>") ;

if(condicion == 4){
    document.write("<h1> El valor es verdadero usando 'if' </h1>");    
} else {
    document.write("<h1> El valor es falso usando 'if' </h1>");
}

if(condicion == 4 && edad >= 18){
    document.write("<h1> El valor es verdadero usando 'if' con dos condiciones </h1>");     
}