// 1. Nombre del mes
let mes = 3;
switch (mes) {
    case 1: console.log("Enero"); break;
    case 2: console.log("Febrero"); break;
    case 3: console.log("Marzo"); break;
    case 4: console.log("Abril"); break;
    case 5: console.log("Mayo"); break;
    case 6: console.log("Junio"); break;
    case 7: console.log("Julio"); break;
    case 8: console.log("Agosto"); break;
    case 9: console.log("Septiembre"); break;
    case 10: console.log("Octubre"); break;
    case 11: console.log("Noviembre"); break;
    case 12: console.log("Diciembre"); break;
    default: console.log("Mes inválido");
}

// Practica 2
let opcionMenu = 2;
switch (opcionMenu) {
    case 1: console.log("Usted eligió: Pizza"); break;
    case 2: console.log("Usted eligió: Hamburguesa"); break;
    case 3: console.log("Usted eligió: Ensalada"); break;
    case 4: console.log("Usted eligió: Pasta"); break;
    default: console.log("Opción no válida");
}

// Practica 3
let dia = 6;
switch (dia) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Día laboral"); break;
    case 6:
    case 7:
        console.log("Fin de semana"); break;
    default:
        console.log("Día inválido");
}

// Practica 4
let usuario = "editor";
switch (usuario) {
    case "admin": console.log("Bienvenido, administrador"); break;
    case "editor": console.log("Hola, editor. Puedes modificar contenidos."); break;
    case "invitado": console.log("Bienvenido, invitado. Acceso limitado."); break;
    default: console.log("Tipo de usuario no reconocido");
}

// Practica 5
let numero = 20;
switch (numero) {
    case 10: console.log("El número es 10"); break;
    case 20: console.log("El número es 20"); break;
    case 30: console.log("El número es 30"); break;
    default: console.log("El número no es 10, 20 ni 30");
}

// Practica 6
let categoria = "calzado";
switch (categoria) {
    case "ropa": console.log("Usted está en la categoría de ropa."); break;
    case "calzado": console.log("Usted está en la categoría de calzado."); break;
    case "electrónica": console.log("Usted está en la categoría de electrónica."); break;
    default: console.log("Categoría no reconocida.");
}

// Practica 7
let letra = "e";
switch (letra.toLowerCase()) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("Es una vocal."); break;
    default:
        console.log("Es una consonante.");
}

// Practica 8

let continente = 4;
switch (continente) {
    case 1: console.log("África"); break;
    case 2: console.log("América"); break;
    case 3: console.log("Asia"); break;
    case 4: console.log("Europa"); break;
    case 5: console.log("Oceanía"); break;
    default: console.log("Número de continente inválido");
}
// Practica 9

let colorSemaforo = "amarillo";
switch (colorSemaforo) {
    case "rojo": console.log("Deténgase"); break;
    case "amarillo": console.log("Precaución"); break;
    case "verde": console.log("Puede avanzar"); break;
    default: console.log("Color no válido");
}

// Practica 10
let clima = "lluvioso";
switch (clima) {
    case "soleado": console.log("Use protector solar."); break;
    case "lluvioso": console.log("No olvide su paraguas."); break;
    case "nublado": console.log("Puede hacer fresco, lleve un abrigo."); break;
    default: console.log("Clima no reconocido.");
}
