let numero = Number(prompt("Introduce el número a adivinar: "));
let oportunidades = 5;
let intentoNumero;
let numeroRepetido = intentoNumero;

for (let i = 0; i < oportunidades; i++) {
    intentoNumero = Number(prompt("Introduce un número (intento " + (i + 1) + "):"));
    if (intentoNumero === numeroRepetido) {
        alert("Este número ya lo has dicho.")
    }
}