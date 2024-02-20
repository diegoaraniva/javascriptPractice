"use strict";
let texto = "1234";
let cadena = "43.5";
let otraCadena = "Esto es otra prueba";
let cadenaConst = new String("Esto es un objeto");
let arreglo = ["Azul", "Rojo", "Verde", 1234, false];

//Variables primitivas VS Objeto String
let cadenaUno = "2 + 2";
let cadenaDos = new String("2 + 2");

texto = Number(texto);
cadena = parseInt(cadena); //Parsea a un numero entero. Opcion B es parseFloat(); para conservar decimales
console.log(texto + " " + typeof texto);
console.log(cadena + " " + typeof cadena);
console.log(cadenaConst + " " + typeof cadenaConst);

//Metodos para cadenas, funciona tanto en variables, como objetos
console.log(cadenaConst.toUpperCase()); //Toda la cadena en mayusculas
console.log(cadenaConst.toLowerCase()); //Toda la cadena en minusculas
console.log(cadenaConst.charAt(5)); //Extrae el caracter en la pocisión señalada
console.log(cadenaConst.length); //Muestra la longitud de la cadena
console.log(otraCadena.substring(13, 19)); //Obtener un texto determinado en una cadena. El ultimo numero no lo toma en cuenta. Se puede invertir el orden de los numeros, pero se obtendra la misma subcadena
console.log(eval(cadenaDos));
console.log(eval(cadenaUno));
console.log(eval(cadenaUno.valueOf())); //Convierte un objeto String en una cadena primitiva
console.log(arreglo);
console.log(arreglo.length);


