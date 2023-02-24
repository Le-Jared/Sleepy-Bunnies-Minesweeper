/*---- Constants ----*/
const targetDiv = document.getElementById("welcome-box");
const hideDiv = document.getElementById("game-box");
const startBtn = document.getElementById("start");
const resetBtn = document.getElementById("reset");
const grid = document.querySelector('.grid');
const flagsLeft = document.querySelector('#flags-left');
const result = document.querySelector('#result');

/*---- Event Listeners & Cached Variables ----*/
hideDiv.style.display = "none";
startBtn.addEventListener("click", startGame);
resetBtn.addEventListener("click", resetGame);
let width = 10
let bombAmount = 20
let flags = 0
let squares = []
let isGameOver = false

/*---- Initialize Game ----*/
  //create Board
  function createBoard() {
    flagsLeft.innerHTML = bombAmount

    //Combine bombsArray and emptyArray and randomize the bombs
    const bombsArray = Array(bombAmount).fill('bomb')
    const emptyArray = Array(width*width - bombAmount).fill('valid')
    const gameArray = emptyArray.concat(bombsArray)
    const shuffledArray = gameArray.sort(() => Math.random() -0.5)

    //Create Squares
    for(let i = 0; i < width*width; i++) {
      const square = document.createElement('div')
      square.setAttribute('id', i)
      square.classList.add(shuffledArray[i])
      grid.appendChild(square)
      squares.push(square)

      //normal click
      square.addEventListener('click', function(e) {
        click(square)
      })

      //cntrl and left click or right click
      square.oncontextmenu = function(e) {
        e.preventDefault()
        addFlag(square)
      }
    }

    //add numbers to the squares setting and checking all surrounding squares
    for (let i = 0; i < squares.length; i++) {
      let total = 0
      const isLeftEdge = (i % width === 0)
      const isRightEdge = (i % width === width -1)
      if (squares[i].classList.contains('valid')) {
        if (i > 0 && !isLeftEdge && squares[i -1].classList.contains('bomb')) total ++ //check Left
        if (i > 9 && !isRightEdge && squares[i +1 -width].classList.contains('bomb')) total ++ //check up diagonal right
        if (i > 10 && squares[i -width].classList.contains('bomb')) total ++ //check up
        if (i > 11 && !isLeftEdge && squares[i -1 -width].classList.contains('bomb')) total ++ //check up diagonal left
        if (i < 98 && !isRightEdge && squares[i +1].classList.contains('bomb')) total ++ //check right
        if (i < 90 && !isLeftEdge && squares[i -1 +width].classList.contains('bomb')) total ++ //check down diagonal left
        if (i < 88 && !isRightEdge && squares[i +1 +width].classList.contains('bomb')) total ++ //check down diagonal right
        if (i < 89 && squares[i +width].classList.contains('bomb')) total ++ //check down
        squares[i].setAttribute('data', total)
      
      }
    }
  }
  createBoard()

  //add Carrot function
  function addFlag(square) {
    if (isGameOver) return
    if (!square.classList.contains('checked') && (flags < bombAmount)) {
      if (!square.classList.contains('flag')) {
        square.classList.add('flag')
        square.innerHTML = '🥕'
        flags ++
        flagsLeft.innerHTML = bombAmount- flags
        checkForWin()
      } else {
        square.classList.remove('flag')
        square.innerHTML = ''
        flags --
        flagsLeft.innerHTML = bombAmount- flags
      }
    }
  }

  //click on square actions
  function click(square) {
    let currentId = square.id
    if (isGameOver) return
    if (square.classList.contains('checked') || square.classList.contains('flag')) return
    if (square.classList.contains('bomb')) {
      gameOver(square)
    } else {
      let total = square.getAttribute('data')
      if (total !=0) {
        square.classList.add('checked')
        if (total == 1) square.classList.add('one')
        if (total == 2) square.classList.add('two')
        if (total == 3) square.classList.add('three')
        if (total == 4) square.classList.add('four')
        if (total == 5) square.classList.add('five')
        square.innerHTML = total
        return
      }
      checkSquare(square, currentId)
    }
    square.classList.add('checked')
  }


  //Recusrion where we check neighbouring squares 
  function checkSquare(square, currentId) {
    const isLeftEdge = (currentId % width === 0)
    const isRightEdge = (currentId % width === width -1)

    setTimeout(() => {
      if (currentId > 0 && !isLeftEdge) {
        const newId = squares[parseInt(currentId) -1].id
        const newSquare = document.getElementById(newId)
        click(newSquare)
      }
      if (currentId > 9 && !isRightEdge) {
        const newId = squares[parseInt(currentId) +1 -width].id
        const newSquare = document.getElementById(newId)
        click(newSquare)
      }
      if (currentId > 10) {
        const newId = squares[parseInt(currentId -width)].id
        const newSquare = document.getElementById(newId)
        click(newSquare)
      }
      if (currentId > 11 && !isLeftEdge) {
        const newId = squares[parseInt(currentId) -1 -width].id
        const newSquare = document.getElementById(newId)
        click(newSquare)
      }
      if (currentId < 98 && !isRightEdge) {
        const newId = squares[parseInt(currentId) +1].id
        const newSquare = document.getElementById(newId)
        click(newSquare)
      }
      if (currentId < 90 && !isLeftEdge) {
        const newId = squares[parseInt(currentId) -1 +width].id
        const newSquare = document.getElementById(newId)
        click(newSquare)
      }
      if (currentId < 88 && !isRightEdge) {
        const newId = squares[parseInt(currentId) +1 +width].id
        const newSquare = document.getElementById(newId)
        click(newSquare)
      }
      if (currentId < 89) {
        const newId = squares[parseInt(currentId) +width].id
        const newSquare = document.getElementById(newId)
        click(newSquare)
      }
    }, 10)
  }

  //game over
  function gameOver(square) {
    result.innerHTML = 'YOU WOKE THEM UP!'
    isGameOver = true

    //show ALL the bunnies
    squares.forEach(square => {
      if (square.classList.contains('bomb')) {
        square.innerHTML = '🐰'
        square.classList.remove('bomb')
        square.classList.add('checked')
      }
    })
  }

  //check for win
  function checkForWin() {
  let matches = 0

    for (let i = 0; i < squares.length; i++) {
      if (squares[i].classList.contains('flag') && squares[i].classList.contains('bomb')) {
        matches ++
      }
      if (matches === bombAmount) {
        result.innerHTML = 'Nice Job Feeding Them'
        isGameOver = true
      }
    }
  }
  
//Hide instructions
function startGame () {
      targetDiv.style.display = "none";
      hideDiv.style.display = "block";
    }

function resetGame() {
// Remove all squares from the grid
for (let i = 0; i < squares.length; i++) {
  grid.removeChild(squares[i])
}

// Reset variables to initial values
flags = 0
flagsLeft.innerHTML = bombAmount
result.innerHTML = ""

// Recreate the board and start the game
squares = []
isGameOver = false
createBoard()
}
       