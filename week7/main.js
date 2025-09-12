const popButton = document.querySelector("#popButton");
const popBAudio = document.querySelector("#Audio");

/*this is a funtion that plays the poping sound when run*/
function PLAYPOP() {
  popAudio.play();
}
/* run playPop buttion function*/
popButton.addEventListener("click", playPop);
