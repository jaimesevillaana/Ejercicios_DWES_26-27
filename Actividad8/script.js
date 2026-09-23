let a = Number(prompt("Dime el valor de a:"));
let b = Number(prompt("Dime el valor de b:"));
if (a > b) {
    alert("El mayor es a (" + a + ")");
} else if (a === b) {
    alert("Son iguales");
} else {
    alert("El mayor es b (" + b + ")");
}