const DEFAULTCOLOR = '#000000';
let color = DEFAULTCOLOR;

let isMouseDown = false;
let isRandom = false;


const colorPicker = document.getElementById("color-picker");
const slider = document.getElementById('myRange');
const btnClear = document.getElementById('clear');
const btnRanColors = document.getElementById('ranColors');
const grid = document.getElementById('grid');

drawGrid(16);

//draw the grid
function drawGrid(size) {
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

//changes the color used to paint the squares
colorPicker.addEventListener("input", function() {
    color = this.value;
    isRandom = false;
    console.log(color);
});

//re-setup grid
function resetGrid() {
    grid.innerHTML = '';
    drawGrid(+slider.value);
}

//update the paragraph that shows the size of the canvas
function updateSizePara() {
    const paraSize = document.getElementById('sizePara');
    paraSize.innerHTML = `${slider.value} x ${slider.value}`;
}

slider.addEventListener('mouseup', resetGrid);
slider.addEventListener('input', updateSizePara);

btnClear.addEventListener('click', resetGrid);

btnRanColors.addEventListener('click', () => {
    if(isRandom) isRandom = false;
    else {
        isRandom = true;
        color = colorPicker.value;
    }
});