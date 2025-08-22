// find my elements
const appBody = document.querySelector("body");
const temptInput = document.querySelector("#tempInput");

function interpretTemp() {
  console.log(temptInput.value);
  // temp 0 : 10 freezing
  // temp 10 : 18 cold
  // temp 18 : 26 warm
  // temp 26 : 30 warm
  // temp 30 + : hot
}
