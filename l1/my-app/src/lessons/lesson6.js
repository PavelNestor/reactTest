import React from 'react';

export default function Lesson6() {
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ border: '1px dotted grey' }}><h2 >Задачи для решения</h2></div>
      {/* start */}
      <div style={{ padding: '10px' }}>
        <div>
          <strong>--- 6.1 На инпуты ----</strong>
          <br />
          Дан инпут и абзац. Сделайте так, чтобы при наборе текста в инпуте он автоматически появлялся в этом абзаце.
        </div>
        <div><Lesson61 /></div>
      </div>
      {/* end */}
      {/* start */}
      <div style={{ padding: '10px' }}>
        <strong>--- 6.2 ----</strong>
        <br />
        Модифицируйте предыдущую задачу так, чтобы текст в абзац выводился в верхнем регистре.
        </div>
      <div><Lesson62 /></div>
      {/* end */}
      {/* start */}
      <div style={{ padding: '10px' }}>
        <div>
          <strong>--- 6.3 ----</strong>
          <br />
          Дан инпут и абзац. В инпут вводится возраст пользователя. Сделайте так, чтобы при наборе текста в абзаце автоматически появлялся год рождения пользователя.
        </div>
        <div><Lesson63 /></div>
      </div>
      {/* end */}
      {/* start */}
      <div style={{ padding: '10px' }}>
        <div>
          <strong>--- 6.4 ----</strong>
          <br />
          Дан инпут и 3 абзаца. В инпут вводится ФИО пользователя через пробел. Сделайте так, чтобы при наборе текста в первом абзаце появилась фамилия пользователя, во втором - имя, а в третьем - отчество.
        </div>
        <div><Lesson64 /></div>
      </div>
      {/* end */}
      {/* start */}
      <div style={{ padding: '10px' }}>
        <div>
          <strong>--- 6.5 На submit----</strong>
          <br />
          Дан инпут и кнопка submit. В инпут вводится текст. Сделайте так, чтобы по нажатию на кнопку этот текст вывелся в какой-нибудь абзац.
        </div>
        <div><Lesson65 /></div>
      </div>
      {/* end */}
      {/* start */}
      <div style={{ padding: '10px' }}>
        <div>
          <strong>--- 6.6 ----</strong>
          <br />
          Даны два инпута и кнопка. В инпуты вводятся числа. Сделайте так, чтобы по нажатию на кнопку под инпутами в какой-нибудь абзац вывелась сумма этих чисел.
        </div>
        <div><Lesson66 /></div>
      </div>
      {/* end */}
      {/* start */}
      <div style={{ padding: '10px' }}>
        <div>
          <strong>--- 6.7 ----</strong>
          <br />
          Даны 3 инпута и кнопка. В инпуты вводится имя, фамилия и отчество. Сделайте так, чтоб
        </div>
        <div><Lesson67 /></div>
      </div>
      {/* end */}
      {/* start */}
      <div style={{ padding: '10px' }}>
        <div>
          <strong>--- 6.8 На формы + массивы ----</strong>
          <br />
          Дан массив с именами пользователей. Выведите этот массив в виде списка ul. Также даны инпут и кнопка. Сделайте так, чтобы в инпут можно было ввести еще одно имя, нажать на кнопку - и это имя добавилось в конец списка ul.
        </div>
        <div><Lesson68 /></div>
      </div>
      {/* end */}
      {/* start */}
      <div style={{ padding: '5px' }}>
        <div>
          <strong>--- 6.9 ----</strong>
          <br />
          Модифицируйте предыдущую задачу так, чтобы в конце каждой li появилась кнопка для удаления этого пункта списка.
      </div>
        <div><Lesson69 /></div>
      </div>
      {/* end */}
    </div >
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
  const [value, setValue] = React.useState(0);
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
  const [value, setValue] = React.useState();
  const [names, setNames] = React.useState(['Коля', 'Вася', 'Петя', 'Иван', 'Дима']);
  const addValue = event => setValue(event.target.value);
  const handleSubmit = event => {
    setNames(names.concat([value]))
    event.preventDefault();
  }
  return (
    <div>
      <ul>
        {names.map((name, index) => <li key={index}>{name}</li>)}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={addValue} />
        <input type="submit" value="add" />
      </form>
    </div>
  )
};

const Lesson69 = () => {
  const [value, setValue] = React.useState();
  const [names, setNames] = React.useState(['Коля', 'Вася', 'Петя', 'Иван', 'Дима']);
  const addValue = event => setValue(event.target.value);
  const handleSubmit = event => {
    setNames(names.concat([value]))
    event.preventDefault();
  }
  const removeName = (index) => {
    names.splice(index, 1)
    setNames(names.concat())
  }

  return (
    <div>
      <ul>
        {names.map((name, index) => <li key={index}>{name} <button onClick={() => removeName(index)}>del</button></li>)}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={addValue} />
        <input type="submit" value="add" />
      </form>
    </div>
  )
};