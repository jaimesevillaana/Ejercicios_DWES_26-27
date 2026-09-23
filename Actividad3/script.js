
alert(
    "Precios por habitación y noche:\n " +
    "   - Habitacion Simple 90€/noche.\n " +
    "   - Habitacion Doble 120€/noche\n " +
    "   - Suite 300€/noche\n " 
);

let cantidadNoches = Number(prompt("Introduce la cantidad de noches: "));

let tipoHabitacion = prompt("Introduce el tipo de habitacion:\n" +
    "   - Simple\n" +
    "   - Doble\n" +
    "   - Suite"

);

let precioHabitacion;
let simple = 90;
let doble = 120;
let suite = 300;



if (tipoHabitacion == "simple") {
    precioHabitacion = simple;
} else if (tipoHabitacion == "doble") {
    precioHabitacion = doble;
} else if (tipoHabitacion == "suite") {
    precioHabitacion = suite;
} else {
   alert("Tipo de habitacion no válida."); 
}

if (precioHabitacion !== undefined) {
    let precioTotal = precioHabitacion * cantidadNoches;
    alert("El precio total de la estancia es: " + precioTotal + "€");
}
