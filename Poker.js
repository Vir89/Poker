//El número de jugadores debe poder ser variable.
//La solución debe cubrir una de las variantes de poker (como el clásico de 5 cartas), pero debe ser extensible a futuro a texas hold-em y omaha hi/lo.
//La ejecución de la mano solo debe cubrir el reparto de cartas y la resolución de la mano ganadora. No hay interacción por parte de los jugadores ni, por tanto, apuestas o contabilidad.
//Debo ser capaz de jugar varias rondas sin reiniciar el programa.

const cards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

const straightCards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

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
    console.clear();

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
    for(let i=0; i<round.length; i++){
        console.log("Player " + (i+1) + " has royal flush straight: " + isRoyalFlushStraight(round[i]));
        console.log("Player " + (i+1) + " has straight flush: " + isStraightFlush(round[i]));
        console.log("Player " + (i+1) + " has four of a kind: " + isFourOfAKind(round[i]));
        console.log("Player " + (i+1) + " has full house: " + isFullHouse(round[i]));
        console.log("Player " + (i+1) + " has flush: " + isFlush(round[i]));
        console.log("Player " + (i+1) + " has straight: " + isStraight(round[i]));
        console.log("Player " + (i+1) + " has three of a kind: " + isThreeOfAKind(round[i]));
        console.log("Player " + (i+1) + " has two pairs: " + isTwoPairs(round[i]));
        console.log("Player " + (i+1) + " has pair: " + isPair(round[i]));
    }

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

function isStraightFlush(playerCards){
    if(isFlush(playerCards) && isStraight(playerCards)){
        return true;
    } else {
        return false;
    }
}

function isFourOfAKind(playerCards){
    return isNOfAKind(playerCards, 4);
}

function isFullHouse(playerCards){
    if(isNOfAKind(playerCards, 2) && isNOfAKind(playerCards, 3)){
        return true;
    } else {
        return false;
    }
}

function isFlush(playerCards){
    
    for(let i=0; i < suits.length; i++){
        if(playerCards[0].includes(suits[i]) && 
            playerCards[1].includes(suits[i]) && 
            playerCards[2].includes(suits[i]) && 
            playerCards[3].includes(suits[i]) && 
            playerCards[4].includes(suits[i])){
                return true;
        }
    }
    return false;
}

function isStraight(playerCards){

    let playerCardsWithoutSuit = getPlayerCardsWithoutSuit(playerCards);

    for(let i=0; i < straightCards.length-4; i++){
        if(playerCardsWithoutSuit[0].includes(straightCards[i]) && 
            playerCardsWithoutSuit[1].includes(straightCards[i+1]) && 
            playerCardsWithoutSuit[2].includes(straightCards[i+2]) && 
            playerCardsWithoutSuit[3].includes(straightCards[i+3]) && 
            playerCardsWithoutSuit[4].includes(straightCards[i+4])){
                return true;
        } 
    }
    return false;
}

function isNOfAKind(playerCards, n){
    let playerCardsWithoutSuit = getPlayerCardsWithoutSuit(playerCards);
    
    for(let i=0; i < cards.length; i++){
        let count = 0;
        
        for(let j=0; j<playerCardsWithoutSuit.length; j++){
            if(cards[i] == playerCardsWithoutSuit[j]){
                count++;
            }
        }

        if(count == n){
            return true;
        }
    }
    return false;
}

function isThreeOfAKind(playerCards){
    return isNOfAKind(playerCards, 3);
}

function isTwoPairs(playerCards){
    
    let pairs = new Array();
    let playerCardsWithoutSuit = getPlayerCardsWithoutSuit(playerCards);
    
    for(let i=0; i < cards.length; i++){
        let count = 0;
        
        for(let j=0; j<playerCardsWithoutSuit.length; j++){
            if(cards[i] == playerCardsWithoutSuit[j]){
                count++;
            }
        }

        if(count == 2 && !pairs.includes(cards[i])){
            pairs.push(cards[i]);
        }
    }

    if(pairs.length == 2){
        return true;
    } else {
        return false;
    }
}

function isPair(playerCards){
    return isNOfAKind(playerCards, 2);
}

function getPlayerCardsWithoutSuit(playerCards){
    let playerCardsWithoutSuit = new Array();

    for(let i=0; i < playerCards.length; i++){
        playerCardsWithoutSuit.push(playerCards[i].split("·")[0]);
    }

    return playerCardsWithoutSuit;
}

