// Voy a asumir que son 3 jugadores

let monedasJugador1 = Number(prompt("JUGADOR 1: ¿Cuántas monedas tienes?"));
let monedasJugador2 = Number(prompt("JUGADOR 2: ¿Cuántas monedas tienes?"));
let monedasJugador3 = Number(prompt("JUGADOR 3: ¿Cuántas monedas tienes?"));

let apuestaJugador1 = Number(prompt("JUGADOR 1: ¿Cuántas monedas crees que hay?"));
let apuestaJugador2 = Number(prompt("JUGADOR 2: ¿Cuántas monedas crees que hay?"));
let apuestaJugador3 = Number(prompt("JUGADOR 3: ¿Cuántas monedas crees que hay?"));

let totalMonedas = monedasJugador1 + monedasJugador2 + monedasJugador3;
let ganadores = "";

if (totalMonedas === apuestaJugador1) {
    ganadores = "\nJugador 1";
}
if (totalMonedas === apuestaJugador2) {
    ganadores = ganadores + "\nJugador 2";
}
if (totalMonedas === apuestaJugador3) {
    ganadores = ganadores + "\nJugador 3";
}
if (ganadores === "") {
    alert("No hay ningun ganador :(");
} else {
    alert("Ganador/es: " + ganadores);
}