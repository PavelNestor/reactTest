import React from 'react';

export default function Lesson2() {
  return (
  <div>
    {'--- 1.1 ----'}
    <Lesson11/>
    {'--- 1.2 ----'}
    <Lesson12/>
    {'--- 1.3 ----'}
    <Lesson13/>
    {'--- 1.4 ----'}
    <Lesson14/>
    {'--- 1.5 ----'}
    <Lesson15/>
    {'--- 1.6 ----'}
    <Lesson16/>
    {'--- 1.7 ----'}
    <Lesson17/>
    {'--- 1.8 ----'}
    <Lesson18/>
    {'--- 1.9 ----'}
    <Lesson19/>
    {'--- 1.10 ----'}
    <Lesson110/>
    {'--- 1.11 ----'}
    <Lesson111/>
    </div>
  )
}

function Lesson11 () {
  return (<div>
    текст
</div>);
}

function Lesson12 () {
  const result = 'text';
  return (<div>{result}</div>);
}

const Lesson13 = () => {
  const text = <p>текст</p>;
  return (
    <div>
      {text}
    </div>
  )
};

const Lesson14 = () => {
  const text1 = <p>текст1</p>;
  const text2 = <p>текст2</p>;
  return (
    <div>
      {text1}
        <p>!!!</p>
      {text2}
    </div>
  )
};

const Lesson15 = () => {
  const attr = 'block';
  const text = "текст";
  return (
    <div id={attr}>
      {text}
    </div>
  )
};

const Lesson16 = () => {
  const str = 'block';
  const text = "текст";
  return (
    <div className={str}>
      {text}
    </div>
  )
};

const Lesson17 = () => {
  const css = {
    color: 'green',
    border: '1px solid black',
    borderRadius: '30px'
  };
  return (
    <div style={css}>
      text
    </div>
  )
};

const Lesson18 = () => {
  const show = true;
  var text = 'text2';
  

      if (show) {
        text = 'text 1';
      } 
      return (
        <div>
          {text}
        </div>);
};

const Lesson19 = () => {
  const arr = ['a', 'b', 'c', 'd', 'e'];
  const list = arr.map((item, index) =>
    <li key={index}>{item}</li>
  )
      return (
        <ul>
          {list}
        </ul>);
};

const Lesson110 = () => {
  const getText = () => {
    return <p>text</p>;
  }

  return getText();
};

const Lesson111 = () => {
  const getNum1 = () => 1;
  const getNum2 = () => 2;
  const sum = (x, y) => x + y;
  const result = sum(getNum1(), getNum2());
  return (
    <div>  {'text ' + result}</div>
    );
};