import React from 'react';
import styles from './styles.module.scss';

export default function Task116() {
    const [users, setUsers] = React.useState([
        { name: 'Коля', link: 'edit' },
        { name: 'Вася', link: 'edit' },
        { name: 'Петя', link: 'edit' },
        { name: 'Дима', link: 'edit' },
        { name: 'Джони', link: 'edit' },
    ]);

    const handleEdit = (value, index) => {
            users[index].name = value;
            setUsers(users.concat());
    };

    const view = users.map((item, index) =>
        <Users
            key={index}
            name={item.name}
            onEdit={handleEdit}
            index={index}
            link={item.link}
        />);

    return (
        <ol className={styles.rounded}>
            {view}
        </ol>
    );
}


const Users = (props) => {

    const [name, setName] = React.useState(props.name);
    const [isShow, setIsShow] = React.useState(false);

    const handleChange = event => {
        const value = event.target.value;
        
        props.onEdit(value, props.index)
        setName(value);
    };

    

    const handleClick = () => {
        setIsShow(!isShow);
    };

    const handleBlur = () => {
        setIsShow(!isShow);
    };

    return (
        <li>
            <p className={isShow ? styles.displayNone : styles.displayInline}>{props.name}
                <button onClick={handleClick}>{props.link}</button>
            </p>
            <input type="text" value={name} onChange={handleChange} name='name' 
                className={isShow ? styles.displayInline : styles.displayNone} onBlur={handleBlur}/>
        </li>
    );
};

