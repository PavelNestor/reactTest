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

const Board = props => {
  function renderSquare(index) {
    return (
      <Square
        value={props.squares[index]}
        onClick={() => props.onClick(index)}
      />);
  };

  return (
    <div>
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
  // const [squares, setSquares] = React.useState();
  const [xIsNext, setXIsNext] = React.useState(true);
  const [stepNumber, setStepNumber] = React.useState(0);
  const [history, setHistory] = React.useState([{
    squares: Array(9).fill(null),
  }]);

  const handleClick = index => {
    const newHistory = history.slice(0, stepNumber + 1);
    const current = newHistory[newHistory.length - 1];
    const newSquares = current.squares.slice();
    if (calculateWinner(newSquares) || newSquares[index]) {
      return;
    }
    newSquares[index] = xIsNext ? 'X' : 'O';
    setHistory(history.concat([{squares: newSquares}]));
    setStepNumber(history.length);
    setXIsNext(!xIsNext);
  };

  const jumpTo = step => {
    setStepNumber(step);
    setXIsNext((step % 2) === 0);
  };
  
  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);
  const moves = history.map((step, move) => {
    const desc = move ?
      'move to # ' + move :
      'move to start';
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  let status;
  if (winner) {
    status = 'Winner ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O')
  }

  return (
    <div className={styles.game}>
      <div className={styles.gameBoard}>
        <Board
          squares={current.squares}
          onClick={index => handleClick(index)}
        />
      </div>
      <div className={styles.gameInfo}>
        <div>{status}</div>
        <ol>{moves}</ol>
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