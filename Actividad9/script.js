/*
Al no especificar si el número que se repite (en el caso de que lo haya) cuenta como oportunidad,
he supuesto que si...
*/

let numero = Number(prompt("Introduce el número a adivinar: "));
let oportunidades = 5;
let intentoNumero;
let intento1;
let intento2;
let intento3; 
let intento4; 
let intento5;


for (let i = 0; i < oportunidades; i++) {
    intentoNumero = Number(prompt("Introduce un número (intento " + (i + 1) + "):"));
    if (i === 0) {
        intento1 = intentoNumero;
    } else if (i === 1) {
        intento2 = intentoNumero;
        if (intento2 === intento1) {
            alert("Has repetido el número");
        }
    } else if (i === 2) {
        intento3 = intentoNumero;
        if (intento3 === intento1 || intento3 === intento2) {
            alert("Has repetido el número");
        }
    } else if (i === 3) {
        intento4 = intentoNumero;
        if (intento4 === intento1 || intento4 === intento2 || intento4 === intento3) {
            alert("Has repetido el número");
        }
    } else if (i === 4) {
        intento5 = intentoNumero;
        if (intento5 === intento1 || intento5 === intento2 || intento5 === intento3 || intento5 === intento4 ) {
            alert("Has repetido el número");
        }
    } 
    if (intentoNumero === numero) {
        alert("Has acertado el número!");
        break;
    }
}