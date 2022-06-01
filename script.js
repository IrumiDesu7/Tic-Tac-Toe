const gameBoard = (() => {
  let _board = new Array(9);

  const add = (position, symbol) => {
    _board = _board.splice(position, 0, symbol);
    return _board;
  };

  return { _board, add };
})();

const Player = (name, symbol) => {
  return { name, symbol };
};
