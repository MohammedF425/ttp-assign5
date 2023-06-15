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
    newCell.addEventListener('mouseover', changeCellColor);
    newRow.appendChild(newCell);
  }
  grid.appendChild(newRow);
}

// Function to add columns to the grid
function addcols() {
  const rows = grid.rows;
  for (let i = 0; i < rows.length; i++) {
    const newCell = document.createElement('td');
    newCell.addEventListener('mouseover', changeCellColor);
    rows[i].appendChild(newCell);
  }
}

// Function to remove a row from the grid
function remrows() {
  if (grid.rows.length > 1) {
    grid.removeChild(grid.lastElementChild);
  }
}

// Function to remove a column from the grid
function remcols() {
  const rows = grid.rows;
  for (let i = 0; i < rows.length; i++) {
    if (rows[i].cells.length > 1) {
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

// Event listener for clicking on a cell to change its color
grid.addEventListener('click', changeCellColor);
