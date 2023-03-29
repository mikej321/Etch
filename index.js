// Create main container and add to the DOM

const main = document.querySelector('.container');
const colorContainer = document.querySelector('.color-container');
const retry = document.querySelector('.retry');
const start = document.querySelector('.start');

function createGrid() {
    for (let i = 0; i < 16; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        colorContainer.insertAdjacentElement('afterend', row);
    }
    
    const rows = document.querySelectorAll('.row');

    Array.from(rows).forEach((row) => {
        for (let i = 0; i < 16; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            row.appendChild(square);
        }
    })
    const colors = document.querySelectorAll('.color-container > button');
    let myChoice;
    
    Array.from(colors).forEach((color) => {
         color.addEventListener('click', function() {
             myChoice = this.id;
         })
    })
    const squares = document.querySelectorAll('.square');
    const mySquares = Array.from(squares);
    mySquares.forEach((square) => {
     square.addEventListener('mouseover', function() {
         square.classList.add(`${myChoice}`);
     })
    })
}

start.addEventListener('click', createGrid, { once: true });

// Create 16 square cells for each row, resulting in 16x16 grid


/* Set a group of colors on the top of the page that will
   be able to be clicked, that changes the color of the 
   trail. Pick 6 colors, and link them to helper classes
   that have the same name as the colors. Also, don't allow
   more than 1 color to be active at one time, to avoid conflicts. */

   // Red, Blue, Orange, Brown, Black, Pink, Purple, Green

   // Set a variable that captures the value of one of the color buttons

   // Set an event listener that listens for the capture of one of the colors


/* Set an event listener on the squares that listens for a mouseover and possibly
   a mouseout if I want the color to change back to a default. The mouseover will
   change the class of the square that it hovers over. I want it to add the class
   instead of toggling it as I don't want any errors to happen. */


   let amount = 0;
   
   function retryGrid() {
       const rows = document.querySelectorAll('.row');
       const squares = document.querySelectorAll('.square');
       rows.forEach((row) => row.remove());
       squares.forEach((square) => square.remove());
    }

    function createNew() {
        amount = Number(prompt('Please enter an amount for the size of the grid'));
        for (let i = 0; i < amount; i++) {
            const row = document.createElement('div');
            row.classList.add('row');
            colorContainer.insertAdjacentElement('afterend', row);
        }
        
        const rows = document.querySelectorAll('.row');
    
        Array.from(rows).forEach((row) => {
            for (let i = 0; i < amount; i++) {
                const square = document.createElement('div');
                square.classList.add('square');
                row.appendChild(square);
            }
        })
        const colors = document.querySelectorAll('.color-container > button');
        let myChoice;
        
        Array.from(colors).forEach((color) => {
             color.addEventListener('click', function() {
                 myChoice = this.id;
             })
        })
        const squares = document.querySelectorAll('.square');
        const mySquares = Array.from(squares);
        mySquares.forEach((square) => {
         square.addEventListener('mouseover', function() {
             square.classList.add(`${myChoice}`);
         })
        })
    }
    
    
    retry.addEventListener('click', retryGrid);
    retry.addEventListener('click', createNew);
    
    
   
    
    
    
    
                                
                                
                                
                                
                                