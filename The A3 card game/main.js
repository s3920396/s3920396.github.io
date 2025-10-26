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
});


function checkMatch() {
    const [first, second] = droppedCards;

    if(first.cardData.name === secondData.name) {
        alert("You found a match");
        match.push([first, second])
        result.innerHTML = match.length

    // disable dragging the matched cards        
        first.cardEl.setAttribute("draggable", "false");
        second.cardEl.setAttribute("draggable", "false");
        first.cardEl.style.opacity = "0.7";
        second.cardEl.style.opacity = "0.7";
    } else{
        alert("Try again")

        //flip back and return to the grid
        first.cardEl.setAttribute("src", "./assets/cloud.png");
       second.cardEl.setAttribute("src", "./assets/cloud.png");

       grid.appendChild(first.cardEl);
       grid.appendChild(second.cardEl);
    }
    
    droppedCards = [];

    if(match.length === cardArray.length /2){
        grid.textContent = "Congratulations"
    }

}


createBoard();
