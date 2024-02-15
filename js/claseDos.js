/* Comentarios en JS */
// Comentario de una linea

//Variables de operadores
var saludo = "Diego";
const EMPRESA = "Academia europea";
var suma = 5 + 4;
var resta = 5 - 4;
var multiplicacion = 5 * 4;
var division = 5 / 4;
var modulo = 5 % 4;

//Tipos de variables
var ind;
var booleano = true;
var numero = 30.6;
var cadena = "";
var enteroLargo = 100n;
var vacio = null;

alert("Bienvenido a JS " + saludo);
alert("Trabajo en: " + EMPRESA);
//Operadores aritmeticos
alert("El resultado es para la suma: " + suma + ", para la resta: " + resta + ", para la multiplicación: " + multiplicacion + ", para la división: " + division + ", y para el modulo: " + modulo);
//Operadores decremento e incremento
suma--;
alert("Decrementando a la suma: " + suma);
suma++;
alert("Decrementando a la suma: " + suma);

//Operadores de asignación compuesta
//Redefinir variables
suma += 20;
resta -= 20;
multiplicacion *= 2;
division /= 2;
modulo %= 2;
alert("Los nuevos resultados son, para la suma: " + suma + ", para la resta: " + resta + ", para la multiplicación: " + multiplicacion + ", para la división: " + division + ", y para el modulo: " + modulo);
alert(typeof ind + " " + typeof booleano + " " + typeof + numero + " " + typeof cadena + " " + typeof enteroLargo + " " + vacio);