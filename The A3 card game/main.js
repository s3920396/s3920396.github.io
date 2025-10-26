const result = document.getElementById('result')
const grid = document.querySelector('.cards')

let pickedCards = []
let pickedCardsId = []
let match = []

var card1Selected;
var card2Selected;

window.onload = function() {
    shuffleCards();
    startGame();
}

function shuffleCards() {
    cardSet = cardList.concat(cardList); //make two of each card
    console.log(cardSet);
    //shuffle the cards
    for (let i = 0; i < cardSet.length; i++) {
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
    let row = [];
    for(let c = 0; c < columns; c++) {
        let cardImg = cardSet.pop();
        row.push(cardImg); //javascript

// adding img id and card elements and repeat it 20 times
        let card = document.createElement("img");
        card.id = r.toString() + "-" + c.toString();
        card.src = cardImg + ".png";
        card.classList.add("card");
        card.addEventListener("click", selectCard);
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
        let card = document.getElementById(r.toString() + "-" + c.toString());
    card.src = "cloud.png";
}
}
}

function selectCard() {

    if (this.src.includes("cloud")) {
        if(!card1Selected) {
            card1Selected = this;

            let coords = card1Selected.id.split("-"); 
            let r = parseInt(coords[0]);
            let c = parseInt(coords[1]);

            card1Selected.src = board[r][c] + "cloud.png";
        
        }
        else if (!card2Selected && this != card1Selected) {
            card2Selected = this;

            let coords = card2Selected.id.split("-"); 
            let r = parseInt(coords[0]);
            let c = parseInt(coords[1]);

            card2Selected.src = board[r][c] + "cloud.png";
            setTimeout(update,1000);
        }
    }
}

function update() {
    // if cards aren't the same, then flip them back
    if (card1Selected.src != card2Selected.src) {
        card1Selected.src = "cloud.png";
        card2Selected.src = "cloud.png";
        errors += 1;
        document.getElementById("errors").innerText = errors;

    }
 card1Selected = null;
 card2Selected = null;
}