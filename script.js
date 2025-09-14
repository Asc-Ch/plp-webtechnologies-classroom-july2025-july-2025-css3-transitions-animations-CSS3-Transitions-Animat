// Basic JavaScript concepts


// Function with parameters and return value
function calculateArea(width, height) {
  return width * height; // returns a value
}

// Variable scope demonstration
let globalMessage = "This is global!";

function showScopeExample() {
  let localMessage = "This is local!";
  console.log(globalMessage); // accessible
  console.log(localMessage);  // accessible only here
}
showScopeExample();

// DOM manipulation and event handling

// Function to change text content of a DOM element
const box = document.querySelector(".box");
const btn = document.getElementById("animateBoxBtn");

// Function to trigger animation by toggling a CSS class
function animateBox() {
  box.classList.remove("animate"); // reset animation
  void box.offsetWidth; // trick to restart animation
  box.classList.add("animate");
}

btn.addEventListener("click", animateBox);


console.log("Area of 5x10 box:", calculateArea(5, 10));
