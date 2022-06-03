const gameBoard = (function () {
  const _board = ['X', 'O', 'X', 'X', 'O', 'X', 'X', 'O', 'X'];
  return { _board };
})();

const displayController = (function () {
  let boards = document.querySelectorAll('td');
  boards = [...boards];
  const boardUpdate = (() => {
    return boards.map((item, index) => {
      return (item.textContent = gameBoard._board[index]);
    });
  })();
  return { boards };
})();
