import React from 'react';
import styles from './../styles.module.scss';
import attackStrategy from './atackStratgy';


export default function Task119() {

  return (
    <div className={styles.dFlex}>
      <Game />
    </div>
  );
};

const Square = props => {
  const value = props.value;
  const flag = props.flag;

  const chooseColor = value => {
    if (value === 1 && !flag) {
      return styles.cellGreen;
    } else if (value === 2) {
      return styles.cellRed;
    } else if (value === 3) {
      return styles.cellBlue;
    };
  };
  const enemy = (
    <button
      className={chooseColor(value)}
      onClick={props.onClick}>
    </button>
  )
  const my = (
    <button
      className={chooseColor(value)}>
    </button>
  )
  return (
    flag ? enemy : my
  );
};

const Board = props => {
  const ships = props.ships;

  return (
    <tbody>
      {ships.map((itemRow, indexRow) => (
        <tr key={indexRow}>
          {itemRow.map((itemCol, indexCol) => (
            <td key={`${indexRow} + ${indexCol}`}>
              {<Square
                value={itemCol}
                onClick={() => props.onClick(`${indexRow} ${indexCol}`)}
                flag={props.flag}
              />}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

// 0 - my empty
// 1 - my ship
// 2 - my hurt
// 3 - my slip
const Game = () => {
  const [myShips, setMyShips] = React.useState([
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
    [0, 1, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 1, 0, 0, 0, 1, 0, 0],
    [1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  ]);

  const [enemyShips, setEnemyShips] = React.useState([
    [0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 0, 1, 0, 0, 1, 1],
    [0, 1, 0, 1, 0, 1, 0, 0, 0, 0],
    [0, 1, 0, 1, 0, 1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);


  const handleClick = index => {
    const coord = index.split(' ');

    const newEnemyShips = enemyShips.slice();
    let cell = newEnemyShips[coord[0]][coord[1]];
    if (cell === 0) {
      cell = 3;
      setMyShips(enemyAtack(myShips));
    } else if (cell === 1) {
      cell = 2;
    }
    newEnemyShips[coord[0]][coord[1]] = cell;
    setEnemyShips(newEnemyShips);

    if (!checkForShips(myShips, 1)) {
      alert('You LOSE!');
    };
    if (!checkForShips(enemyShips, 1)) {
      alert('You WIN!');
    };
  };

  return (
    <div className={styles.dFlex}>
      <table className={styles.battleTable}>
        <Board
          ships={myShips}
          flag={false}
        />
      </table>
      <table className={styles.battleTable}>
        <Board
          ships={enemyShips}
          onClick={handleClick}
          flag={true}
        />
      </table>
    </div>
  );
};

function fillMatrix (y, x) {
  for (let index = y - 1; index <= y + 1; index++){
    for (let innerIndex = x - 1; innerIndex <= x + 1; innerIndex++) {
      if (matrix[index][innerIndex] = 0) {
        continue;
      } else {
        matrix[index][innerIndex] += matrix[index][innerIndex];
      };
    };
  };
};

const matrix = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 1,],
  [1, 2, 3, 3, 3, 3, 3, 3, 2, 1,],
  [1, 2, 3, 4, 4, 4, 4, 3, 2, 1,],
  [1, 2, 3, 4, 5, 5, 4, 3, 2, 1,],
  [1, 2, 3, 4, 5, 5, 4, 3, 2, 1,],
  [1, 2, 3, 4, 4, 4, 4, 3, 2, 1,],
  [1, 2, 3, 3, 3, 3, 3, 3, 2, 1,],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 1,],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
];

function enemyAtack(array) {

  const newArr = array.slice();

  while (true) {
    const variant = attackStrategy(matrix);
    const y = variant[0];
    const x = variant[1];
    const field = newArr[y][x];
    if (field === 0) {
      newArr[y][x] = 3;
      matrix[y][x] = 0;
      break;
    } else if (field === 1) {
      newArr[y][x] = 2;
      fillMatrix(y, x);
    } else if (field === 3 || field === 2) {
      continue;
    }
  };
  return newArr;
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export function find(array, value) {
  const index = array.indexOf(value);
  return index === -1 ? null : array[index];
};

export function checkForShips(array, value) {
  let result = [];
  for (let index = 0; index < array.length; index++) {
    result = result.concat(array[index]);
  };
  const i = result.indexOf(value);
  return i === -1 ? null : i;
};
