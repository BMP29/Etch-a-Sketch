const DEFAULTCOLOR = '#000000';
let color = DEFAULTCOLOR;

let isMouseDown = false;
let isRandom = false;

//draw the grid
function drawGrid(size) {
    const grid = document.querySelector('#grid');
    const paraSize = document.getElementById('sizePara');
    paraSize.innerHTML = `${size} x ${size}`;
    for(let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList = 'row';
        row.setAttribute('draggable', false);
        grid.appendChild(row);
        for(let j = 0; j < (size); j++) {
            const square = document.createElement('div');
            square.style.flex = '1';
            square.classList = 'squares';
            square.setAttribute('draggable', false);
            square.style.backgroundColor = '#FFFFFF'
            row.appendChild(square);
        }
    }
    paintSquares();
}
 
//the following code allow the squares to change color when the table HEAR a mousedown...
//...and the square (grid-elements) HEAR that the mouse is over then
function paintSquares() {
    const gridElements = document.querySelectorAll('.squares');
    gridElements.forEach(square => {
        square.addEventListener('mouseover', () => {
            if(isMouseDown && !isRandom) square.style.backgroundColor = color;
            else if(isMouseDown && isRandom) square.style.backgroundColor = randomColors();
            console.log("MouseOver");
        });
    });
}

function randomColors() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    color = `rgb(${red}, ${green}, ${blue}`;
    return color;
}


grid.addEventListener('mousedown', () => {
    isMouseDown = true;
    console.log("mouseDown: " + isMouseDown);
});

grid.addEventListener('mouseleave', () => {
    isMouseDown = false;
    console.log("mouseLeave")
});

grid.addEventListener('mouseup', () => {
    console.log("mouseUp");
    isMouseDown = false;
});


drawGrid(16);

//changes the color used to paint the squares
const colorPicker = document.getElementById("color-picker");
colorPicker.addEventListener("input", function() {
    color = this.value;
    isRandom = false;
    console.log(color);
});

function resetGrid() {
    const rows = document.querySelectorAll('.row');
    rows.forEach(row => {
        grid.removeChild(row);
    });
    drawGrid(+slider.value);
}

const slider = document.getElementById('myRange');
slider.addEventListener('mouseup', resetGrid);

const btnClear = document.getElementById('clear');
btnClear.addEventListener('click', resetGrid);

const btnRanColors = document.getElementById('ranColors');
btnRanColors.addEventListener('click', () => {
    if(isRandom) isRandom = false;
    else {
        isRandom = true;
        color = colorPicker.value;
    }
});