// need to add a slider that output a varying size number
let color = 'black';
let gridSize = 20;
createGrid(gridSize);

//this sets the color to 1 which is used in the event delegation to enable the randomColor/rainbow mode
function setRainbow() {
    color = 1;
}

//listeners
document.getElementById("blue").addEventListener("click", changeColor);
document.getElementById("black").addEventListener("click", changeColor);
document.getElementById("rainbow").addEventListener("click", setRainbow);
document.getElementById("slider").addEventListener("input", setGridSize);

//event delegation for the shading on mousenter nested if statement to switch between solid color and rainbow effect
document.getElementById("container").addEventListener("mouseover", function(e) {
    console.log(e);
    const target = e.target;
    console.log(target);
    if (target.matches("div#cell.cell")) {
        if (color == 1) {
            target.style.backgroundColor = randomColor();
        } else {
            target.style.backgroundColor = color;
        }
    }
});

//when a solid color button is clicked this is what is called to set the color
function changeColor() {
    color = this.id;
}

//removes all divs when calling creategrid and clicking the erase button
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

//used to set the size of thew grid based on the sliders value, this is called from the slider function
function setGridSize() {
    gridSize = this.value;
    createGrid(gridSize);
}

//function for adding the rainbow function on the grid creator color settings
function createGrid(rows) {
    let container = document.getElementById("container");
    if (container.hasChildNodes()) {
        removeAllChildNodes(container);
    }
    let cells = rows * rows;
    for (let i = 0; i < cells; i++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.id = "cell";
        container.appendChild(cell);
    }
    setSize(rows);
}

//update color variable based on
function colorChoice(rows) {
    color = rows;
}

// create random color rainbow option
function randomColor() {
    let letters = '0123456789ABCDEF';
    let rainbowColor = '#';
    for (let i = 0; i < 6; i++) {
        rainbowColor += letters[Math.floor(Math.random() * 16)];
    }
    return rainbowColor;
}

// autosize cells based on cell qty, this is called from createGrid which I think is poorly efficient
function setSize(rowQty) {
    const cellSize = (100 / rowQty) + '%';
    let root = document.querySelector(':root');
    root.style.setProperty('--cellSize', cellSize);
};