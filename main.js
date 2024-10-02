let gridSize;
let color;

function randomColor() {
  
   const maxRgbValue = 255;

    const r = Math.floor(Math.random() * maxRgbValue);
    const g = Math.floor(Math.random() * maxRgbValue);
    const b = Math.floor(Math.random() * maxRgbValue);

    return `rgb(${r}, ${g}, ${b})`;
}

// update the grid based on the selection
function updateGrid(cellnumber) {
   
    const gridArea = document.getElementById("gridArea");
    gridArea.replaceChildren();
    gridSize = cellnumber;
    createGrid(gridSize);
}

// create the grid
function createGrid (gridSize) {

    const gridArea = document.getElementById("gridArea");
    gridArea.style.gridTemplateColumns = `repeat(${gridSize}, ${gridSize}fr)`
    gridArea.style.gridTemplateRows = `repeat(${gridSize}, ${gridSize}fr)`

    for (i=0; i<gridSize * gridSize; i++) {
        const cell = document.createElement("div");
        cell.style.backgroundColor= "#111827";

        cell.className = "cell"
        cell.addEventListener("click", () => {

            if (color == "random") {
               cell.style.backgroundColor = randomColor() 
            } else {
               cell.style.backgroundColor= color;
            }
        })
        

        gridArea.appendChild(cell);
    }
}


// select size of the grid
const buttons = Array.from(document.getElementsByClassName("sizeBtn"));

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let cellNumber = button.value;
        updateGrid(cellNumber);
        })
  } );
  
//initialise the grid with 4x4 as a default
  createGrid(4);

  // pick color based on button
  const colorBtn = Array.from(document.getElementsByClassName("colorBtn"));

colorBtn.forEach((colorSelect) => {
    colorSelect.addEventListener("click", () => {
        color =  colorSelect.value;
      })
})

  
  