let gridSize;
let color;

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
        cell.style.backgroundColor= "red";

        cell.className = "cell"
        cell.addEventListener("click", () => {
            cell.style.backgroundColor= color;
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
  const colorBtn = document.getElementById("colorBtn");

  colorBtn.addEventListener("click", () => {
    color = colorBtn.value;
  })
  
    // pick color based on button
    const raionbowBtn = document.getElementById("rainbow");

    raionbowBtn.addEventListener("click", () => {
      let rainbow = '#'+Math.floor(Math.random()*16777215).toString(16);
      color = rainbow;
    })
    
