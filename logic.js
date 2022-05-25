let players = ['x', 'o'];
let activePlayer = 0;
let gameField = [];

let boardSize = 3;

function createGameField() {
  let row = [];
  for (let i=0; i<boardSize; i++) {
    row.push('')
  }
  for (let i=0; i<boardSize; i++) {
    gameField.push(row)
  }
  return gameField
}

function startGame() {
  gameField = createGameField();
  activePlayer = 0;
  renderBoard(gameField);
}