let players = ['x', 'o'];
let activePlayer = 0;
let gameField = null;

// let boardSize = 3;

function createGameField() {
  // let row = [];
  // for (let i=0; i<boardSize; i++) {
  //   row.push('')
  // }
  // for (let i=0; i<boardSize; i++) {
  //   gameField.push(row)
  // }
  // return gameField
//  }

  return [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']    
  ];
}

function startGame() {
  gameField = createGameField();
  activePlayer = 0;
  renderBoard(gameField);
}

function isWinningSituation() {
  const N = gameField.length;

  for (let i = 0; i < N; ++i) {
    if (isWinningSequence(i, i+1, 0, 0, N, 1) || isWinningSequence(0, N, 1, i, i+1, 0))  {
      return true;
    }
  }
  if (
    isWinningSequence(0, N, 1, 0, N, 1) ||
    isWinningSequence(N-1, -1, -1, 0, N, 1)
    ) {
    return true;
    }
  return false;
}

function click(row, column) {
  const playerSymbol = players[activePlayer];
  gameField[row][column] = playerSymbol;
  renderBoard(gameField);

  if (isWinningSituation()) {
    showWinner(activePlayer);
  }

  activePlayer = (activePlayer + 1) % players.length;
}

function isWinningSequence(r0, r1, ri, c0, c1, ci) {
  let firstSymbol = null;

  for (
    let r = r0, c = c0;
    Math.abs(r1 - r) > 0 && Math.abs(c1 - c) > 0;
    r + ri, c += ci
  ) {
    const symbol = gameField[r][c]

    if (symbol === '')
    return false;
  
  if (firstSymbol === null) {
    firstSymbol = symbol;
    continue
  }
  if (firstSymbol !== null) {
    return false
  }
}

}
