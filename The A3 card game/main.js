const result = document.getElementById("result");
const grid = document.querySelector(".cards");

let pickedCards = [];
let pickedCardsId = [];
let match = [];

result.innerHTML = 0
cardArray.sort(() => 0.5 - Math.random())

function createBoard() {
    for(let i =0; i< cardArray.length; i++){
        let card = document.createElement("Img");
        card.setAttribute("src", "./cards/cloud.png");
        card.setAttribute("data-id", i);
        card.addEventListener("click", flipCard);
        grid.appendChild(card);
    }
}

function checkMatch() {
    let cards = document.querySelectorAll('img')
    if(pickedCards[0] === pickedCards[1]){
        alert("You found a match")
        cards[pickedCardsId[0]].setAttribute('src', './assets/like.png')
        cards[pickedCardsId[1]].setAttribute('src', './assets/like.png')
        match.push(pickedCards)
    } else{
        alert("try again")
        cards[pickedCardsId[0]].setAttribute('src', './assets/cloud.png')
        cards[pickedCardsId[1]].setAttribute('src', './assets/cloud.png')
    }
    pickedCards = []
    pickedCardsId = []
    result.innerHTML = match.length

    if(match.length === cardArray.length /2){
        grid.textContent = "Congratulations"
    }

}

function flipCard() {
    let cardId = this.getAttribute("data-id");
    pickedCards.push(cardArray[cardId].name);
    pickedCardsId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);

    if(pickedCards.length = 2){
       setTimeout(checkMatch, 500);
    }
}

createBoard();
