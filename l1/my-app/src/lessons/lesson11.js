import React from 'react';
import json_data from './data/data11';
import styles from './styles.module.scss';
import Task112 from './task112';
import Task113 from './task113';
import Task114 from './task114';
import Task115 from './task115';
import Task116 from './task116';
import Task117 from './task117';
import Task118 from './task118';


export default function Lesson11() {

    return (
        <div style={{ textAlign: 'center' }}>
            <div style={{ border: '1px dotted grey' }}>
                <h2 >Практика по фреймворку React</h2>
                <h3>Задачи для решения</h3>
            </div>
            {[Lesson111, Lesson112, Lesson113, Lesson114, Lesson115, Lesson116, Lesson117,
                Lesson118].map((Comp, index) => {
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

const Lesson111 = () => {
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


const Lesson112 = () => {
    return (
        <Task112 />
    );
};

const Lesson113 = () => {
    return (
        <Task113 />
    );
};

const Lesson114 = () => {
    return (
        <Task114 />
    );
};

const Lesson115 = () => {
    return (
        <Task115 />
    );
};

const Lesson116 = () => {
    return (
        <Task116 />
    );
};

const Lesson117 = () => {
    return (
        <Task117 />
    );
};

const Lesson118 = () => {
    return (
        <Task118 />
    );
};