import React from 'react';
import json_data from './data/data10';
import styles from './styles.module.scss';
import Task102 from './task102';
import Task103 from './task103';
import Task104 from './task104';
import Task105 from './task105';
import Task106 from './task106';
import Task107 from './task107';
import Task108 from './task108';
import Task109 from './task109';
import Task1010 from './task1010';

export default function Lesson10() {

    return (
        <div style={{ textAlign: 'center' }}>
            <div style={{ border: '1px dotted grey' }}>
                <h2 >Практика по фреймворку React</h2>
                <h3>Задачи для решения</h3>
            </div>
            {[Lesson101, Lesson102, Lesson103, Lesson104, Lesson105, Lesson106, Lesson107,
                Lesson108, Lesson109, Lesson1010].map((Comp, index) => {
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

    const [days, setDays] = React.useState(props.workDays);
    const [rate, setRate] = React.useState(props.rate);

    const handleChange = event => {
        const value = +event.target.value;
        const name = event.target.name;

        props.onEdit(value, name, props.index)
        if (name === 'days') {
            return setDays(value)
        }
        return setRate(value);
    };

    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.surname}</td>
            <td>
                <input type="text" value={days} onChange={handleChange} name='days' className={styles.inTable} />
            </td>
            <td>
                <input type="text" value={rate} onChange={handleChange} name='rate' className={styles.inTable} />
            </td>
            <td>{days * rate}</td>
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

const Lesson101 = () => {
    const [users, setUsers] = React.useState([
        { name: 'Коля', surname: 'Колин', workDays: 20, rate: 7 },
        { name: 'Вася', surname: 'Васин', workDays: 30, rate: 7 },
        { name: 'Петя', surname: 'Петин', workDays: 35, rate: 7 },
        { name: 'Дима', surname: 'Димын', workDays: 25, rate: 7 },
        { name: 'Джони', surname: 'Волкер', workDays: 55, rate: 7 },
    ]);

    const handleEdit = (value, name, index) => {
        if (name === 'days') {
            users[index].workDays = value;
            setUsers(users.concat());
        }
        if (name === 'rate') {
            users[index].rate = value;
            setUsers(users.concat());
        }
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
                        <Sum array={users.map(item => item.rate * item.workDays)} />
                    </td>
                </tr>
            </tfoot>
        </table>
    );
};

const Lesson102 = () => {
    return (
        <Task102 />
    );
};

const Lesson103 = () => {
    return (
        <Task103 />
    );
};

const Lesson104 = () => {
    return (
        <Task104 />
    );
};

const Lesson105 = () => {
    return (
        <Task105 />
    );
};

const Lesson106 = () => {
    return (
        <Task106 />
    );
};

const Lesson107 = () => {
    return (
        <Task107 />
    );
};

const Lesson108 = () => {
    return (
        <Task108 />
    );
};

const Lesson109 = () => {
    return (
        <Task109 />
    );
};

const Lesson1010 = () => {
    return (
        <Task1010 />
    );
};