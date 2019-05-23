import React from 'react';

export default function Lesson4() {
  return (
    <div>
      <div style={{ padding: '10px' }}>--- 4.1 ----</div><div style={{ padding: '10px' }}><Lesson41 /></div>
      <div style={{ padding: '10px' }}>--- 4.2 + 4.3 ----</div><div style={{ padding: '10px' }}><Lesson42 /></div>
      <div style={{ padding: '10px' }}>--- 4.4 ----</div><div style={{ padding: '10px' }}><Lesson44 /></div>
      <div style={{ padding: '10px' }}>--- 4.5 ----</div><div style={{ padding: '10px' }}><Lesson45 /></div>
      <div style={{ padding: '10px' }}>--- 4.6 ----</div><div style={{ padding: '10px' }}><Lesson46 /></div>
      <div style={{ padding: '10px' }}>--- 4.7 ----</div><div style={{ padding: '10px' }}><Lesson47 /></div>
    </div>
  )
}

const Lesson41 = () => {
  const state = { show: true, name: 'Иван' };
  const [show] = React.useState(state.show);
  return (
    <p>
      {show ? 'Привет ' : 'Пока '}
      {state.name}
    </p>
  );
};

const Lesson42 = () => {
  const state = { show: true, name: 'Иван', age: 25 };
  const [show, setShow] = React.useState(state.show);
  const showText = () => {
    setShow(!show);
  };
  return (
    <div>
      <p>
        {show ? 'имя: ' + state.name + ', возраст ' + state.age : ' '}
      </p>
      <button onClick={showText}>нажми на меня</button>
    </div>
  );
};

const Lesson44 = () => {
  const state = { show: true, name: 'Иван', age: 25 };
  const [show, setShow] = React.useState(state.show);
  const showText = () => {
    setShow(!show);
  };
  return (
    <div>
      <p>
        {show ? 'имя: ' + state.name + ', возраст ' + state.age : ' '}
      </p>
      <button onClick={showText}>{show ? 'Скрыть текст' : 'Показать текст'}</button>
    </div>
  );
};

const Lesson45 = () => {
  const names = ['Коля', 'Вася', 'Петя'];
  const list = names.map((name, index) => 
    <li key={index}>{name}</li>
  )
  return <ul>
    {list}
  </ul>
};

const Lesson46 = () => {
  const names = ['Коля', 'Вася', 'Петя'];
  const list = names.map((name, index) => 
    <li key={index}>{name + ' - ' + (index+1)} </li>
  )
  return <ul>
    {list}
  </ul>
};

const Lesson47 = () => {
  const hrefs = [
		{href: '1.html', text: 'ссылка 1'},
		{href: '2.html', text: 'ссылка 2'},
		{href: '3.html', text: 'ссылка 3'},
	]
  const list = hrefs.map((item, index) => 
    <li  key={index}><a href={item.href}>{item.text}</a></li>
  )
  return <ul>
    {list}
  </ul>
};