document.write("<h1>Hello World</h1>")

//Tipos de datos
console.log("Hello world"); // String
console.log('Hello world'); // String

// Number
console.log(10000);
console.log(2.5);
console.log(3.56);

//Boolean
console.log(true);
console.log(false);

// Arrays de distintos tipos
console.log(['joe', 'ryan', 'martha']);
console.log([1, 2, 3]);
console.log([true, false, true]);

// Object
console.log({
    username: 'ryan',
    score: 70.4,
    hours: 14,
    professionaL: true
});

console.log({
    username: 'joe',
    score: 0.4,
    hours: 1,
    professionaL: false
});

console.log("This is a string");
console.log(10.4);
console.log(true);
console.log([1, 2, 3]);

// Variables
// var y let se diferencian en el alcance.
var nameuser = "john";
let lastname = "carter";

nameuser = 'pepe';

// const significa constante y no se puede cambiar el valor posteriormente
const PI = 3.1415;
console.log(PI);

// Concepto camel case:Se empieza el nombre de una variable ccon minúscula,
// luego, el inicio de cada palabra nueva se escribe con mayúsculas,
// hace más amable la lectura de código. 

let nombreDePersona = 'gordon';

// Esto es un comentario
/**
 * Esto es otro comentario en líneas continuas.
 */

// Operadores
// Aritméticos
let numberOne = 60;
let numberTwo = 100;

let result1 = numberOne + numberTwo;
let result2 = numberOne - numberTwo;
let result3 = numberOne * numberTwo;
let result4 = numberOne / numberTwo;
let result5 = numberOne % numberTwo;

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);

// Concatenación
let completeName = nameuser + lastname;

console.log(completeName);

// De comparacion

let comparacion1 = numberOne > numberTwo; // Mayor que
let comparacion2 = numberOne < numberTwo; // Menor que
let comparacion3 = numberOne == numberTwo; // Igual a
let comparacion4 = numberOne != numberTwo; // Diferente a
let comparacion5 = numberOne <= numberTwo; // Menor o igual a
let comparacion6 = numberOne >= numberTwo; // Mayor o igual a

console.log(comparacion1);
console.log(comparacion2);
console.log(comparacion3);
console.log(comparacion4);
console.log(comparacion5);
console.log(comparacion6);