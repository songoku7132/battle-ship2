// const Ship = require('./ship');

function gameBoard(board) {
  board = [];
  const missedAttack = [];
  // const ships = [];

  for (let i = 0; i < 10; i++) {
    board[i] = Array(10).fill(null);
  }

  const placeShip = (ship, x, y, isVertical) => {
    const shipLength = ship.lenght;
    // ship.cord = [x, y];
    if (isVertical) {
      for (let i = x; i < x + shipLength; i++) {
        board[i][y] = ship;
      }
    } else {
      for (let i = y; i < y + shipLength; i++) {
        board[x][i] = ship;
      }
    }
  };

  const receiveAttack = (x, y) => {
    if (board[x][y] !== null) {
      const ship = board[x][y];
      ship.hit();
    } else {
      missedAttack.push([x, y]);
    }
  };

  const areShipSunk = () => {
    let arr = [];
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        const target = board[i][j];
        //   console.log('awrtygawregae', target);
        if (target !== null && target.isSunk === true) {
          arr.push(target);
        }
      }
    }
    // console.log('asdfasdfawf', arr);
    return arr;
  };

  const areAllShipsSunk = () => {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        const target = board[i][j];
        if (typeof target === 'object' && target !== null && !target.isSunk) {
          return false;
        }
      }
    }
    return true;
  };
  return {
    board, missedAttack, placeShip, receiveAttack, areAllShipsSunk, areShipSunk,
  };
}

module.exports = gameBoard;
