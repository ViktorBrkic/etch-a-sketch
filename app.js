const body = document.querySelector('body')
const container = document.querySelector('.container')
body.appendChild(container)
const reset = document.createElement('button');
reset.setAttribute('style', 'color:#05070D; padding:1em 2em; margin-top:1em; text-transform:uppercase; font-weight:bold; background-color:#236991;font-size:1rem')
reset.innerText = 'Reset'
body.appendChild(reset);

function gridSize(size) {
    container.style.gridTemplateColumns = ` repeat(${size}, 1fr)`
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`


    for (i = 0; i < size * size; i++) {
        const gridSquare = document.createElement('div')
        gridSquare.classList.add('square')
        container.appendChild(gridSquare)
        // gridSquare.setAttribute('style', 'border: 1px solid black')
        gridSquare.addEventListener('mouseover', function () {
            gridSquare.setAttribute('style', 'background-color:rgb(35,122,122);border:1px solid #05070D; ')
        })
    }



}
gridSize(32);

reset.addEventListener('click', function (size) {
    const squares = document.querySelectorAll('.square');
    const newSize = prompt('Please enter a size');

    if (0 < newSize && newSize <= 100) {
        squares.forEach(square => {
            square.style.backgroundColor = 'white'
            square.style.border = 'none'

        });
        let size = newSize
        gridSize(newSize);

    } else {
        squares.forEach(square => {
            square.style.backgroundColor = 'white'
            square.style.border = 'none'
        })
        gridSize(32);
        alert('Only values between 1 and 100')
    }




})




