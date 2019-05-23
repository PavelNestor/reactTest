import React from 'react';

export default function Lesson6() {
  return (
    <div>
      <div style={{ padding: '10px' }}>--- 6.1 На инпуты ----</div><div style={{ padding: '10px' }}><Lesson61 /></div>
      <div style={{ padding: '10px' }}>--- 6.2 ----</div><div style={{ padding: '10px' }}><Lesson62 /></div>
      <div style={{ padding: '10px' }}>--- 6.3 ----</div><div style={{ padding: '10px' }}><Lesson63 /></div>
      <div style={{ padding: '10px' }}>--- 6.4 ----</div><div style={{ padding: '10px' }}><Lesson64 /></div>
      <div style={{ padding: '10px' }}>--- 6.5 На submit----</div><div style={{ padding: '10px' }}><Lesson65 /></div>
      <div style={{ padding: '10px' }}>--- 6.6 ----</div><div style={{ padding: '10px' }}><Lesson66 /></div>
      <div style={{ padding: '10px' }}>--- 6.7 ----</div><div style={{ padding: '10px' }}><Lesson67 /></div>
      <div style={{ padding: '10px' }}>--- 6.8 На формы + массивы ----</div><div style={{ padding: '10px' }}><Lesson68 /></div>
    </div>
  )
}

const Lesson61 = () => {
  const [value, setValue] = React.useState("text");
  const changeValue = (event) => setValue(event.target.value)
  return <div>
    <p>{value}</p>
    <input type="text" onChange={changeValue} />
  </div>
};

const Lesson62 = () => {
  const [value, setValue] = React.useState("text");
  const changeValue = (event) => setValue(event.target.value)
  return <div>
    <p>{value.toUpperCase()}</p>
    <input type="text" onChange={changeValue} />
  </div>
};

const Lesson63 = () => {
  const [value, setValue] = React.useState(2019);
  const changeValue = (event) => setValue(2019 - event.target.value)
  return <div>
    <p>{value}</p>
    <input type="text" onChange={changeValue} />
  </div>
};

const Lesson64 = () => {
  const [value, setValue] = React.useState(2019);
  const changeValue = (event) => setValue(event.target.value.split(' '))
  return (
    <div>
      <p>{value[0]}</p>
      <p>{value[1]}</p>
      <p>{value[2]}</p>
      <input type="text" onChange={changeValue} />
    </div>
  )
};

const Lesson65 = () => {
  const [value, setValue] = React.useState('');
  const changeValue = event => setValue(event.target.value);
  const handleSubmit = () => setValue(value);
  return (
    <form onSubmit={handleSubmit}>
      <p>{value}</p>
      <input type="text" onChange={changeValue} />
      <input type="submit" />
    </form>
  )
};

const Lesson66 = () => {
  const [value, setValue] = React.useState('');
  const [firstNumber, setFirstNumber] = React.useState(0);
  const [secondNumber, setSecondNumber] = React.useState(0);
  const changeValueOne = event => setFirstNumber(parseInt(event.target.value));
  const changeValueTwo = event => setSecondNumber(parseInt(event.target.value));
  const handleSubmit = event => {
    setValue(firstNumber + secondNumber);
    event.preventDefault();
  }
  return <div>
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={changeValueOne} />
      <input type="text" onChange={changeValueTwo} />
      <input type="submit" />
    </form>
    <p>{value}</p>
  </div>
};

const Lesson67 = () => {
  const [value, setValue] = React.useState('');
  const [one, setOne] = React.useState('');
  const [two, setTwo] = React.useState('');
  const [three, setThree] = React.useState('');
  
  const changeValueOne = event => setOne(event.target.value);
  const changeValueTwo = event => setTwo(event.target.value);
  const changeValueThree = event => setThree(event.target.value);
  const handleSubmit = event => {
    setValue(one + ' ' + two + ' ' + three);
    event.preventDefault();
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input type="text" onChange={changeValueOne} />
      <input type="text" onChange={changeValueTwo} />
      <input type="text" onChange={changeValueThree} />
      <input type="submit" />
    </form>
    <p>{value}</p>
    </div>
  )
};

const Lesson68 = () => {
  
  return (
    0
  )
};