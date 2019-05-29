import React from 'react';
import json_data from './data/data10';
import styles from './styles.module.scss';

export default function Lesson10() {

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ border: '1px dotted grey' }}><h2 >Задачи на продвинутую работу с компонентами в React</h2></div>
      {[Lesson101].map((Comp, index) => {
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
    <tr>
      <td>{props.name}</td> 
      <td>{props.surname}</td> 
      <td>{props.age}</td>
    </tr>
  );
};

const Lesson101 = () => {
  const [users] = React.useState([
    { name: 'Коля', surname: 'Колин', age: 20 },
    { name: 'Вася', surname: 'Васин', age: 30 },
    { name: 'Петя', surname: 'Петин', age: 35 },
    { name: 'Дима', surname: 'Димын', age: 25 },
    { name: 'Джони', surname: 'Волкер', age: 55 },
  ]);

  const view = users.map((item, index) => 
   <Users key={index} name={item.name} surname={item.surname} age={item.age} />);
  

  return (
    <table className={styles.table}>
      <thead>
      <tr >
            <th>Имя</th>
            <th>Фамилия</th>
            <th>Возраст</th>
          </tr>
      </thead>
      <tbody>
      {view}
      </tbody>
    </table>
  )
};