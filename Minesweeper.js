const grid = document.querySelector('.grid')
  const carrotsLeft = document.querySelector('#carrots-left')
  const result = document.querySelector('#result')
  let width = 10
  let bunnyAmount = 20
  let carrots = 0
  let squares = []
  let isGameOver = false

  //create Board
  function createBoard() {
    carrotsLeft.innerHTML = bunnyAmount

    //get shuffled game array with random bunny
    const bunnyArray = Array(bunnyAmount).fill('bunny')
    const emptyArray = Array(width*width - bunnyAmount).fill('valid')
    const gameArray = emptyArray.concat(bunnyArray)
    const shuffledArray = gameArray.sort(() => Math.random() -0.5)

    //Create a 100 Square
    for(let i = 0; i < width*width; i++) {
      const square = document.createElement('div')
      square.setAttribute('id', i) //Give unique id
      square.classList.add(shuffledArray[i]) 
      grid.appendChild(square) //Put 
      squares.push(square) //Push squares into it

      //normal click
      square.addEventListener('click', function(e) {
        click(square)
      })

      //cntrl and left click
      square.oncontextmenu = function(e) {
        e.preventDefault()
        addCarrot(square)
      }
    }

    //add numbers
    for (let i = 0; i < squares.length; i++) {
      let total = 0
      const isLeftEdge = (i % width === 0)
      const isRightEdge = (i % width === width -1)

      if (squares[i].classList.contains('valid')) {
        if (i > 0 && !isLeftEdge && squares[i -1].classList.contains('bunny')) total ++
        if (i > 9 && !isRightEdge && squares[i +1 -width].classList.contains('bunny')) total ++
        if (i > 10 && squares[i -width].classList.contains('bunny')) total ++
        if (i > 11 && !isLeftEdge && squares[i -1 -width].classList.contains('bunny')) total ++
        if (i < 98 && !isRightEdge && squares[i +1].classList.contains('bunny')) total ++
        if (i < 90 && !isLeftEdge && squares[i -1 +width].classList.contains('bunny')) total ++
        if (i < 88 && !isRightEdge && squares[i +1 +width].classList.contains('bunny')) total ++
        if (i < 89 && squares[i +width].classList.contains('bunny')) total ++
        squares[i].setAttribute('data', total)
      }
    }
  }
  createBoard()

  //add Carrot with right click
  function addCarrot(square) {
    if (isGameOver) return
    if (!square.classList.contains('checked') && (carrots < bunnyAmount)) {
      if (!square.classList.contains('carrot')) {
        square.classList.add('carrot')
        square.innerHTML = '🥕'
        carrots ++
        carrotsLeft.innerHTML = bunnyAmount- carrots
        checkForWin()
      } else {
        square.classList.remove('carrot')
        square.innerHTML = ''
        carrots --
        carrotsLeft.innerHTML = bunnyAmount- carrots
      }
    }
  }

  //click on square actions
  function click(square) {
    let currentId = square.id
    if (isGameOver) return
    if (square.classList.contains('checked') || square.classList.contains('carrot')) return
    if (square.classList.contains('bunny')) {
      gameOver(square)
    } else {
      let total = square.getAttribute('data')
      if (total !=0) {
        square.classList.add('checked')
        if (total == 1) square.classList.add('one')
        if (total == 2) square.classList.add('two')
        if (total == 3) square.classList.add('three')
        if (total == 4) square.classList.add('four')
        square.innerHTML = total
        return
      }
      checkSquare(square, currentId)
    }
    square.classList.add('checked')
  }


  //check neighboring squares once square is clicked
  function checkSquare(square, currentId) {
    const isLeftEdge = (currentId % width === 0)
    const isRightEdge = (currentId % width === width -1)

    setTimeout(() => {
      if (currentId > 0 && !isLeftEdge) {
        const newId = squares[parseInt(currentId) -1].id
        //const newId = parseInt(currentId) - 1   ....refactor
        const newSquare = document.getElementById(newId)
        click(newSquare)
      }
      if (currentId > 9 && !isRightEdge) {
        const newId = squares[parseInt(currentId) +1 -width].id
        //const newId = parseInt(currentId) +1 -width   ....refactor
        const newSquare = document.getElementById(newId)
        click(newSquare)
      }
      if (currentId > 10) {
        const newId = squares[parseInt(currentId -width)].id
        //const newId = parseInt(currentId) -width   ....refactor
        const newSquare = document.getElementById(newId)
        click(newSquare)
      }
      if (currentId > 11 && !isLeftEdge) {
        const newId = squares[parseInt(currentId) -1 -width].id
        //const newId = parseInt(currentId) -1 -width   ....refactor
        const newSquare = document.getElementById(newId)
        click(newSquare)
      }
      if (currentId < 98 && !isRightEdge) {
        const newId = squares[parseInt(currentId) +1].id
        //const newId = parseInt(currentId) +1   ....refactor
        const newSquare = document.getElementById(newId)
        click(newSquare)
      }
      if (currentId < 90 && !isLeftEdge) {
        const newId = squares[parseInt(currentId) -1 +width].id
        //const newId = parseInt(currentId) -1 +width   ....refactor
        const newSquare = document.getElementById(newId)
        click(newSquare)
      }
      if (currentId < 88 && !isRightEdge) {
        const newId = squares[parseInt(currentId) +1 +width].id
        //const newId = parseInt(currentId) +1 +width   ....refactor
        const newSquare = document.getElementById(newId)
        click(newSquare)
      }
      if (currentId < 89) {
        const newId = squares[parseInt(currentId) +width].id
        //const newId = parseInt(currentId) +width   ....refactor
        const newSquare = document.getElementById(newId)
        click(newSquare)
      }
    }, 10)
  }

  //game over
  function gameOver(square) {
    result.innerHTML = 'YOU WOKE THEM UP'
    isGameOver = true

    //show ALL the bunnies
    squares.forEach(square => {
      if (square.classList.contains('bunny')) {
        square.innerHTML = '🐰'
        square.classList.remove('bunny')
        square.classList.add('checked')
      }
    })
  }

  //check for win
  function checkForWin() {
    ///simplified win argument
  let matches = 0

    for (let i = 0; i < squares.length; i++) {
      if (squares[i].classList.contains('carrot') && squares[i].classList.contains('bunny')) {
        matches ++
      }
      if (matches === bunnyAmount) {
        result.innerHTML = 'Good Job Feeding Them'
        isGameOver = true
      }
    }
  }
