//El número de jugadores debe poder ser variable.
//La solución debe cubrir una de las variantes de poker (como el clásico de 5 cartas), pero debe ser extensible a futuro a texas hold-em y omaha hi/lo.
//La ejecución de la mano solo debe cubrir el reparto de cartas y la resolución de la mano ganadora. No hay interacción por parte de los jugadores ni, por tanto, apuestas o contabilidad.
//Debo ser capaz de jugar varias rondas sin reiniciar el programa.

let players = 0;

function newGame() {

    players = prompt("How many player are there?");
    
      

  
}




function newRound() {

    for (let i=0; i < players; i++){
        if (players[i] === 0)
    

    return newRound;
    }

}

const cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

const suits = ["diamonds", "hearts", "spades", "clubs"];


