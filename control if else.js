// Practica 1
let numero = 5;

if (numero > 0) {
    console.log("El número es positivo.");
}   
else if (numero <= 0) {
    console.log("El número es negativo o cero.");
}

// Practica 2
let practica2 = 101;

if (practica2 >= 1 && practica2 <= 100) {
    console.log("El número está entre 1 y 100.");
}

else {
    console.log("El número no está entre 1 y 100.");
}

// Practica 3

let edad = 30;
if (edad >= 0 && edad <= 12) {
    console.log("Es un niño.");
} else if (edad >= 13 && edad <= 17) {
    console.log("Es un adolescente.");
} else if (edad >= 18 && edad <= 64) {
    console.log("Es un adulto.");
} else if (edad >= 65) {
    console.log("Es un adulto mayor.");
} else {
    console.log("Edad no válida.");
}

// Practica 4

let numero4 = 15;
if (numero4 % 3 === 0) {
    console.log("El número", numero4, "es divisible entre 3.");
} else {
    console.log("El número", numero4, "NO es divisible entre 3.");
}

// Practica 5

let a = 12, b = 25, c = 19;
let mayor;
if (a >= b && a >= c) {
    mayor = a;
} else if (b >= a && b >= c) {
    mayor = b;
} else {
    mayor = c;
}
console.log("El número mayor es:", mayor);

// Practica 6

let contrasena = "mipass123";
if (contrasena.length >= 8) {
    console.log("Contraseña válida.");
} else {
    console.log("La contraseña es demasiado corta.");
}

// Practica 7

let nota = 85;
let calificacion;
if (nota >= 90) {
    calificacion = "A";
} else if (nota >= 80) {
    calificacion = "B";
} else if (nota >= 70) {
    calificacion = "C";
} else if (nota >= 60) {
    calificacion = "D";
} else {
    calificacion = "F";
}
console.log("La calificación es:", calificacion);

// Practica 8

let edadUsuario = 16;
if (edadUsuario >= 18) {
    console.log("Puede ingresar a la página.");
} else {
    console.log("No tiene edad suficiente para ingresar.");
}

// Practica 9

let tieneLicencia = true;
let edadConductor = 20;
if (tieneLicencia && edadConductor >= 18) {
    console.log("Puede conducir.");
} else {
    console.log("No puede conducir.");
}

// Practica 10

let x = 5;
let y = "5";
if (x === y) {
    console.log("x y y son estrictamente iguales (===).");
} else if (x == y) {
console.log("x y y son iguales en valor (==) pero no en tipo.");
} else {
    console.log("x y y no son iguales.");
}
