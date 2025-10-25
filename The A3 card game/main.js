
var errors = 0;
var cardList =[
    "queen",
    "jack"
]

var cardSet;
var board= [];
var rows = 4;
var columns =5;


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

function startGame() {
// arrange the board of 4x5
for(let r = 0; r < rows; r++) {
    for(let c = 0; c < columns; c++){
        let cardImg = cardSet.pop();
        rows.push(cardImg); //javascript

// adding img id and card elements and repeat it 20 times
        let card = document.createElement("img");
        card.id = r.toString() + "-" + c.toString();
        card.src = cardImg + ".png";
        card.classList.add("card");
document.getElementById("board").append(card);

    }
    board.push(row);
}
console.log(board);
setTimeout(hideCards,10000);
}

function hideCards() {
 for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
        let card = document.getElementById(r.toString() + "-" c.toString());
    card.src = "cloud.png";
}
}
}