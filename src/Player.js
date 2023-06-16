function Player(board1, board2) {
  const move = (x, y, player) => {
    if (player === '2') {
      board1.receiveAttack(x, y);
      // console.log(board1.board);
      // console.log(board1.missedAttack);
      if (board1.areAllShipsSunk() === true) {
        alert('game over, player 2 is win');
      }
    } else if (player === '1') {
      board2.receiveAttack(x, y);
      // console.log(board2.board);
      // console.log(board2.missedAttack);
      if (board2.areAllShipsSunk() === true) {
        alert('game over, player 1 is win');
      }
    }
  };
  return { move };
}
module.exports = Player;
