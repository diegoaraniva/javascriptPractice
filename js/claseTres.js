"use strict"; //Debe ir siempre al inicio del documento, o de una funcion. Fuerza el uso de la sintaxis correcta de JS
debugger;

//Excepciones
var a = 5;
var b = 5;
var c = a - b;
//Conversiones
var cadenaUno = "Hola";
var cadenaDos = "1234";
var booleano = true;

var operacionUno = a + Number(cadenaUno);
var operacionDos = a + Number(cadenaDos);
var operacionTres = a + Number(booleano);
var cadenaConversion = String(booleano);
var booleanoConversion = Boolean(cadenaDos); //Si el numero es diferente de cero, arrojará verdadero. Solo cero arrojará falso. Lo mismo es con las cadenas

//Manejo de excepciones
try{
    funcionll(); //Llama una funcion no definida
    console.log("El valor de C es: " + c); //Muestra en consola
}catch(err){
    console.log("Se encontro un error: ");
    console.log(err.name);
    console.log(err.message);
}finally{
    console.log("El valor de C es: " + c);
    console.log("Los valores de Operacion 1, 2 y 3, respectivamente, son: " + operacionUno + ", " + operacionDos + ", y " + operacionTres);
    console.log("La conversion arrojó el resultado a cadena: " + cadenaConversion);
    console.log("La conversion arrojó el resultado a booleano: " + booleanoConversion);
    console.log("Ejecución finalizada");
}


