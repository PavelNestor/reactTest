import React from 'react';
import styles from './styles.module.scss';

export default function Task114() {
  const [users, setUsers] = React.useState([
    { name: 'Коля', surname: 'Колин', workDays: 20, rate: 7, link: 'link' },
    { name: 'Вася', surname: 'Васин', workDays: 30, rate: 7, link: 'link' },
    { name: 'Петя', surname: 'Петин', workDays: 35, rate: 7, link: 'link' },
    { name: 'Дима', surname: 'Димын', workDays: 25, rate: 7, link: 'link' },
    { name: 'Джони', surname: 'Волкер', workDays: 55, rate: 7, link: 'link' },
]);

const handleEdit = (value, name, index) => {
    if(name === 'days') {
      users[index].workDays = value;
      setUsers(users.concat());
    };
    if(name === 'rate') {
      users[index].rate = value;
      setUsers(users.concat());
    };
  };

  const showMessage = num => {
    alert(num);
  };

const view = users.map((item, index) =>
    <Users
        key={index}
        name={item.name}
        surname={item.surname}
        workDays={item.workDays}
        rate={item.rate}
        onEdit={handleEdit}
        index={index}
        onShowMessage={showMessage}
        link={item.link}
    />);

return (
    <table className={styles.table}>
        <thead>
            <tr >
                <th>Имя</th>
                <th>Фамилия</th>
                <th>Дни</th>
                <th>Ставка</th>
                <th>Зарплата</th>
                <th>link</th>
            </tr>
        </thead>
        <tbody>
            {view}
        </tbody>
        <tfoot>
            <tr>
                <td colSpan="6" className={styles.AlignRight}>
                    <Sum array={users.map(item => item.rate * item.workDays)} />
                </td>
            </tr>
        </tfoot>
    </table>
);
}


const Users = (props) => {

  const [days, setDays] = React.useState(props.workDays);
  const [rate, setRate] = React.useState(props.rate);

  const handleChange = event => {
      const value = +event.target.value;
      const name = event.target.name;
      
      props.onEdit(value, name, props.index)
      name === 'days' ? setDays(value) : setRate(value);
  };

  return (
      <tr>
          <td>{props.name}</td>
          <td>{props.surname}</td>
          <td>
              <input type="text" value={days} onChange={handleChange} name='days' className={styles.inTable}/>
          </td>
          <td>
              <input type="text" value={rate} onChange={handleChange} name='rate' className={styles.inTable}/>
              </td>
          <td>{days * rate}</td>
          <td><button onClick={() => props.onShowMessage(props.index)}>{props.link}</button></td>
      </tr>
  );
};

const Sum = (props) => {
  return (
      <h5 className={styles.norm}>ВСЕГО: {props.array.reduce((sum, current) => {
          return sum + current;
      }, 0)}</h5>
  );
};

