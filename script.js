let modifyGridButton = document.querySelector(".gridModifierButton");
let gridResetButton = document.querySelector(".gridReset");

function gridPromptOnClick() {
    const minValueGrid = 1;
    const maxValueGrid = 50;

    let inputForGridSize = prompt(`Input a value between ${minValueGrid} and ${maxValueGrid}, including the two.`);

    if (inputForGridSize === null) { return undefined; }

    while (isNaN(inputForGridSize) === true || inputForGridSize > 50 || inputForGridSize < 1) {
        inputForGridSize = prompt(`The number is out of bounds. Please enter a number between ${minValueGrid} and ${maxValueGrid} to continue.`);
        if (inputForGridSize === null) { return; }
    }

    return inputForGridSize;
}

function createGrid(n) {

    let wrapperForSquares = document.querySelector(".gridContainer");
    let squares;
    let intermittentValue = Math.floor(n || 16);
    let height = (750 / intermittentValue) + "px";
    for (let i = 1; i <= intermittentValue * intermittentValue; i++) {
        squares = document.createElement("div");
        squares.style.height = height;
        squares.style.aspectRatio = 1;
        squares.classList.add("staticSquares");
        wrapperForSquares.appendChild(squares);
    }
}

createGrid();

function removeStaticGrid() {
    const squareContainer = document.querySelector(".gridContainer");
    squareContainer.textContent = "";
}

modifyGridButton.addEventListener("click", function (event) {
    let n = gridPromptOnClick();
    if (n !== undefined) {
        removeStaticGrid();
        createGrid(n);
    }
    else { return; }
})



