"use strict";

const modifyGridButton = document.querySelector(".gridModifierButton");
const gridResetButton = document.querySelector(".gridReset");
const eventGrid = document.querySelector(".gridContainer");
let n;

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
    const wrapperForSquares = document.querySelector(".gridContainer");
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
    n = gridPromptOnClick();
    if (n !== undefined) {
        removeStaticGrid();
        createGrid(n);
    }
    else { return; }
})

function colorCodeGenerator() {
    let red = Math.floor((Math.random() * 255) + 1);
    let green = Math.floor((Math.random() * 255) + 1);
    let blue = Math.floor((Math.random() * 255) + 1);
    let colorCode = `rgb(${red}, ${green}, ${blue})`;
    return colorCode;
}

function colorFiller(color, event) {
    event.target.style.backgroundColor = `${color}`;
}

function opacityModifier(event) {
    const currentOpacity = +(event.target.style.opacity) || 0;
    const newOpacity = Math.min(currentOpacity + 0.1, 1);
    event.target.style.opacity = newOpacity;
}

eventGrid.addEventListener("mouseover", function (event) {
    let colorCode = colorCodeGenerator();
    if (!(event.target.classList.contains("colored")) && event.target.classList.contains("staticSquares")) {
        colorFiller(colorCode, event);
        event.target.classList.add("colored");
    }
    opacityModifier(event);
})

gridResetButton.addEventListener("click", function(event){
    eventGrid.textContent = "";
    createGrid(n);
})

