import React from 'react';
import json_data from './data/data8';


export default function Lesson8() {

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ border: '1px dotted grey' }}><h2 >Задачи для решения</h2></div>
      {[Lesson81, Lesson82, Lesson83, Lesson84, Lesson85].map((Comp, index) => {
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
      <hr/>
      <div>
        <strong>{json_data[props.num].header}</strong>
        <br />
        {json_data[props.num].text}
      </div>
    </div>
  );
};

const Lesson81 = () => {

  const [users, setUsers] = React.useState([
    { name: 'Коля', isCross: false },
    { name: 'Вася', isCross: false },
    { name: 'Петя', isCross: false },
    { name: 'Дима', isCross: false },
  ]);
  const crossName = index => {
    users[index].isCross = !users[index].isCross
    setUsers(users.concat());
  }
  const css = users.isCross ? 'line-through' : 'none';

  return (
    <div>
      <ul>
        {users.map((users, index) =>
          <li key={index} style={{ textDecoration: css }}>
            {users.name}
            <input type='checkbox' onClick={() => crossName(index)} />
          </li>)}
      </ul>
    </div>
  )
};

const Lesson82 = () => {

  const [workers, setWorkers] = React.useState([
    { name: 'Коля', surname: 'Колин', salary: 1000, isCheck: true },
    { name: 'Вася', surname: 'Васин', salary: 1000, isCheck: true },
    { name: 'Петя', surname: 'Петин', salary: 1000, isCheck: true },
    { name: 'Дима', surname: 'Димын', salary: 1000, isCheck: true },
  ]);

  const sum = () => {
    return (workers.reduce((sum, item) => {
      if (item.isCheck) {
        return sum += item.salary;
      } return sum + 0;
    }, 0)
    )
  };

  const [total, setTotal] = React.useState(sum());

  const checkUsers = index => {
    workers[index].isCheck = !workers[index].isCheck;
    setWorkers(workers.concat());
    setTotal(sum());
  };

  return (
    <div>
      <table>
        <tbody>
          {workers.map((workers, index) =>
            <tr key={index}>
              <td>{workers.name}</td>
              <td>{workers.surname}</td>
              <td>{workers.salary}</td>
              <td>
                <input type='checkbox' checked={workers.isCheck} onChange={() => checkUsers(index)} />
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <p>{total}</p>
    </div>
  )
};

const Lesson83 = () => {
  const [users, setUsers] = React.useState([
    { name: 'Коля', isShow: true },
    { name: 'Вася', isShow: true },
    { name: 'Петя', isShow: true },
    { name: 'Дима', isShow: true },
  ]);

  const handleChecked = index => {
    users[index].isShow = !users[index].isShow
    setUsers(users.concat());
  };

  return (
    <div>
        {users.map((users, index) =>
          <div key={index} >
            <input type='checkbox' checked={users.isShow} onChange={() => handleChecked(index)} />
            <br/>
            <p hidden={!users.isShow}>{users.name}</p>
          </div>)}
    </div>
  )
};

const Lesson84 = () => {
  const [users, setUsers] = React.useState([
    {name: 'Коля', surname: 'Иванов', age: 30, isCheck: false},
		{name: 'Вася', surname: 'Петров', age: 40, isCheck: false},
		{name: 'Петя', surname: 'Сидоров', age: 50, isCheck: false},
  ]);

  const handleChecked = index => {
    users[index].isCheck = !users[index].isCheck
    setUsers(users.concat());
  };

  return (
    <div>
      <ul>
        {users.map((user, index) =>
          <li key={index}>
            {user.isCheck ? user.name + ' ' + user.surname + ' ' + user.age : user.name}
            <input type='checkbox' onChange={() => handleChecked(index)} />
          </li>)}
      </ul>
    </div>
  )
};

const Lesson85 = () => {
  const [users, setUsers] = React.useState([
    {name: 'Коля', isCheck: false},
		{name: 'Вася', isCheck: false},
		{name: 'Петя', isCheck: false},
  ]);

  const handleChange = (event, index) => {
    users[index].name = event.target.value;
    console.log(users);
    
    setUsers(users.concat());
  };
  
  const handleBlur = (event, index) => {
    users[index].name = event.target.value;
    users[index].isCheck = !users[index].isCheck;
    setUsers(users.concat());
  };

  const handleClick = (index) => {
    users[index].isCheck = !users[index].isCheck;
    setUsers(users.concat());
  };

  return (
    <div>
      <ul>
        {users.map((user, index) =>(
          <li key={index} style={{display: 'flex'}}>
            {user.isCheck? <input type='text' value={user.name} onBlur={(event) => handleBlur(event, index)} onChange={(event) => handleChange(event, index)}/> : ''}
            <div onClick={() => handleClick(index)}> {user.name}</div>
          </li>))}
      </ul>
    </div>
  )
};