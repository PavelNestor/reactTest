import React from 'react';

export default function Lesson5() {
  return (
    <div>
      <div style={{ padding: '10px' }}>--- 5.1 ----</div><div style={{ padding: '10px' }}><Lesson51 /></div>
      <div style={{ padding: '10px' }}>--- 5.2 ----</div><div style={{ padding: '10px' }}><Lesson52 /></div>
      <div style={{ padding: '10px' }}>--- 5.3 ----</div><div style={{ padding: '10px' }}><Lesson53 /></div>
      <div style={{ padding: '10px' }}>--- 5.4 ----</div><div style={{ padding: '10px' }}><Lesson54 /></div>
    </div>
  )
}

const Lesson51 = () => {
  const names = ['Коля', 'Вася', 'Петя', 'Иван', 'Дима'];
  const list = names.map((name, index) =>
    <li key={index}>{name} </li>
  )
  return <ul>
    {list}
  </ul>
};

const Lesson52 = () => {
  const [names, setNames] = React.useState(['Коля', 'Вася', 'Петя', 'Иван', 'Дима']);
  const addName = () => setNames(names.concat(['пункт']));
  return <div>
    <ul>
      {names.map((name, index) =>
        <li key={index}>{name} </li>)}
    </ul>
    <button onClick={addName}>add</button>
  </div>
};

const Lesson53 = () => {
  const [names, setNames] = React.useState(['Коля', 'Вася', 'Петя', 'Иван', 'Дима']);
  const removeName = () => setNames(names.slice(0, -1))
  return <div>
    <ul>
      {names.map((name, index) =>
        <li key={index}>{name} </li>)}
    </ul>
    <button onClick={removeName}>remove name</button>
  </div>
};

const Lesson54 = () => {
  const [names, setNames] = React.useState(['Коля', 'Вася', 'Петя', 'Иван', 'Дима']);
  const removeName = index => {
    names.splice(index, 1);
    setNames(names.concat());
  }

  return (
    <div>
      <ul>
        {names.map((name, index) =>
          <li key={index}>{name} <button onClick={() => removeName(index)}>del</button></li>)}
      </ul>
    </div>
  )
};