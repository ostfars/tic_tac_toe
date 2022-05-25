let players = ['x', 'o'];
let activePlayer = 0;

function startGame() {
  let gameField = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  activePlayer = 0;
  renderBoard(gameField);
}

