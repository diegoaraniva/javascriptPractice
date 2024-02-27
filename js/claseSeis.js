"use strict";

let arreglo = ["Amarillo", 12, false, null, "Rosado"];

console.log(arreglo.length);
console.log(arreglo[3]);

arreglo[3] = 12; //Modificar los valores en un arreglo
console.log(arreglo[3]);

/*Agregando un valor a un arreglo
Al final*/
arreglo.push(45);
console.log(arreglo);

//Al inicio
arreglo.unshift("Blanco");
console.log(arreglo);

/*Eliminando elementos
Al inicio*/

arreglo.shift();
console.log(arreglo);

//Al final

arreglo.pop();
console.log(arreglo);

/*Ordenando arreglos
Forma ascendente*/

arreglo.sort();
console.log(arreglo);

//Descendente

arreglo.reverse();
console.log(arreglo);

//Arreglo bidimensional

let arregloDos = new Array(2);
arregloDos[0] = new Array(2);
arregloDos[1] = new Array(2);

arregloDos[0] = ["Amarillo", "Rojo"];
arregloDos[1] = ["Verde", "Naranja"];

console.log(arregloDos);
console.log(arregloDos[1][1]);

//Objeto date
let fechaHoy = new Date();
console.log(fechaHoy);

//Arreglo meses
const arregloMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const arregloSemana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

let nuevaFecha = new Date("January 6 1998");
console.log(nuevaFecha);

// Año, Mes, Dia, Hora, Minuto, Segundo
let practicaFecha = new Date(1996, 5, 25, 11, 35, 0);
console.log(practicaFecha);

//Operacion
let totalTiempo = (fechaHoy - practicaFecha);
console.log("La cantidad de MiliSegundos transcurridos es: " + totalTiempo);

//Metodos
console.log(fechaHoy.getFullYear());
console.log(arregloMeses[fechaHoy.getMonth()]);
console.log(fechaHoy.getDate());
console.log(arregloSemana[fechaHoy.getDay()]);
console.log(fechaHoy.getHours()); //De cero a veintitres

//Editar valores en un fecha
practicaFecha.setFullYear(2002);
practicaFecha.setMonth(7);
console.log(practicaFecha);

//
console.log(practicaFecha.toDateString() + " " + typeof practicaFecha.toDateString());
