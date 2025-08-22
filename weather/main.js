// find my elements
const appBody = document.querySelector("body");
const temptInput = document.querySelector("#tempInput");
const temptReturnText = document.querySelector("#tempReturn");
function interpretTemp() {
  console.log(temptInput.value);
  let interpretTemp = temptInput.value;
  if (inputTemp < 10) {
    temptReturnText.textContent = "its freezing";
    appBody.style.backgroundColor = "skyblue";
  } else if (inputTemp < 18) {
    temptReturnText.textContent = "its cold";
    appBody.style.backgroundColor = "blue";
  } else if (inputTemp < 26) {
    temptReturnText.textContent = "Its mild";
    appBody.style.backgroundColor = "yellow";
  } else if (inputTemp < 30) {
    temptReturnText.textContent = "Its warm";
    appBody.style.backgroundColor = "tomato";
  } else {
    temptReturnText.textContent = "Its hot";
    appBody.style.backgroundColor = "red";
  }
  // temp 0 : 10 freezing
  // temp 10 : 18 cold
  // temp 18 : 26 warm
  // temp 26 : 30 warm
  // temp 30 + : hot
}
// this is a function call
//interpretTemp();
