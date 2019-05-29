import React from 'react';
import json_data from './data/data11';
import styles from './styles.module.scss';

export default function Lesson11() {

    return (
        <div style={{ textAlign: 'center' }}>
            <div style={{ border: '1px dotted grey' }}>
                <h2 >Практика по фреймворку React</h2>
                <h3>Задачи для решения</h3>
            </div>
            {[Lesson111].map((Comp, index) => {
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
            <td>{props.workDays}</td>
            <td>{props.rate}</td>
            <td>{props.rate * props.workDays}</td>
        </tr>
    );
};

const Sum = (props) => {
    console.log(props.array);
    
    return (
        <h5 className={styles.norm}>ВСЕГО: {props.array.reduce((sum, current) => {
            return sum + current;
          }, 0)}</h5>
    );
  };

const Lesson111 = () => {
    const [users] = React.useState([
        { name: 'Коля', surname: 'Колин', workDays: 20, rate: 7 },
        { name: 'Вася', surname: 'Васин', workDays: 30, rate: 7 },
        { name: 'Петя', surname: 'Петин', workDays: 35, rate: 7 },
        { name: 'Дима', surname: 'Димын', workDays: 25, rate: 7 },
        { name: 'Джони', surname: 'Волкер', workDays: 55, rate: 7 },
    ]);

    const [total, setTotal] = React.useState(1000);

    const view = users.map((item, index) =>
        <Users
            key={index}
            name={item.name}
            surname={item.surname}
            workDays={item.workDays}
            rate={item.rate}
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
                </tr>
            </thead>
            <tbody>
                {view}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan="5" className={styles.AlignRight}>
                        <Sum  array={users.map(item => item.rate*item.workDays)}/>
                    </td>
                </tr>
            </tfoot>
        </table>
    )
};