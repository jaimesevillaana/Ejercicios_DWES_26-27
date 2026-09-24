// Voy a asumir que son 3 jugadores

let nameJugador1 = prompt("Jugador 1, introduce tu nombre: ");
let monedasJugador1 = Number(prompt("JUGADOR 1: ¿Cuántas monedas tienes?"));
let nameJugador2 = prompt("Jugador 2, introduce tu nombre: ");
let monedasJugador2 = Number(prompt("JUGADOR 2: ¿Cuántas monedas tienes?"));
let nameJugador3 = prompt("Jugador 3, introduce tu nombre: ");
let monedasJugador3 = Number(prompt("JUGADOR 3: ¿Cuántas monedas tienes?"));

let apuestaJugador1 = Number(prompt("JUGADOR 1 (" + nameJugador1 + "): ¿Cuántas monedas crees que hay?"));

let apuestaJugador2 = Number(prompt("JUGADOR 2 (" + nameJugador2 + "): ¿Cuántas monedas crees que hay?"));

while (apuestaJugador2 === apuestaJugador1) {
    alert("Apuesta repetida");
    apuestaJugador2 = Number(prompt("Introduce de nuevo tu apuesta: "));
}

let apuestaJugador3 = Number(prompt("JUGADOR 3 (" + nameJugador3 + "): ¿Cuántas monedas crees que hay?"));

while (apuestaJugador3 === apuestaJugador1 || apuestaJugador3 === apuestaJugador2) {
    alert("Apuesta repetida");
    apuestaJugador3 = Number(prompt("Introduce de nuevo tu apuesta: "));
}


let totalMonedas = monedasJugador1 + monedasJugador2 + monedasJugador3;
let ganador = "";

if (apuestaJugador1 === apuestaJugador2 || apuestaJugador1 === apuestaJugador3 || apuestaJugador2 === apuestaJugador3) {
    alert("Apuesta repetida");
}

if (totalMonedas === apuestaJugador1) {
    ganador = "\nJugador 1: " + nameJugador1;
}
if (totalMonedas === apuestaJugador2) {
    ganador = "\nJugador 2: " + nameJugador2;
}
if (totalMonedas === apuestaJugador3) {
    ganador = "\nJugador 3: " + nameJugador3;
}

alert(nameJugador1 + ": " + monedasJugador1 + ".\n" + nameJugador2 + ": " + monedasJugador2 + ".\n" + nameJugador3 + ": " + monedasJugador3 + ".");

if (ganador === "") {
    alert("No hay ningun ganador :(");
} else {
    alert("Ganador: " + ganador);
}