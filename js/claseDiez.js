"use strict";

var limite = 1;
var dato;
var arreglo = new Array();
var numero = prompt("Ingrese un número: ");
var opcion = prompt("Ingrese una opción: ");

var multiplo = function (numero){
    if(numero % 3 == 0){
        document.write("<h2>El número ingresado es multiplo de tres</h2>");    
    } else if (numero % 3 != 0){
        document.write("<h2>El número ingresado NO es multiplo de tres</h2>");   
    }
};

var ciclo = function (){
    do{
        document.write("3 x " + limite + " = " + (3*limite) + "<br />");    
        limite++;
    } while(limite <= 10);
};

var arreglos = function (){
    while(limite != 11){
        dato = prompt("Ingrese un valor al arreglo");
        arreglo.push(dato);
        limite++;
    }
    document.write(arreglo);
}

switch(opcion){
    case "2":
        document.write("<h1> Tabla del dos </h1>");
        for(let i = 1; i <= 10; i++){
            document.write("2 x " + i + " = " + (2*i) + "<br />");
        }
    break;

    case "3":
        ciclo();
    break;

    case "4":
        multiplo(numero);
    break;

    case "5":
        arreglos();
    break;

    default:
        document.write("<h2>No ingresó ninguna opción</h2>");
}