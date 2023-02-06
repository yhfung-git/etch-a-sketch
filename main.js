// Current Year
date = new Date();
year = date.getFullYear();
document.getElementById("current-year").innerHTML = year;


// Etch-a-Sketch
// Change Size
let sizeValue = document.getElementById("sizeValue");

function changeSize(value) {
  sizeValue.innerText = (`${value} x ${value}`);
  rangeSliderValue(value);
}

// Update grid
function updateGrid(value) {
  generateGrid(value);
}

// Reset Grid
function resetGrid() {
  let grid = document.getElementById("grid");
  let divs = grid.querySelectorAll("div");

  divs.forEach(div => {
    div.style.backgroundColor = "white";
  });
}

// Show or Hide Grid Border
function showBorder() {
  let grid = document.getElementById("grid");
  let divs = grid.querySelectorAll("div");

  divs.forEach(div => {
    if (div.style.border === "white") {
      div.style.border = "1px solid #F55050";
    } else {
      div.style.border = "white";
    }
  });
}

// Progress bar
let progressBar = document.getElementById("progressBar");
// (value / maximum value of the range) * width of the range + %
function rangeSliderValue(value) {
  progressBar.style.width = (value / 70) * 52 + '%';
}

// Set color
let click = true;
const inside = document.querySelector(".inside");

// Click to stop or start painting
inside.addEventListener("click", () => {
  click = !click;
});

// Color default
let color = "#F55050"

function divColor() {
  if (click) {
    if (color === "random") {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
      this.style.backgroundColor = color;
    };
  }
}

// Change Color
function changeColor(choice) {
  color = choice;
}

// Activate or Deactivate buttons
const buttons = document.querySelectorAll(".buttons button");
const defaulBtn = document.querySelector(".default");
const randomBtn = document.querySelector(".random");
const eraserBtn = document.querySelector(".eraser");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    if (button.classList.value === "random") {
      randomBtn.classList.add("random-active");
      defaulBtn.classList.remove("default-active");
      eraserBtn.classList.remove("eraser-active");
    } else if (button.classList.value === "default") {
      defaulBtn.classList.add("default-active");
      eraserBtn.classList.remove("eraser-active");
      randomBtn.classList.remove("random-active");
    } else if (button.classList.value === "eraser") {
      eraserBtn.classList.add("eraser-active");
      defaulBtn.classList.remove("default-active");
      randomBtn.classList.remove("random-active");
    }
  });
});

// Grid Button Toggle
const gridBtn = document.querySelector(".grid");

gridBtn.addEventListener("click", () => {
  gridBtn.classList.toggle("grid-active");
});

// Click on the color button (input) will deactive other buttons except Grid button
const colorsBtn = document.getElementById("color-input");

colorsBtn.addEventListener("click", () => {
  defaulBtn.classList.remove("default-active");
  randomBtn.classList.remove("random-active");
  eraserBtn.classList.remove("eraser-active");
});

// Generate Grid
function generateGrid(size) {
  let grid = document.getElementById("grid");
  let divs = grid.querySelectorAll("div");

  // Initialise the divs
  divs.forEach(div =>{
    grid.removeChild(div);
  });

  // Initialise the activate of the grid button
  gridBtn.classList.remove("grid-active");

  // Set columns and row depends on the size
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  // Create and Paint divs
  for (let i = 0; i < size * size; i++) {
    let div = document.createElement("div");
    div.addEventListener("touchmove", function(e) {e.preventDefault()});
    div.addEventListener('touchmove', divColor);
    div.addEventListener("mousemove", divColor);
    div.style.backgroundColor = "white";
    div.style.border = "1px solid #F55050";
    grid.appendChild(div);
  }
}

generateGrid(10);
