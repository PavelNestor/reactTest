import React from 'react';
import styles from './styles.module.scss';

export default function Task109() {
    const [test, setTest] = React.useState([
        {
            question: 'сто одёжек и все без застёжек',
            answer: 'капуста',
            userAnswer: '',
        },
        {
            question: 'висит груша нельзя скушать',
            answer: 'лампочка',
            userAnswer: '',
        },
        {
            question: 'я от бабушки ушёл ...',
            answer: 'колобок',
            userAnswer: '',
        },
    ]);

    const [answer, setAnswer] = React.useState();
    const [point, setPoint] = React.useState(0);
    const [isFinish, setIsFinish] = React.useState(false);

    const handleChange = event => {
        const value = event.target.value;
        const name = +event.target.name;
        
        console.log('Change-name: ', name);
        console.log('Change-value: ', value);
        
        setAnswer(value);
        
    };

    const handleClick = event => {
        const name = event.target.name;
        let newArr = test;
        newArr[point].userAnswer = answer;
        console.log('newArr', newArr);
        
        setTest(newArr);
        console.log('click-test', test);
        
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
        console.log('Click- answer: ', answer);
        console.log('Click- point: ', point);
        
        setAnswer(answer);
    };

    return (
        <div className={styles.BorderRed}>
            {isFinish ?
                <After 
                    arr={test}
                    />
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
            <input type="text" name={props.index} defaultValue='' onChange={props.onHandleChange} />
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
        <div>
            {props.arr.map((item, index) => (
                <p key={index} className={item.userAnswer === item.answer ? styles.right : styles.wrong}>
                ваш ответ {item.userAnswer},
                {item.userAnswer === item.answer  ? 'правильно!' : 'неправильно! Правильный ответ  ' + item.answer + '!'}
            </p>
            ))}
        </div>
    );
};


