function setRainbow() {
  rainbow = 2;
}

// need to add a slider that output a varying size number
let color = "black";
let gridSize = 20;
let rainbow = 2;
createGrid(gridSize);
console.log(rainbow)
//get blue button element
let blueButton = document.getElementById("blue");

console.log(rainbow)

//listeners
document.getElementById("blue").addEventListener("click", changeColor);
document.getElementById("black").addEventListener("click", changeColor);
document.getElementById("rainbow").addEventListener("click", setRainbow);
document.getElementById("slider").addEventListener("input", setGridSize);

function changeColor() { 
 color = this.id;
rainbow = false;
}



setRainbow(true);
console.log(rainbow)

var setGridSize = function() {
}


//removes all divs when calling creategrid and clicking the erase button
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}


function setGridSize() {
  gridSize = this.value;
  createGrid(gridSize);
}

//function for adding the rainbow function on the grid creator color settings



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
      if (rainbow == 2) {this.style.backgroundColor = randomColor()}
      this.style.backgroundColor = color; //***CAN I JUST MOVE THIS LISTENER OUT OF THIS FUNCTION???
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
    var rainbowColor = '#';
    for (var i = 0; i < 6; i++) {
      rainbowColor += letters[Math.floor(Math.random() * 16)];
    }
      return rainbowColor;
  }
console.log(randomColor());
// autosize cells based on cell qty, this is called from createGrid which I think is poorly efficient
function setSize(rowQty) {
    const cellSize = (100 / rowQty) + '%';
    let root = document.querySelector(':root');
    root.style.setProperty('--cellSize', cellSize);
    };

