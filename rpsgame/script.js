// keep track of possible selections
const options = ["rock", "paper", "scissors"];

const rockButton = document.querySelector("#rock-button");
const paperButton = document.querySelector("paper-button");
const scissorsButton = document.querySelector("#scissors-butto");
// find the selection and reseut section
const selection = document.querySelector("#selection");

//random select from array
let randomSelect = Math.floor(Math.random() * 3);
console;
