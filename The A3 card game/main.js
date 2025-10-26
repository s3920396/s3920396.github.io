const result = document.getElementById("result");
const grid = document.querySelector(".cards");
const dropZone = document.querySelector(".drop-zone");

let pickedCards = [];
let pickedCardsId = [];
let match = [];
let draggedCardId;

result.innerHTML = 0
cardArray.sort(() => 0.5 - Math.random())

function createBoard() {
    for(let i =0; i< cardArray.length; i++){
        let card = document.createElement("img");
        card.setAttribute("src", "./assets/cloud.png");
        card.setAttribute("data-id", i);
        card.setAttribute("draggable", "true");
        card.addEventListener("click", flipCard);

//make a drag event
card.addEventListener("dragstart", dragStart);
card.addEventListener("dragend", dragEnd);
grid.appendChild(card);
    }
}

function dragStart(){
    e.dataTransfer.setData("text/plain", this,getAttribute("data-id"));
    this.classList.add("dragging");
}

function dragEnd(){
    this.classList.remove("dragging");
}

// dragging zone events
dropZone.addEventListener("dragover", () => {
    e.preventDefult();
    dropZone.classList.add("dragover");
});

dropZone.addEventListener("dragleave", () =>{
    dropZone.classList.remove("dragover");

});

dropZone.addEventListener("drop", () => {
    e.preventDefult();
    dropZone.classList.remove("dragover");
});

const cardId =e.dataTransfer.getData("text/plain");
const cardData = cardArray[cardId];
const cardEl = document.querySelector(`[data-id='${cardId}']`);

// flip and moving the card into the drop zone
cardEl.setAttribute("src", cardData.img);
dropZone.appendChild(cardEl);
droppedCards.push({cardEl, cardData, cardId});

//if the two cards are in the zone, they will be checked if they match
 if(pickedCards.length === 2){
       setTimeout(checkMatch, 700);
    }
function checkMatch() {
    let cards = document.querySelectorAll('img')
    if(pickedCards[0] === pickedCards[1]){
        alert("You found a match")
        cards[pickedCardsId[0]].setAttribute("src", "./assets/like.png")
        cards[pickedCardsId[1]].setAttribute("src", "./assets/like.png")
        match.push(pickedCards)
    } else{
        alert("Try again")
        cards[pickedCardsId[0]].setAttribute("src", "./assets/cloud.png")
        cards[pickedCardsId[1]].setAttribute("src", "./assets/cloud.png")
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

   
}

createBoard();
