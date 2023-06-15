// Get the necessary elements from the DOM
const grid = document.getElementById('grid');
const colorSelector = document.getElementById('color');
let selectedColor = colorSelector.value;

// Function to create a new row in the grid
function addrows() {
  const newRow = document.createElement('tr');
  const cols = grid.rows[0].cells.length;
  for (let i = 0; i < cols; i++) {
    const newCell = document.createElement('td');
    newCell.addEventListener('click', changeCellColor);
    newRow.appendChild(newCell);
  }
  // if(cols===0){
  //   newCell.addEventListener('mouseover', changeCellColor);
  //   newRow.appendChild(newCell);
  //   rows[i].appendChild(newCell); 
  // }
  grid.appendChild(newRow);
}

// Function to add columns to the grid
function addcols() {
  const rows = grid.rows;
  for (let i = 0; i < rows.length; i++) {
    const newCell = document.createElement('td');
    newCell.addEventListener('click', changeCellColor);
    rows[i].appendChild(newCell);
  }
}

// Function to remove a row from the grid
function remrows() {
  if (grid.rows.length > 0) {
    grid.removeChild(grid.lastElementChild);
  }
}

// Function to remove a column from the grid
function remcols() {
  const rows = grid.rows;
  for (let i = 0; i < rows.length; i++) {
    if (rows[i].cells.length > 0) {
      rows[i].removeChild(rows[i].lastElementChild);
    }
  }
}

// Function to change the color of a cell
function changeCellColor(event) {
  event.target.style.backgroundColor = selectedColor;
}

// Function to change the selected color
function changecolor() {
  selectedColor = colorSelector.value;
}

// Function to fill all uncolored cells with the selected color
function filluncolor() {
  const cells = grid.getElementsByTagName('td');
  Array.from(cells).forEach(function(cell) {
    if (!cell.style.backgroundColor) {
      cell.style.backgroundColor = selectedColor;
    }
  });
}

// Function to fill all cells with the selected color
function fillall() {
  const cells = grid.getElementsByTagName('td');
  Array.from(cells).forEach(function(cell) {
    cell.style.backgroundColor = selectedColor;
  });
}

// Function to clear all cells and restore to initial color
function clearall() {
  const cells = grid.getElementsByTagName('td');
  Array.from(cells).forEach(function(cell) {
    cell.style.backgroundColor = '';
  });
}

let isDragging = false;

// Listens for mouseover 
grid.addEventListener("mousedown", (event) => {
  // If its over the table
  if (event.target.tagName === "TD") {
    // It is being dragged, set the color of the selected cell
    isDragging = true;
    event.target.style.backgroundColor = selectColor();
  }
});

grid.addEventListener("mouseover", (event) => {
  // If being dragged within target cell, set its color given from the function
  if (isDragging && event.target.tagName === "TD") {
    event.target.style.backgroundColor = selectColor();
  }
});

grid.addEventListener("mouseup", () => {
  // No longer being dragged so set it to false
  isDragging = false;
});

// To stop coloring cells when the mouse is released outside of a cell
document.addEventListener("mouseup", () => {
  isDragging = false;
});

  // Event listener for clicking on a cell to change its color
grid.addEventListener('click', changeCellColor);