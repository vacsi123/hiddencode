// Create the game board
const board = [];
for (let i = 0; i < 6; i++) {
  board.push(new Array(7).fill(0));
}

// Create the game elements
const boardEl = document.getElementById('board');
for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 7; j++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.dataset.row = i;
    cell.dataset.col = j;
    boardEl.appendChild(cell);
  }
}

// Set up the game state
let currentPlayer = 1;

// Set up the event listener for cell clicks
boardEl.addEventListener('click', function(event) {
  const cell = event.target;
  if (!cell.classList.contains('cell')) {
    return;
  }
  const row = parseInt(cell.dataset.row);
  const col = parseInt(cell.dataset.col);
  if (board[row][col] !== 0) {
    return;
  }
  // Place the player's piece in the cell
  board[row][col] = currentPlayer;
  cell.classList.add(`player-${currentPlayer}`);
  // Check for a win
  if (checkWin()) {
    alert(`Player ${currentPlayer} wins!`);
    resetGame();
    return;
  }
  // Switch to the other player
  currentPlayer = currentPlayer === 1 ? 2 : 1;
});
// Check for a win
function checkWin() {
    return checkHorizontal() || checkVertical() || checkDiagonal();
  }
  
  // Check for a horizontal win
  function checkHorizontal() {
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 4; j++) {
        if (board[i][j] !== 0 &&
            board[i][j] === board[i][j+1] &&
            board[i][j] === board[i][j+2] &&
            board[i][j] === board[i][j+3]) {
          return true;
        }
      }
    }
    return false;
  }
  
  // Check for a vertical win
  function checkVertical() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 7; j++) {
        if (board[i][j] !== 0 &&
            board[i][j] === board[i+1][j] &&
            board[i][j] === board[i+2][j] &&
            board[i][j] === board[i+3][j]) {
          return true;
        }
      }
    }
    return false;
  }
  
  // Check for a diagonal win (bottom-left to top-right)
  for (let i = 3; i < 6; i++) {
    for (let j = 0; j < 4; j++) {
      if (board[i][j] !== 0 &&
          board[i][j] === board[i-1][j+1] &&
          board[i][j] === board[i-2][j+2] &&
          board[i][j] === board[i-3][j+3]) {
        return true;
      }
    }
  }
  return false;
  
  // Check for a diagonal win (top-left to bottom-right)
 for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 4; j++) {
      if (board[i][j] !== 0 &&
          board[i][j] === board[i+1][j+1] &&
          board[i][j] === board[i+2][j+2] &&
          board[i][j] === board[i+3][j+3]) {
        return true;
      }
    }
  }
  return false;
  
  // Reset the game
  function resetGame() {
    board.forEach(row => row.fill(0));
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
      cell.classList.remove('player-1', 'player-2');
    });
    currentPlayer = 1;
  }
  