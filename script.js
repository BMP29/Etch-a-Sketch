

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

