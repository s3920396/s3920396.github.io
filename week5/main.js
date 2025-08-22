//variables
//find an element
const documentBody = document.querySelector("body");
console.groupCollapsed(documentBody);

const myName = "Patrick";
let myHungriness = 0.3;
console.log(myHungriness);
myHungriness = 0.5;
console.log(myHungriness);

// console.log() sends message to browser console
console.log("hello");

let stepNumber = 4;
console.log("Taking step:", stepNumber, "... i think");

//let name = prompt("What's your name?");

// strings
let firstName = "Patrick";
let surname = "McMahon";
let quote = "This is a 'quote'";
console.log(quote);
let nameString = `My full name is ${firstName} ${surname}`;
console.log(nameString);

//conditionals
if (myAge < 30) {
  documentBody.style.backgroundColor = "red";
} else {
  documentBody.style.backgroundColor = "blue";
}

const a = 10;
let b = "10";
let setToBlue = false;
if (!setToBlue) {
  documentBody.style.backgroundColor = "red";
} else {
  documentBody.style.backgroundColor = "blue";
}

//type conversion
let myAge = 37;
let timePass = "5";
let updatedAge = myAge + parseInt;
console.log(updatedAge);

let hiddenvariable = "?";
console.log(hiddenvariable);

//array
let myPets = ["spot", "joey", "charile", "loius"];

console.log(myPets);

//function
function tellMeHowHungryIAm() {
  console.log("I'm not sure");
}
