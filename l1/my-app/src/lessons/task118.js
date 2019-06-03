import React from 'react';
import styles from './styles.module.scss';

export default function Task118() {

  return (
    <div className={styles.BorderRed}>
      <Game />
    </div>
  );
};

const Square = props => {

  return (
    <button
      className={styles.btnSquare}
      onClick={props.onClick}>
      {props.value}
    </button>
  );
};

const Board = () => {
  const [squares, setSquares] = React.useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = React.useState(true);

  const handleClick = index => {
    const newSquares = squares.slice();
    if (calculateWinner(squares) || squares[index]) {
      return;
    }
    newSquares[index] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };
  
  function renderSquare(index) {
    return (
      <Square
        value={squares[index]}
        onClick={() => handleClick(index)}
      />);
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O')
  }

  return (
    <div>
      <div className={styles.status}>{status}</div>
      <div className={styles.boardRow}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className={styles.boardRow}>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className={styles.boardRow}>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

const Game = () => {
  return (
    <div className={styles.game}>
      <div className={styles.gameBoard}>
        <Board />
      </div>
      <div className={styles.gameInfo}>
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
};

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}