import React from 'react';
import styles from './styles.module.scss';

export default function Task109() {
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
    const [point, setPoint] = React.useState(0);
    const [isFinish, setIsFinish] = React.useState(false);

    const handleChange = event => {
        const value = event.target.value;
        const name = event.target.name;

        setAnswer(Object.assign({}, answer, { [name]: value }));
    }

    const handleClick = event => {
        const name = event.target.name;
        if (name === 'next') {
            let newPoint = point + 1;
            if (newPoint >= test.length) {
                newPoint = test.length - 1;
            }
            setPoint(newPoint);
        } else if (name === 'prev') {
            let newPoint = point - 1;
            if (newPoint <= 0) {
                newPoint = 0;
            }
            setPoint(newPoint);
        } else {
            setIsFinish(!isFinish)
        }
        setAnswer();
    };

    return (
        <div className={styles.BorderRed}>
            {isFinish ?
                <After />
                :
                <Quastion
                    index={point}
                    question={test[point].question}
                    onHandleChange={handleChange}
                    onHandleClick={handleClick}
                    last={test.length - 1}
                />
            }

        </div>
    );
};

const Quastion = props => {
    return (
        <div>
            <p>{props.question}</p>
            <input type="text" name={props.index} onChange={props.onHandleChange} />
            <br />
            <button onClick={props.onHandleClick} name='prev'
                className={props.index === 0 ? styles.displayNone : styles.displayInline}>prev</button>
            <button onClick={props.onHandleClick} name='next'
                className={props.index === props.last ? styles.displayNone : styles.displayInline}>next</button>
            <button onClick={props.onHandleClick} name='check'
                className={props.index === props.last ? styles.displayInline : styles.displayNone}>check</button>
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


