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
      container.appendChild(cell);
    }
  }

  createGrid(64)