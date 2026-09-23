// Sumar elementos de un array de strings numéricos
let precios = ["10", "20", "30"];
let total = 0;

for (let i = 0; i < precios.length; i++) {
  total += Number(precios[i]);  // Convertimos cada string a number
}

console.log("Total:", total);  // 60



for (let i = 1; i <= 5; i++) {
  console.log("Número:", i);
}

let dia = prompt("Que dia es hoy?");
switch (dia) {
  case "lunes":    console.log("Inicio de semana"); break;
  case "viernes":  console.log("¡Ya casi es finde!"); break;
  case "sabado":
  case "domingo":  console.log("Fin de semana"); break;
  default:         console.log("Día entre semana");
}

let nombre = "Ana", edad = 18, aprobado = true;
console.log(typeof nombre);   // "string"
console.log(typeof edad);     // "number"
console.log(typeof aprobado); // "boolean"

// Plantilla de cadenas
let msg = `Hola, soy ${nombre} y tengo ${edad} años`;
console.log(msg);

// De string a number
let precio = "25.5";
let precioNumero = Number(precio);   // 25.5
console.log(precio);
let precioEntero = parseInt(precio);  // 25 (solo parte entera)
console.log(precioEntero);
let precioDecimal = parseFloat(precio); // 25.5
console.log(precioDecimal);
// De number a string
let nota = 10;
let notaString = String(nota); 
console.log(notaString);    // "10"
let notaTexto = nota.toString();
console.log(notaTexto);   // "10"

// De string/number a boolean
let activo = Boolean(1);       // true
console.log(activo);
let vacio = Boolean("");       // false
console.log(vacio);
let nulo = Boolean(null);  
console.log(nulo);


// ordinaria
frutas.map(function (fruta) { return fruta.toUpperCase(); });
// flecha: más corta y clara
frutas.map(fruta => fruta.toUpperCase());