
let numeros = 5;
let numero;
let posicion = 1; 
let mayor;
let iguales = ""; 
let numero1;
let numero2;
let numero3;
let numero4;
let numero5;
let smsRepe = "Se ha repetido este número";
for (let i = 0; i < numeros; i++) {
    numero = Number(prompt("Introduce el número " + (i + 1) + ":"));

    if (i === 0) {
        numero1 = numero;
        mayor = numero1;
    }
    if (i === 1) {
        numero2 = numero;
        if (numero2 === numero1) {
            iguales = "Posición 1 y 2\n";
            alert(smsRepe);
        }
    }
    if (i === 2) {
        numero3 = numero;
        if (numero3 === numero1 || numero3 === numero2) {
            if (numero3 === numero1) {
                iguales = iguales + "Posición 1 y 3\n"
            }
            if (numero3 === numero2) {
                iguales = iguales + "Posición 2 y 3\n"
            }
            alert(smsRepe);
        }
    }
    if (i === 3) {
        numero4 = numero;
        if (numero4 === numero1 || numero4 === numero2 || numero4 === numero3) {
            if (numero4 === numero1) {
                iguales = iguales + "Posición 1 y 4\n";
            }
            if (numero4 === numero2) {
                iguales = iguales + "Posición 2 y 4\n";
            }
            if (numero4 === numero3) {
                iguales = iguales + "Posición 3 y 4\n";
            }
            alert(smsRepe);
        }
    }
    if (i === 4) {
        numero5 = numero;
        if (numero5 === numero1 || numero5 === numero2 || numero5 === numero3 || numero5 === numero4) {

            if (numero5 === numero1) {
                iguales = iguales + "Posición 1 y 5\n";
            }
            if (numero5 === numero2) {
                iguales = iguales + "Posición 2 y 5\n";
            }
            if (numero5 === numero3) {
                iguales = iguales + "Posición 3 y 5\n";
            }
            if (numero5 === numero4) {
                iguales = iguales + "Posición 4 y 5";
            }
            alert(smsRepe);
        }  
    }
    if (i > 0 && numero > mayor) {
            mayor = numero;
            posicion = i + 1;
        }
}
alert("El mayor es el " + posicion + "º número.");
alert(iguales + " son iguales");