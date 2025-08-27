let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;
const themeButton = document.getElementById('theme-button')

const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");

const winningCombos = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // baris
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // kolom
  [0, 4, 8], [2, 4, 6]             // diagonal
];

cells.forEach(cell => {
  cell.addEventListener("click", () => {
    const index = cell.dataset.index;
    if (board[index] === "" && gameActive) {
      board[index] = currentPlayer;
      cell.textContent = currentPlayer;
      checkWinner();
      if(gameActive){
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        statusText.textContent = `Giliran: ${currentPlayer}`;
      }
    }
  });
});

function checkWinner() {
  for (let combo of winningCombos) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      statusText.textContent = `Pemenang: ${board[a]}! `;
      gameActive = false;
      return statusText;
    }
  }
  if (!board.includes("")) {
    statusText.textContent = "Seri! ";
    gameActive = false;
    
  }

}

function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  gameActive = true;
  cells.forEach(cell => cell.textContent = "");
  statusText.textContent ="Giliran:X";
}


themeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark')
})