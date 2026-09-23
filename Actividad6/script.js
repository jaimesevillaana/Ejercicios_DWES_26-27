// He escrito más codigo de lo normal por mostrar quien gana y porqué motivo

let jugador1 = prompt("Piedra, papel o tijera");
let jugador2 = prompt("Piedra, papel o tijera");
alert("Jugador 1: " + jugador1 + ". Jugador 2: " + jugador2 + ".");

let resultado;

if (jugador1 === jugador2) {
    resultado = "Ambos jugadores han empatado";
} else if (jugador1 === "piedra" && jugador2 === "tijera") {
    resultado = "Gana jugador 1 (piedra rompe tijera)";
} else if (jugador1 === "tijera" && jugador2 === "papel") {
    resultado = "Gana jugador 1 (tijera rompe papel)";
} else if (jugador1 === "papel" && jugador2 === "piedra") {
    resultado = "Gana jugador 1 (papel envuelve a piedra)";
} else if (jugador2 === "piedra" && jugador1 === "tijera") {
    resultado = "Gana jugador 2 (piedra rompe tijera)";
} else if (jugador2 === "tijera" && jugador1 === "papel") {
    resultado = "Gana jugador 2 (tijera rompe papel)";
} else if (jugador2 === "papel" && jugador1 === "piedra") {
    resultado = "Gana jugador 2 (papel envuelve a piedra)";
}

alert(resultado);