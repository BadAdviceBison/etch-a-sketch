let squareAmount = 0
let dimensions = 0
let playArea = document.querySelector('.playArea')
const refreshButton = document.querySelector('.refresh')
const changeCountButton = document.querySelector('.changeCount')
let playSquares = document.querySelectorAll('.square')

//Come back and create two color panels - one to choose the background, and the other to choose the pen color.

getSize()
createPlayArea()
activatePen()

//Come back to create getSize2 or something which has shorter prompt message excluding the initial explanation for the changeCountButton

function getSize() {
        squareAmount = prompt('How many squares per side do you want on the etch-a-sketch? \n\n The higher the number, the more precise the "pen", and the smaller the panels that get colored in. \n\n This device supports 16 to 100 squares per side.')
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