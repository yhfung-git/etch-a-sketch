// Current Year
date = new Date();
year = date.getFullYear();
document.getElementById("current-year").innerHTML = year;


// Etch-a-Sketch
// Change Size (min 10 & max 70)
let sizeValue = document.getElementById("sizeValue");

function changeSize(value) {
  sizeValue.innerText = (`${value} x ${value}`);
  rangeSliderValue(value);
}
// Update grid
function updateGrid(value) {
  generateGrid(value);
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

// Generate Grid
function generateGrid(size) {
  let grid = document.getElementById("grid");
  let divs = grid.querySelectorAll("div");

  // Initialise the divs
  divs.forEach(div =>{
    grid.removeChild(div);
  });

  // Set columns and row depends on the size
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  // Create and Paint divs
  for (let i = 0; i < size * size; i++) {
    let div = document.createElement("div");
    div.addEventListener("mouseover", divColor);
    div.style.backgroundColor = "white";
    div.style.border = "1px solid #F55050";
    grid.appendChild(div);
  }
}

generateGrid(16);
