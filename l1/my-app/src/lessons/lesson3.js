import React from 'react';

export default function Lesson3() {
  return (
    <div>
      <div style={{ padding: '10px' }}>--- 2.1 ----</div><div style={{ padding: '10px' }}><Lesson21 /></div>
      <div style={{ padding: '10px' }}>--- 2.2 ----</div><div style={{ padding: '10px' }}><Lesson22 /></div>
      <div style={{ padding: '10px' }}>--- 2.3 ----</div><div style={{ padding: '10px' }}><Lesson23 /></div>
      <div style={{ padding: '10px' }}>--- 2.4 ----</div><div style={{ padding: '10px' }}><Lesson24 /></div>
    </div>
  )
}

const Lesson21 = () => {
  const state = { name: 'Иван', age: 25 };
  return (
    <>{'имя: ' + state.name + ', возраст: ' + state.age}</>
  );
};

const Lesson22 = () => {
  const showMessage = () => alert('hello');

  return (
    <button onClick={showMessage}>PRESS</button>
  )
};

const Lesson23 = () => {
  const state = { name: 'Иван', age: 25 };
  const showMessage = () => alert(state.name);
  return (
    <button onClick={showMessage}>PRESS</button>
  );
};

const Lesson24 = () => {
  let state = { name: 'Иван', age: 25 };
  const [name, setName] = React.useState(state.name);
  const [age, setAge] = React.useState(state.age);
  const handleClick = () => {
    setName('Коля');
    setAge(30);
  };
  
  return (
    <div>
      <>{'имя: ' + name + ', возраст: ' + age}</>
      {<button onClick={handleClick}>Change</button>}
    </div >
  );

};