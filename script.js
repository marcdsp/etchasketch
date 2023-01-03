createGrid(50)  // need to add a slider that output a varying size number

function createGrid(rows) {
    // Get the container element
    var container = document.getElementById("container");
  
    // Calculate the number of cells needed
    var cells = rows * rows;
  
    // Create the cells
    for (var i = 0; i < cells; i++) {
      var cell = document.createElement("div");
      cell.classList.add("cell");
      cell.id = "cell-" + i;

          // Add an onmouseenter event listener to each cell for mouseenter
    cell.addEventListener("mouseenter", function() {
      this.style.backgroundColor = "black"; //this is where I'll add the set color function
    });

         // Add an onmouseenter event listener to each cell for touchmove
    cell.addEventListener("touchstart", function() {
      this.style.backgroundColor = "black"; //this is where I'll add the set color function
    });

      container.appendChild(cell);
    }
    setSize(rows);

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


console.log(randomColor())

// autosize cells based on , this is called from createGrid which I think is poorly efficient
function setSize(rowQty) {
    const cellSize = (100 / rowQty) + '%';
    let root = document.querySelector(':root');
    root.style.setProperty('--cellSize', cellSize);
    };

