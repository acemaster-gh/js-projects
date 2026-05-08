// 1. STATE OBJECT

const state = {
    board :['','','','','','','','',''],
    currentPlayer: 'O',
    gameOver: false,
xWins: 0,
oWins: 0

}






// 2. DOM OBJECT

const DOM ={
gameUi: document.querySelector('.game-ui'),
status: document.querySelector('.player'),
result: document.querySelector('.win-results'),
playAgainBtn: document.querySelector('#play-again'),

}

// 3. CREATE ELEMENT

function createCell(i) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  cell.textContent = state.board[i];
  cell.dataset.index = i;
  if(state.board[i]) cell.setAttribute('data-value', state.board[i]);

  cell.addEventListener('click', function(e) {
    const index = Number(e.target.dataset.index);
    if (state.board[index] !== '' || state.gameOver) return;

    const player = state.currentPlayer;
    state.board[index] = player;

    if (checkWinner(player)) {
      state.gameOver = true;
      DOM.result.textContent = `Player ${player} wins!`;
    } else if (state.board.every(cell => cell !== '')) {
      state.gameOver = true;
      DOM.result.textContent = "It's a draw!";
    } else {
      state.currentPlayer = player === 'X' ? 'O' : 'X';
    }

    renderBoard();
  });

  DOM.gameUi.appendChild(cell);
}


// 4. FUNCTION
function renderBoard() {
    DOM.gameUi.innerHTML = '';
    for (let i = 0; i < state.board.length; i++) {
        createCell(i);
    }
    DOM.status.textContent = `Player ${state.currentPlayer}'s turn`;

    if (!state.gameOver) {
        DOM.status.textContent = `Player ${state.currentPlayer}'s turn`
    } else {DOM.status.textContent = "Game Over";}
}

renderBoard();

const winningCombos = [
  [0, 1, 2], // top row
  [3, 4, 5], // middle row
  [6, 7, 8], // bottom row
  [0, 3, 6], // left column
  [1, 4, 7], // middle column
  [2, 5, 8], // right column
  [0, 4, 8], // diagonal
  [2, 4, 6], // diagonal
];

function checkWinner(player){
    return winningCombos.some(combo => {
        return combo.every(index => {
            return state.board[index] === player;

        });
    });
}





// 5. EVENT LISTENER



DOM.playAgainBtn.addEventListener('click', () => {
    state.board = ['','','','','','','','',''];
    state.currentPlayer = 'X';
    state.gameOver = false;
    state.winner = null;

    DOM.result.textContent = '';

    renderBoard();
});

