import React from 'react';
import styles from './styles.module.scss';

export default function Task112() {
    const [test, setTest] = React.useState([
        {
            question: 'сто одёжек и все без застёжек',
            answer: 'капуста',
            isAnswered: false,
        },
        {
            question: 'висит груша нельзя скушать',
            answer: 'лампочка',
            isAnswered: false,
        },
        {
            question: 'я от бабушки ушёл ...',
            answer: 'колобок',
            isAnswered: false,
        },
    ]);

    const [answer, setAnswer] = React.useState({});

    const handleChange = event => {
        const value = event.target.value;
        const name = event.target.name;

        setAnswer(Object.assign({}, answer, { [name]: value }));
    }

    const handleClick = event => {
        test[event.target.name].isAnswered = !test[event.target.name].isAnswered;
        setTest(test.concat());
    }

    return (
        <div className={styles.BorderRed}>
            {test.map((item, index) => (
                <div key={index}>
                    <p>{item.question}</p>
                   { item.isAnswered
                        ?
                        <After 
                            text={answer[index]}
                            isRight={answer[index] === item.answer}
                            answer={item.answer}
                        />
                        :
                        <Before 
                            index={index}
                            onHandleChange={handleChange}
                            onHandleClick={handleClick}
                        /> 
                        }
                </div>
            ))}
        </div>
    );
};

const Before = props => {
    return (
        <div>
            <input type="text" name={props.index} onChange={props.onHandleChange} />
            <button onClick={props.onHandleClick} name={props.index}>сдать тест</button>
        </div>
    );
};

const After = props => {
    return (
        <p className={props.isRight ? styles.right : styles.wrong}>
            ваш ответ {props.text}, {props.isRight ? 'правильно!' : 'неправильно! Правильный ответ  ' + props.answer + '!'}
        </p>
    );
};


