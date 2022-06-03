const gameBoard = (function () {
  // const _bosssard = ['X', 'O', 'O', 'X', 'O', '', 'O', 'X', 'X'];
  const _board = new Array(9);

  return { _board };
})();

const player = (symbol, turn) => {
  return { symbol, turn };
};

const displayController = (function () {
  const table = document.querySelector('table');
  let boards = document.querySelectorAll('td');
  boards = [...boards];

  const ilmi = player('X', true);
  const bot = player('O', false);

  const boardUpdateHTML = () => {
    return boards.map((item, index) => {
      return (item.textContent = gameBoard._board[index]);
    });
  };

  const switchTurn = (player1, player2) => {
    let currentSymbol = '';
    if (player1.turn) {
      currentSymbol = player1.symbol;
      player2.turn = player1.turn;
      player1.turn = !player1.turn;
    } else if (player2.turn) {
      currentSymbol = player2.symbol;
      player1.turn = player2.turn;
      player2.turn = !player2.turn;
    }
    return currentSymbol;
  };

  table.addEventListener('click', (e) => {
    if (e.target.textContent.length === 0) {
      let currentPlayer = switchTurn(ilmi, bot);
      gameBoard._board.splice(e.target.id - 1, 1, currentPlayer);
      boardUpdateHTML();
    }
  });

  return { ilmi, bot, switchTurn };
})();
