let numero1 = Number(prompt("Introduce el primer número: "));
let numero2 = Number(prompt("Introduce el segundo número: "));
let numero3 = Number(prompt("Introduce el tercer número: "));
let numero4 = Number(prompt("Introduce el cuarto número: "));
let numero5 = Number(prompt("Introduce el quinto número: "));

let mayor = numero1;
let posicion = 1;

if (numero2 > mayor) {
    mayor = numero2;
    posicion = 2;
}
if (numero3 > mayor) {
    mayor = numero3;
    posicion = 3;
}
if (numero4 > mayor) {
    mayor = numero4;
    posicion = 4;
}
if (numero5 > mayor) {
    mayor = numero5;
    posicion = 5;
}

alert("El mayor es el " + posicion + "º número.");