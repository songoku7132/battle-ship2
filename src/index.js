import _ from 'lodash';
import './style.css';

const Ship = require('./ship');
const gameBoard = require('./game-board');
const DOM = require('./DOM');
const Player = require('./Player');

const Player1ship1 = Ship(1);
const Player1ship2 = Ship(2);
const Player1ship3 = Ship(3);
const Player1ship4 = Ship(4);
const Player1ship5 = Ship(5);

const Player2ship1 = Ship(1);
const Player2ship2 = Ship(2);
const Player2ship3 = Ship(3);
const Player2ship4 = Ship(4);
const Player2ship5 = Ship(5);

const Player1 = [];
const Player2 = [];
const board1 = gameBoard(Player1);
const board2 = gameBoard(Player2);
board1.placeShip(Player1ship3, 0, 0, true);
board1.placeShip(Player1ship4, 5, 5, false);
board1.placeShip(Player1ship2, 8, 3, false);
board2.placeShip(Player2ship3, 1, 1, true);
board2.placeShip(Player2ship4, 4, 6, false);
board2.placeShip(Player2ship2, 8, 8, true);
console.log(board1.board);
console.log(board2.board);

const play = Player(board1, board2);

DOM(play, board1, board2);
