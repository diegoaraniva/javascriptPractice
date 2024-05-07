"use strict";
let numero = prompt();
document.write("<h3> El valor redondeado hacia arriba de PI es: " + Math.ceil(Math.PI) + "</h3>"); //Redondea hacia arriba (Entero)
document.write("<h3> El valor  redondeado hacia abajo de PI es: " + Math.floor(Math.PI) + "</h3>"); //Redondea hacia abajo (Entero)
document.write("<h3> El valor redondeado de PI es: " + Math.round(Math.PI) + "</h3>"); //Redondea hacia el valor mas cercano (Entero)
document.write("<h3> El valor truncado de PI es: " + Math.trunc(Math.PI) + "</h3>"); //Solo elimina los digitos decimales
document.write("<p> El valor absoluto de menos uno es: " + Math.abs(-1) + "</p>"); //Valor absoluto
document.write("<h2> Numero aleatoreo entre cero y uno: " + Math.random() + "</h2>"); //Numero aleatoreo entre cero y uno
document.write("<h3> El numero cinco elevado al cuadrado es: " + Math.pow(5, 2) + "</h3>"); //Elevar una base a una potencia
document.write("<h2> El numero mas alto de la lista es: " + Math.max(5, 6, 4, 7, 9, 12) + "</h2>"); //Devuelve el valor mas alto de la lista
document.write("<h2> El numero mas bajo de la lista es: " + Math.min(5, 6, 4, 7, 9, 12) + "</h2>"); //Devuelve el valor mas bajo de la lista
document.write("<h3> La raiz cuadrada de nueve es: " + Math.sqrt(9) + "</h3>"); //Devuelve la raiz cuadrada
document.write("<h3> Numero aleatoreo entre uno y diez: " + Math.floor(Math.random() * 11) + "</h3>"); //Numero aleatoreo entre uno y diez
document.write("<p> Multiplicando y redondeando numero: " + Math.ceil(numero)); //Redondea hacia arriba el numero de la variable

//Ejercicios

document.write("<h1> Numero aleatoreo entre uno y cinco: " + Math.ceil(Math.abs((Math.random() * 10) - 5)) + "</h1>");