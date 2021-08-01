//El número de jugadores debe poder ser variable.
//La solución debe cubrir una de las variantes de poker (como el clásico de 5 cartas), pero debe ser extensible a futuro a texas hold-em y omaha hi/lo.
//La ejecución de la mano solo debe cubrir el reparto de cartas y la resolución de la mano ganadora. No hay interacción por parte de los jugadores ni, por tanto, apuestas o contabilidad.
//Debo ser capaz de jugar varias rondas sin reiniciar el programa.

const cards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

const suits = ["diamonds", "hearts", "spades", "clubs"];


var deck, players;

function initDeck(){
    deck = new Array();

    for(let i=0; i < suits.length; i++) 
    {
        for(let x=0; x < cards.length; x++)
        {
            let card = cards[x] + "·" + suits[i];
            deck.push(card);
        }

    }
}

function shuffle(deck)
{
	// for 1000 turns
	// switch the values of two random cards
	for (var i = 0; i < 1000; i++)
	{
		var location1 = Math.floor((Math.random() * deck.length));
		var location2 = Math.floor((Math.random() * deck.length));
		var tmp = deck[location1];

		deck[location1] = deck[location2];
		deck[location2] = tmp;
	}
}


function newGame() {

    players = parseInt(prompt("How many player are there?"), 10);
    initDeck();
}




function newRound() {
    let round = new Array();
    for(let j=0; j<players; j++){
        round[j] = new Array();
    } 

    shuffle(deck);
    let n = 0;
    for(let i=0; i<5; i++){
        for(let j=0; j<players; j++){
            round[j].push(deck[n]);
            //console.log("El jugador " + (j+1) + " recibe la carta " + deck[n]);
            n++;
        }   
    }

    for(let i=0; i<round.length; i++){
        console.log("Player " + (i+1) + " cards:");
        for(let j=0; j<round[i].length; j++){
            console.log(round[i][j]);
        }
    }

    //Check winner with round array


}


function isRoyalFlushStraight(playerCards){
    if((playerCards.includes("A·diamonds") && 
    playerCards.includes("K·diamonds") && 
    playerCards.includes("Q·diamonds") && 
    playerCards.includes("J·diamonds") && 
    playerCards.includes("10·diamonds")) || 
    (playerCards.includes("A·hearts") && 
    playerCards.includes("K·hearts") && 
    playerCards.includes("Q·hearts") && 
    playerCards.includes("J·hearts") && 
    playerCards.includes("10·hearts")) || 
    (playerCards.includes("A·spades") && 
    playerCards.includes("K·spades") && 
    playerCards.includes("Q·spades") && 
    playerCards.includes("J·spades") && 
    playerCards.includes("10·spades")) || 
    (playerCards.includes("A·clubs") && 
    playerCards.includes("K·clubs") && 
    playerCards.includes("Q·clubs") && 
    playerCards.includes("J·clubs") && 
    playerCards.includes("10·clubs"))){
        return true;
    } else {
        return false;
    }
}


/*
* @param  {Integer} [min=0]
* @param  {Integer} [max=10]
* @return {Integer}
             
            function generateAleatori(min = 0, max = 100) {
                var x = 0;
                while (true) {
                    x = parseInt((Math.random()+0.01) * max);

                    if ((x >= min) && (x <= max)) {
                        return x;
                    }
                }
            }
*/