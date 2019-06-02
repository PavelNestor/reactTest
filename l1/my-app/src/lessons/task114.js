import React from 'react';
import styles from './styles.module.scss';

export default function Task114() {
  const [test, setTest] = React.useState([
    {
      question: 'question1',
      correctAnswer: 0,
      answers: ['answer1', 'answer2', 'answer3', 'answer4'],
      userAnswer: 0,
    },
    {
      question: 'question2',
      correctAnswer: 1,
      answers: ['answer1', 'answer2', 'answer3', 'answer4'],
      userAnswer: 0,
    },
    {
      question: 'question3',
      correctAnswer: 2,
      answers: ['answer1', 'answer2', 'answer3', 'answer4'],
      userAnswer: 0,
    },
  ]);

  const [answer, setAnswer] = React.useState();
  const [point, setPoint] = React.useState(0);
  const [isFinish, setIsFinish] = React.useState(false);

  const handleChange = event => {
    const value = +event.target.value;
    
    setAnswer(value);
  };

  const handleClick = event => {
    const name = event.target.name;
    let newArr = test;
    newArr[point].userAnswer = answer;
    
    setTest(newArr);
    
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
          answers={test[point].answers}
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
      {props.answers.map((item, index) => (
        <div key={index}>
          <label htmlFor={item}>{item}</label>
          <input type="radio" name={props.question} id={item} value={index} onChange={props.onHandleChange} />
        </div>
      ))}
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
        <p key={index} className={item.userAnswer === item.correctAnswer ? styles.right : styles.wrong}>
          ваш ответ {+item.userAnswer + 1},
                {item.userAnswer === item.correctAnswer ? 'правильно!' : 'неправильно! Правильный ответ  ' + (+item.correctAnswer + 1) + '!'}
        </p>
      ))}
    </div>
  );
};


