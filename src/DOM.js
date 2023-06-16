const gameBoard = require('./game-board');
// import './style.css';

function DOM(play, board1, board2) {
  const field1 = document.querySelector('.field-1');
  const field2 = document.querySelector('.field-2');

  // const areShipSunk = () => {
  //   for (let i = 0; i < board1.length; i++) {
  //     for (let j = 0; j < board1[i].length; j++) {
  //       const target = board1[i][j];
  //       console.log('awrtygawregae', target);
  //       // if (target)
  //     }
  //   }
  // };

  const action = (i, j, player) => {
    console.log(i, j);

    // console.log(board1.board[i][j]);
    // console.log(board2.board);
    play.move(i, j, player);
    const cont = document.querySelector(`.field-${player}`);
    cont.style.pointerEvents = 'none';
    if (player === '1') {
      const cont2 = document.querySelector(`.field-${2}`);
      cont2.style.pointerEvents = 'all';
      // const cell = document.getElementById(`${10 + i}-${j + 10}`);
      const cell = document.getElementById(`${i}-${j}`);
      if (board2.board[i][j] !== null) {
        cell.style.backgroundColor = 'red';
        // const arr = board2.areShipSunk();
        // if (Array.isArray(arr)) {
        //   console.log(arr);
        // }
      } else {
        cell.style.backgroundColor = 'blue';
      }
    } else if (player === '2') {
      const cont2 = document.querySelector(`.field-${1}`);
      cont2.style.pointerEvents = 'all';
      // const cell = document.getElementById(`${i}-${j}`);
      const cell = document.getElementById(`${10 + i}-${j + 10}`);
      if (board1.board[i][j] !== null) {
        cell.style.backgroundColor = 'red';
        // const arr = board1.areShipSunk();
        // if (Array.isArray(arr)) {
        //   console.log(arr);
        // }
      } else {
        cell.style.backgroundColor = 'blue';
      }
    }
  };

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const eventHandler = () => {
        action(i, j, '1');
        cell.removeEventListener('click', eventHandler);
      };
      const eventHandler2 = () => {
        action(i, j, '2');
        cell2.removeEventListener('click', eventHandler2);
      };
      const cell = document.createElement('div');
      const cell2 = document.createElement('div');
      cell.id = `${i}-${j}`;
      cell2.id = `${10 + i}-${j + 10}`;
      cell.classList.add('cells');
      cell2.classList.add('cells');
      cell.addEventListener('click', eventHandler);
      cell2.addEventListener('click', eventHandler2);
      field1.appendChild(cell);
      field2.appendChild(cell2);
    }
  }
}

module.exports = DOM;
