
var errors = 0;
var cardList =[
    "queen",
    "jack"
]

var cardSet;
var board= [];

window.onload = function() {
    shuffleCards();
    startGame();
}

function shuffleCards() {
    cardSet = cardList.concat(cardList); //make two of each card
    console.log(cardSet);
    //shuffle the cards
    for (let i = 0; i <cardSet.length; i++) {
        let j = Math.floor(Math.random() * cardSet.length); //get random variables for the cards
        //swap
        let temp = cardSet[i];
        cardSet[i] = cardSet[j];
        cardSet[j] = temp;
    }
    console.log(cardSet);


}

function startGame {
    
}