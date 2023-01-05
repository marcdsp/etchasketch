 // need to add a slider that output a varying size number
let color = "black";
let gridSize = 20;
createGrid(gridSize);

//get blue button element
let blueButton = document.getElementById("blue");

document.getElementById("blue").addEventListener("click", changeColor);
document.getElementById("black").addEventListener("click", changeColor);
document.getElementById("pink").addEventListener("click", changeColor);

function changeColor() { 
 color = this.id;
}






//removes all divs when calling creategrid and clicking the erase button
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}


function setGridSize(size) {
  gridSize = size;
  createGrid(gridSize);
}




function createGrid(rows) {
  var container = document.getElementById("container");
  if (container.hasChildNodes()) {
    removeAllChildNodes(container);
      }
      for (var i = 0; i < rows; i++) {
        var row = document.createElement("div");
        row.classList.add("row");;
      }
      for (var i = 0; i < rows; i++) {
        var row = document.createElement("div");
        row.classList.add("row");
}
  var cells = rows * rows; 
    for (var i = 0; i < cells; i++) {
      var cell = document.createElement("div");
      cell.classList.add("cell");
      cell.id = "cell-" + i;
    cell.addEventListener("mouseenter", function() {
      this.style.backgroundColor = color; //this is where I'll add the set color function
    });
    container.appendChild(cell);
    }
    setSize(rows);
}

//update color variable based on
function colorChoice(rows) {
  let color = rows;
}


// create random color rainbow option
function randomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
      return color;
  }

// autosize cells based on cell qty, this is called from createGrid which I think is poorly efficient
function setSize(rowQty) {
    const cellSize = (100 / rowQty) + '%';
    let root = document.querySelector(':root');
    root.style.setProperty('--cellSize', cellSize);
    };

