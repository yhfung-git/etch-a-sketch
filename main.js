// Current Year
date = new Date();
year = date.getFullYear();
document.getElementById("current-year").innerHTML = year;


// Etch-a-Sketch
// Select Size (min 2 & max 80)
function changeSize(value) {
  if (value >= 2 && value <= 80) {
    generateGrid(value);
  } else if (value < 2) {
    alert("Minimum 2!");
  } else {
    alert("Maximum 60!");
  };
}

// Set color
// Click to stop or start painting
let click = false;
const inside = document.querySelector(".inside");
// inside.onmousedown = () => (mouseDown = true);
// inside.onmouseup = () => (mouseDown = false)
inside.addEventListener("click", () => {
  // after clicked, it won't paint anymore (click = false);
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

generateGrid(12);
