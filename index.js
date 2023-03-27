// Create main container and add to the DOM

const main = document.querySelector('.container');

for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    main.appendChild(row);
}

const rows = document.querySelectorAll('.row');

// Create 16 square cells for each row, resulting in 16x16 grid

Array.from(rows).forEach((row) => {
    for (let i = 0; i < 16; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        row.appendChild(square);
    }
})




