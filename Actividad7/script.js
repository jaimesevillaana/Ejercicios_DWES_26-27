/* Este ejercicio me perturba un poco. No sé a que te refieres con "Los participantes tienen
7 oportunidades para adivinar la palabra.", cada letra introducida cuenta como 
una oportunidad? o sólo las letras que se fallan? */ 

let palabra = prompt("Introduce una palabra de 4 letras: ");
let intentos = 7;
let letra = "";
let acierto = false;
let letraAcertada = "";

for (let i = 0; i < intentos; i++) {
    letra = prompt("Introduce una letra: ");
    acierto = false;

    for (let j = 0; j < palabra.length; j++) {
    
        if (letra === palabra[j]) {
            alert("Letra acertada");
            acierto = true;
        } 
    }
}
alert("Has consumido todos los intentos");