import React from 'react';
import styles from './../styles.module.scss';

export default function Task119() {

  return (
    <div className={styles.dFlex}>
      GameLogic
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