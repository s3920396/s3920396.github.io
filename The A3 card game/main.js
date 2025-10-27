const result = document.getElementById("result");
const grid = document.querySelector(".cards");
const dropZone = document.querySelector(".drop-zone");

//keeping these variables blank allows the functions to be called in the code below
let match = [];
let droppedCards = [];

//this math.random is so the cards are randomily displaced on the board and not directly next to each other.
cardArray.sort(() => 0.5 - Math.random());
result.innerHTML = 0;

//My inital concept for my game is to make a card game. Where the player dragged matching cards into a zone within a certain time limit and some cards become frozen and need to clicked on.
//When trying to make my concept of dragging card game into reality, I followed a tutorial to make an on click matching card game and later for the drag function. 
//This acted a template to get my 3 cards to spawn in pairs on the menu and get them to match. 
// However I struggled alot trying to get the .png cards to duplicated as when I tried running the game I kept getting an error of Undefinied.png being used for 3/4 of the array for cards.
// I orginally thought it was an issues of the images being pngs so I tried jpegs. But still the issue persisted. It was finally found out by changing the '' for the to "" comma for the function to print all the cards as normal.
//when implementing the drag interact for this assignment, I came in the form of making it so the player would have to drag cards into a zone. said card would then be flipped to see if they matched.
//said code broke the oringal onclick cards to only show the game's titles. I fixed this by adding in card front and back in the css folder to make the cards appear in the menu. 
//In the future If I were to work on this assigment I would implemented a Time limit mechanic or simplified the project using 3 or 4 cards that drag into a zone like what was shown in the dragging card example we did in week 10. 

// make the game board 
function createBoard() {
    for(let i =0; i< cardArray.length; i++){
        const card = document.createElement("div");
        card.classList.add("card");
        card.setAttribute("data-id", i);
        card.setAttribute("draggable", "true");
        
        //making a flip animation for the cards, going front to back
        const cardInner = document.createElement("div");
        cardInner.classList.add("card-inner");

        const cardFront = document.createElement("img");
        cardFront.classList.add("card-front");
        cardFront.src = cardArray[i].img;

        const cardBack = document.createElement("img");
        cardBack.classList.add("card-back");
        cardBack.src = "./assets/cloud.png";

        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        card.appendChild(cardInner);

//make a drag event with dragging and dropping the assets
card.addEventListener("dragstart", dragStart);
card.addEventListener("dragend", dragEnd);
grid.appendChild(card);
    }
}

// this is so the card can be dragged
function dragStart(e){
    e.dataTransfer.setData("text/plain", this.getAttribute("data-id"));
    this.classList.add("dragging");
}

function dragEnd(){
    this.classList.remove("dragging");
}

// dragging zone codes
dropZone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZone.classList.add("dragover");
});
//this drag leave is so it can drag and drop
dropZone.addEventListener("dragleave", () =>{
    dropZone.classList.remove("dragover");

});

dropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    dropZone.classList.remove("dragover");


const cardId = e.dataTransfer.getData("text/plain");
const cardData = cardArray[cardId];
const cardEl = document.querySelector(`[data-id='${cardId}']`);

// This is so when the card is in the drop zone it can be flipped
flipCard(cardEl, true);
dropZone.appendChild(cardEl);
droppedCards.push({cardEl, cardData, cardId});

//if the two cards are in the zone, they will be checked if they match
 if(droppedCards.length === 2){
       setTimeout(checkMatch, 800);
    }
});

function flipCard(cardEl, showFront) {
    if (showFront) cardEl.classList.add("flipped");
    else cardEl.classList.remove("flipped");
}

// this is to check if the images match if not it will return to the main board
function checkMatch() {
    const [first, second] = droppedCards;
    if (!first || !second) return;

    if(first.cardData.name === second.cardData.name) {
        alert("You found a match");
        match.push([first, second]);
        result.innerHTML = match.length;

    // disable dragging the matched cards
    //the dragable functions over ridded the original on click function, making it so "draggable" and "false" had to be used inside of an onclick code.         
        first.cardEl.setAttribute("draggable", "false");
        second.cardEl.setAttribute("draggable", "false");
        first.cardEl.style.opacity = "0.7";
        second.cardEl.style.opacity = "0.7";
    } else{
        alert("Try again")

        //flip back and return to the board
        flipCard(first.cardEl, false);
        flipCard(second.cardEl, false);
       grid.appendChild(first.cardEl);
       grid.appendChild(second.cardEl);
    }
    
    droppedCards = [];

    // this will create a Congratulation text pop when the game ends
    if(match.length === cardArray.length /2){
        grid.textContent = "Congratulations"
    }
}

createBoard();
