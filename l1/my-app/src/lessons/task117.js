import React from 'react';
import styles from './styles.module.scss';

export default function Task117() {
  const [date, setDate] = React.useState(new Date());
  const [tasks, setTasks] = React.useState([
    { name: 'task1', isDone: false },
  ]);

  const handleRemove = num => {
    const newArr = tasks.slice();
    newArr.splice(num, 1);
    setTasks(newArr.concat())
  };

  const handleAdd = (event, newTask) => {
    setTasks(tasks.concat(newTask));
    event.preventDefault();
    event.target.reset();
  };

  const handleChecked = index => {
    const newArr = tasks.slice();
    newArr[index].isDone = !newArr[index].isDone;
    setTasks(newArr.concat());
  };

  const view = tasks.map((item, index) =>
    <Task
      key={index}
      name={item.name}
      index={index}
      onHandleRemove={handleRemove}
      isDone={item.isDone}
      onHandleChecked={handleChecked}
    />);

  return (
    <div className={styles.dFlex}>
      <Calendar
        date={date}
      />
      <table className={styles.table}>
        <thead>
          <tr >
            <th>Задача</th>
            <th>Is Done?</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          <AddTask
            onHandleAdd={handleAdd} />
          {view}
        </tbody>
      </table>
    </div>
  );
}


const Task = props => {

  return (
    <tr>
      <td className={props.isDone ? styles.decorationThrough : styles.decorationNone}>{props.name}</td>
      <td><input type="checkbox" name={props.index} checked={props.isDone}
        onChange={() => props.onHandleChecked(props.index)} /></td>
      <td><button onClick={() => props.onHandleRemove(props.index)}>remove</button></td>
    </tr>
  );
};

const AddTask = props => {
  const [task, setTask] = React.useState({
    name: '',
    isDone: false,
  });

  const handleChange = event => {
    const value = event.target.value;
    setTask(Object.assign({}, task, { name: value }));
  };

  return (
    <tr>
      <td colSpan={3}>
        <form onSubmit={(event) => props.onHandleAdd(event, task)}>
          <input type='text' name='name' onChange={handleChange} />
          <input type='submit' value='add' />
        </form>
      </td>
    </tr>
  );
};


// Component Calendar -- START --
const Calendar = props => {
  const date = props.date;

  const nav = (
    <tr>
      <th>
        <button>{'<<'}</button>
      </th>
      <th colSpan={5}>
        <span className='month'>{date.toLocaleDateString("en-US", { month: 'long' })}</span>
        <span className='year'>{date.toLocaleDateString("en-US", { year: 'numeric' })}</span>
      </th>
      <th>
        <button>{'>>'}</button>
      </th>
    </tr>
  );

  const getMonday = date => {
    date = new Date(date);
    var day = date.getDay(),
      diff = date.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(date.setDate(diff));
  };

  const getDaysOfWeek = () => {
    let days = [];
    let monday = getMonday(date);
    for (let index = 0; index < 7; index++) {
      days.push(monday.toLocaleDateString('en-US', { weekday: 'short' }));
      monday = new Date(monday.valueOf() + 24 * 60 * 60 * 1000);
    }
    return days;
  };

  const daysOfWeek = (
    <tr>
      {getDaysOfWeek().map((item, index) => (
        <th key={index}>{item}</th>
      ))}
    </tr>
  );


  return (
    <table>
      <thead>
        {nav}
      </thead>
      <thead>
        {daysOfWeek}
      </thead>

      <CreateCalendar
        date={date}
      />

    </table>
  );
}
// Component Calendar -- END --


const getDaysOfMonth = (date) => {
  let result = [];
  let newDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const lastDate = newDate.getDate();

  for (let i = 0; i < lastDate; i++) {
    result.push(i);
  }
  return result;
};

// Component Calendar -- START --
const CreateCalendar = props => {
  const date = props.date;
  let year = date.getFullYear();
  let month = date.getMonth();
  let d = new Date(year, month);
  const deysBefore = getDay(d);
  const deysAfter = 5 - getDay(d);

  const fillDaysArr = () => {
    let result = [];
    for (let i = 0; i < deysBefore; i++) {
      result.push('');
    }

    for (let i = 0; i < getDaysOfMonth(date).length; i++) {
      result.push(i + 1);
    };

    for (let i = 0; i < deysAfter; i++) {
      result.push('');
    };
    return result;
  };

  const arrRow = () => {
    const count = Math.ceil(fillDaysArr().length / 7);
    let result = new Array(count);
    const shift = 7;

    for (let i = 0; i < count; i++) {
      let start = shift * i;
      let end = shift + start;
      result.push(fillDaysArr().slice(start, end));
    };

    return result;
  };

  return (
    <tbody>
      {arrRow().map((item, index) => (
        <TableRow
          key={index}
          row={item}
        />
      ))}
    </tbody>
  );
};
// Component Calendar -- END --

function getDay(date) {
  var day = date.getDay();
  if (day === 0) day = 7;
  return day - 1;
};
// Component Calendar -- END --

// Component TAbleRow -- START --
const TableRow = props => {
  return (
    <tr>
      {props.row.map((item, index) => (
        <td key={index}>{item}</td>
      ))}
    </tr>
  );
};
// Component TAbleRow -- END --