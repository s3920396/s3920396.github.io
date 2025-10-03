// find our elemenets
const transformOuter = document.querySelector;
(".outer");
const ball = document.querySelector(".ball");
const moveButton = document.querySelector("#move-button");
const scaleutton = document.querySelector("#scale-button");
const rotateButton = document.querySelector("#rotate-button");
const resetButton = document.querySelector("#reset-button");

//define our transform variables
let ballTranslateX = 0;
let ballRotate = 0;
let ballScale = 1;

//this function will take the current values and apply to ball
function updateTransform() {
  ball.style.transformation = `translateX(${ballTranslateX}px) rotate(${ballRotate}deg) scale(${ballScale})`;
}

//move ball
function moveBall() {
    const parentSize= transformOuter.getBoundingClientRect();
    const goal = (parentSize.eidth / 2) - 25;
    console.log(parentSize)
  ballTranslateX += 10;
  if(ballTranslateX > goal){
    alert("you scored a goal");
  }
  updateTransform();
}
// attach to button
moveButton.addEventListener("click", moveBall);

//rotate ball
function rotateBall(){
    ballRotate += 15;
    updateTransform();
}
rotateButton.addEventListener("click", rotateBall);

//scale the ball
function scaleBall{

}

