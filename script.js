const DEFAULTCOLOR = '#000000';
let color = DEFAULTCOLOR;

//draw the grid
function drawGrid(size) {
    const grid = document.querySelector('#grid');

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
            row.appendChild(square);
        }
    }
}

drawGrid(16);

//the following code changes the square's color when the table is HEAR a mousedown...
//...and the square (grid-elements) HEAR that the mouse is over then
const grid = document.getElementById('grid');
const gridElements = document.querySelectorAll('.squares');
let isMouseDown = false;

gridElements.forEach(square => {
    square.addEventListener('mouseover', () => {
        if(isMouseDown) square.style.backgroundColor = color;
        console.log("hovering");
    });
});

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
const colorPicker = document.getElementById("color-picker");
colorPicker.addEventListener("input", function() {
 color = this.value;
  console.log( color);
});

