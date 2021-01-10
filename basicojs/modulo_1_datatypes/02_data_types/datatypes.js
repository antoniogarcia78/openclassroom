// Existen 3 tipos primitivos principales
// number
// string
// boolean
let positive = 12;
let negative = -14;
let decimal = 42.12312321;

console.log(typeof positive); // typeof da tipo de una variable

// En Javascript hay que tener cuidado con los decimales
console.log(0.1+0.2); // no da 0.3 sino 0.30000000000000004
// Esto produce errores de rendondeo.
// 2 soluciones
// 1. usar enteros para las operaciones y luego dividir por 100 para tener 2 decimales
// 2. Usar librerias como http://numeraljs.com/, https://currency.js.org/ o https://mathjs.org/

// Boolean
let userIsAdmin = false;
let userLogged = true;

// String. Se puede usar ' o " pero usar una para cerrar y otra para abrir
let nombre = 'Antonio';
let apellidos = "Garcia Marin";

// concatenar
let nombreCompleto = nombre + ' ' + apellidos;

// JS es tipado debil y hay que tener cuidado al mezclar
let a=true;
let b=1;
let c="1";
console.log(a+b); // 2 porque true es considera 1. false es 0
console.log(b+c); // 11 porque convierte b en cadena y hace concatenacion
console.log(a+c); // true1 porque convierte a en cadena y hace concatenacion
console.log(c+a); // 1true porque convierte a en cadena y hace concatenacion
console.log(a+b+c); // 21 = 1+1+"1" suma una parte y luego concatena


// Existe otros tipos de datos: Objet,null, undefined, Symbol
// FUENTE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures