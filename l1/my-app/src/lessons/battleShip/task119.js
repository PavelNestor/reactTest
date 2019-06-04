import React from 'react';
import styles from './../styles.module.scss';

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
    if (value === 1) {
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
    } else if (cell === 1) {
      cell = 2;
    }
    newEnemyShips[coord[0]][coord[1]] = cell;
    setEnemyShips(newEnemyShips);

    enemyAtack();
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