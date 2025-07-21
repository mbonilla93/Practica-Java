// Practica 1
const colorFavorito = "Verde";
console.log(colorFavorito);

// Practica 2
let promedioNotas = 8.7;
console.log(promedioNotas);

// Practica 3
let aprobo = true;
console.log(aprobo);

// Practica 4
const anoActual = 2025;
const anoNacimiento = 1993;
const edad = anoActual - anoNacimiento;
console.log(edad);

// Practica 5
let comidasFavoritas = ["Hamburguesa", "Gallo Pinto", "Ramen"];
console.log(comidasFavoritas);

// Practica 6
let variableNula = null;
console.log(typeof variableNula); // typeof es una variable que analiza el tipo de dato

// Practica 7
let lugarNacimiento = "San José, Costa Rica";
console.log("Nací en", lugarNacimiento);

// Practica 8
let nombre = "Marco";
let pais = "Costa Rica";
let resumen = `Hola, me llamo ${nombre}, tengo ${edad} años y soy de ${pais}.`;
console.log(resumen);

// Practica 9
let piTexto = "3.1416";
let piNumero = parseFloat(piTexto);
console.log("El número convertido es:", piNumero);

// Practica 10
let a = 4;
let b = "6";
let sumaSinParsear = a + b; 
let sumaParseada = a + parseInt(b); 
console.log("Suma sin parsear:", sumaSinParsear);
console.log("Suma con parseo:", sumaParseada);