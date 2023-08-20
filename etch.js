let squareAmount = 0
let dimensions = 0
let playArea = document.querySelector('.playArea')
const refreshButton = document.querySelector('.refresh')
const changeCountButton = document.querySelector('.changeCount')
let playSquares = document.querySelectorAll('.square')

//Create final function that runs all game functions so we can use that to refresh the play area. Maybe we also have 2 buttons, one refresh, one change size

getSize()
createPlayArea()
activatePen()

function getSize() {
        squareAmount = prompt('Enter a number')
        for (;;) {
            if (squareAmount <16 || squareAmount >100) {
            alert('Please enter a valid number (16-100)')
            getSize()
    }   else break
} 
    setSize()
}

function setSize() {
    dimensions = (800 / squareAmount) + 'px'
}

function createPlayArea() {
    for (i = 0; i < (squareAmount * squareAmount); i++) {
        let squares = document.createElement('div')
        squares.classList.add('square')
        squares.style.height = dimensions
        squares.style.width = dimensions
        // squares.addEventListener('mouseover', square => square.classList.add('darken')) - Not sure why this doesn't work. Come back to it in the future.
        playArea.appendChild(squares)
    }
    playSquares = document.querySelectorAll('.square')
}

function activatePen() {
    playSquares.forEach(square => square.addEventListener('mouseover', function () {
        this.classList.add('darken') // square.classList.add('darken') works just as well, and so does e.target.classList.add('darken')
    }))
}

activatePen()

refreshButton.addEventListener('click', erase)

function erase() {
    playSquares.forEach(square => square.classList.remove('darken'))
}

changeCountButton.addEventListener('click', () => {
    playSquares.forEach(square => square.remove())
    getSize();
    createPlayArea();
    activatePen();
})