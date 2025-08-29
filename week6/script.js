// we can use window to find certain properties
let windowWidth = window.innerWidth;
//console.log(windowWidth);
// find out the url location
//console.log(window.location);
// doumet can be used to find html
//console.log(document.title);
// set the title
//document.title = "new title";
// can find the body
//document.body.style.backgroundColor = "red";
// use a navigator code to fid more software
//console.log(window.navigator.userAgent);

const myImage = document.querySelector("#myImage");
console.log(myImage);
const firstParagraph = document.querySelector(".inner");

const myParagraphs = document.querySelectorAll("p");
function changeParaBG(item) {
  console.log(item);
  item.style.backgroundColor = "red";
}

//first find content of hello p
console.log(helloParagraph.textContent);

function updateCatName() {
  helloParagraph.textContent = "Hi My name is ${myImage.dataset.catname}";

  helloParagraph.t;
}
// find the outer section
const outerSection = document.querySelector("outer");

const myButton = document.querySelector("#myButton");

// add a eventlistener to button
myButton.addEventListener("click", function(){
alert("button is clicked")
)};
// create element
const newPara = document.createElement("p");
newPara.textContent = "I am a new paragraph";
newPara.classList.add("coral-box");
document.body.appendChild(newPara);

// at paragrpah in concole
console.log(newPara);

// add new element to header
const myHeader = document.querySelector("header");
//find my catname
let catName = myImage.dataset.catname;
myHeader.innrtHTML += "<h2>I think ${catName} is pretty cool</h2>";

// += works for maths
let x = 0;
x = x + 2;
x += 4;

// add mouseente eventlistner to img
myImage.addEventListener;
