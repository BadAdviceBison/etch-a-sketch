let squareAmount = 0
let playArea = document.querySelector('.playArea')

getSize()

function getSize() {
    squareAmount = prompt('Enter a number')
    for (;;) {
        if (squareAmount <16 || squareAmount >100) {
        alert('Please enter a valid number (16-100)')
        getSize()
    } else break
}
}

let dimensions = (800 / squareAmount) + 'px'

function createPlayArea() {
    for (i = 0; i < (squareAmount * squareAmount); i++) {
        let squares = document.createElement('div')
        squares.setAttribute('style', 'display: flex; flex-wrap: wrap; background-color:red')
        squares.style.height = dimensions
        squares.style.width = dimensions
        playArea.appendChild(squares)
    }  

}

createPlayArea()