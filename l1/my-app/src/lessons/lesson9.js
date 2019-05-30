import React from 'react';
import json_data from './data/data9';


export default function Lesson9() {

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ border: '1px dotted grey' }}><h2 >Задачи для решения</h2></div>
      {[Lesson91].map((Comp, index) => {
        return (
          <div key={index}><WriteHeader num={index} /><Comp /></div>
        );
      })}
    </div >
  );
};

const WriteHeader = (props) => {
  return (
    <div style={{ padding: '10px' }}>
      <hr />
      <div>
        <strong>{json_data[props.num].header}</strong>
        <br />
        {json_data[props.num].text}
      </div>
    </div>
  );
};

const Users = (props) => {

  return (
    <p>
      Имя: {props.name}, Фамилия: {props.surname}, Возраст: {props.age}
    </p>
  );
};

const Lesson91 = () => {
  const [users] = React.useState([
    { name: 'Коля', surname: 'Колин', age: 20 },
    { name: 'Вася', surname: 'Васин', age: 30 },
    { name: 'Петя', surname: 'Петин', age: 35 },
    { name: 'Дима', surname: 'Димын', age: 25 },
    { name: 'Дима', surname: 'Димын', age: 25 },
  ]);

  const view = users.map((item, index) => 
   <Users key={index} name={item.name} surname={item.surname} age={item.age} />);
  

  return (
    <div>
      {view}
    </div>
  )
};