
let fruta1 = prompt("Introduce nombre de la fruta:");
let precioKilo1 = Number(prompt("Introduce precio/kilo:"));
let stock1 = 10;

let fruta2 = prompt("Introduce nombre de la fruta:");
let precioKilo2 = Number(prompt("Introduce precio/kilo:"));
let stock2 = 10;

let fruta3 = prompt("Introduce nombre de la fruta:");
let precioKilo3 = Number(prompt("Introduce precio/kilo:"));
let stock3 = 10;

alert("Frutas en stock:\n" + 
    "1. " + fruta1 + " - " + precioKilo1 + "€/kilo - Stock: " + stock1 + "\n" +
    "2. " + fruta2 + " - " + precioKilo2 + "€/kilo - Stock: " + stock2 + "\n" +
    "3. " + fruta3 + " - " + precioKilo3 + "€/kilo - Stock: " + stock3 + "\n" 
);

let cantidadFruta;
let precioCompra;
let opcion = Number(prompt("Que fruta quieres?"));
if (opcion === 1) {
    cantidadFruta = Number(prompt("Cuantos kilos quieres?"));
    if (cantidadFruta <= stock1) {
        precioCompra = precioKilo1 * cantidadFruta;
        alert("El precio total de la compra es de " + precioCompra + "€");
    } else {
        alert("No hay suficiente stock.")
    }
} else if (opcion === 2) {
    cantidadFruta = Number(prompt("Cuantos kilos quieres?"));
    if (cantidadFruta <= stock2) {
        precioCompra = precioKilo2 * cantidadFruta;
        alert("El precio total de la compra es de " + precioCompra + "€");
    } else {
        alert("No hay suficiente stock.")
    }
} else if (opcion === 3) {
    cantidadFruta = Number(prompt("Cuantos kilos quieres?"));
    if (cantidadFruta <= stock3) {
        precioCompra = precioKilo3 * cantidadFruta;
        alert("El precio total de la compra es de " + precioCompra + "€");
    } else {
        alert("No hay suficiente stock.")
    }
} else {
    alert("Operacion no valida.")
}