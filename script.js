const DEFAULTCOLOR = '#000000';
let color = DEFAULTCOLOR;

//draw the grid
function drawGrid(size) {
    const grid = document.querySelector('#grid');

    for(let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList = 'row';
        grid.appendChild(row);
        for(let j = 0; j < (size); j++) {
            const square = document.createElement('div');
            square.style.flex = '1';
            square.classList = 'squares';
            square.style.border = '2px solid black';
            row.appendChild(square);
        }
    }
}

drawGrid(16);

const divs = document.querySelectorAll('.squares');
//changes the squares colors when you hover the mouse over it
divs.forEach((square) => {
    square.addEventListener('mouseover', () => {
        square.mouseover = square.style.backgroundColor = color;  
    });
});

const colorPicker = document.getElementById("color-picker");
//changes the color used to paint the squares
colorPicker.addEventListener("input", function() {
 color = this.value;
  console.log( color);
});

