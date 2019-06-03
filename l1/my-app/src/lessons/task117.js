import React from 'react';
import styles from './styles.module.scss';

export default function Task117() {
  const [date, setDate] = React.useState(new Date());
  const [tasks, setTasks] = React.useState({});
  
  //calendar handle
  const handleClick = event => {
    const name = event.target.name;

    const offset = name === 'prev' ? -1 : 1;
    setDate(
      new Date(date.getFullYear(), date.getMonth() + offset, date.getDate())
    );
  };

  //task date picker
  const handleDatePicker = event => {
    const choozenDate = () => {
      if (event.target.dataset.value !== '') {
        return event.target.dataset.value;
      }
    };
    setDate(new Date(date.getFullYear(), date.getMonth(), choozenDate()))
  };

  const handleEdit = (value, index) => {
    let newTasks = Object.assign({}, tasks)
    const newArr = tasks[date.toLocaleDateString()].slice();
    newArr[index].name = value;
    newTasks[date.toLocaleDateString()] = newArr;

    setTasks(newTasks);
  };

  const handleRemove = num => {
    const selectedDate = date.toLocaleDateString();
    const tasksOnSelectedDate = tasks[selectedDate];
    const newTasks = Object.assign({}, tasks);

    const arrFrom = tasksOnSelectedDate.slice(0, num);
    const arrTo = tasksOnSelectedDate.slice(num + 1);
    const newArr = arrFrom.concat(arrTo);

    newTasks[selectedDate] = newArr;

    setTasks(newTasks);
  };

  const handleAdd = (event, newTask) => {
    const selectedDate = date.toLocaleDateString();
    let newTasks = Object.assign({}, tasks);

    newTasks[selectedDate]
      ? newTasks[selectedDate].push(newTask)
      : newTasks[selectedDate] = [newTask];

    setTasks(newTasks);

    if (event) {
      event.preventDefault();
      event.target.reset();
    }
  };

  const handleChecked = index => {
    const newArr = tasks[date.toLocaleDateString()].slice();
    newArr[index].isDone = !newArr[index].isDone;
    let newTasks = Object.assign({}, tasks);
    newTasks[date.toLocaleDateString()] = newArr;
    setTasks(newTasks);
  };

  const TasksView = props => {
    const selectedDate = date.toLocaleDateString();
    const ifTasksOnSelectedDate = tasks[selectedDate];
    if (!ifTasksOnSelectedDate) {
      return (<tr><td colSpan='4'>no</td></tr>);
    }
    return tasks[selectedDate].map((item, index) =>
      <Task
        key={item.id}
        name={item.name}
        index={index}
        onHandleRemove={props.onHandleRemove}
        onHandleEdit={props.onHandleEdit}
        isDone={item.isDone}
        onHandleChecked={props.onHandleChecked}
      />);
  }

  return (
    <div className={styles.dFlex}>
      <Calendar
        date={date}
        onHandleClick={handleClick}
        onHandleDatePicker={handleDatePicker}
      />
      <table className={styles.table}>
        <thead>
          <tr >
            <th>Задача</th>
            <th>Is Done?</th>
            <th>Edit</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          <AddTask
            onHandleAdd={handleAdd} />
          <TasksView 
            onHandleRemove={handleRemove}
            onHandleEdit={handleEdit}
            onHandleChecked={handleChecked}
          />

        </tbody>
      </table>
    </div>
  );
}


const Task = props => {
  const [name, setName] = React.useState(props.name);
  const [isShow, setIsShow] = React.useState(false);

  const handleChange = event => {
    const value = event.target.value;

    
    setName(value);
  };

  const handleClick = () => {
    setIsShow(!isShow);
  };


  const handleBlur = () => {
    setIsShow(!isShow);
props.onHandleEdit(name, props.index);

  };

  return (
    <tr>
      <td className={props.isDone ? styles.decorationThrough : styles.decorationNone}>
        <p className={isShow ? styles.displayNone : styles.displayInline}>{name}</p>
        <input type="text" value={name} onChange={handleChange} name='name'
          className={isShow ? styles.displayInline : styles.displayNone} onBlur={handleBlur} />
      </td>
      <td><input type="checkbox" name={props.index} checked={props.isDone}
        onChange={() => props.onHandleChecked(props.index)} /></td>
      <td><button onClick={handleClick}>edit</button></td>
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
    setTask(Object.assign({}, task, { name: value, id: new Date().getTime() }));
  };

  return (
    <tr>
      <td colSpan={4}>
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
        <button onClick={props.onHandleClick} name='prev'>{'<<'}</button>
      </th>
      <th colSpan={5}>
        <span className='month'>{date.toLocaleDateString("en-US", { month: 'long' })}</span>
        <span className='year'>{date.toLocaleDateString("en-US", { year: 'numeric' })}</span>
      </th>
      <th>
        <button onClick={props.onHandleClick} name='next'>{'>>'}</button>
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
    <table className={styles.table}>
      <thead>
        {nav}
      </thead>
      <thead>
        {daysOfWeek}
      </thead>
      <CreateCalendar
        date={date}
        onHandleDatePicker={props.onHandleDatePicker}
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
          date={date.getDate()}
          onHandleDatePicker={props.onHandleDatePicker}
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

// Component TAbleRow -- START --
const TableRow = props => {
  return (
    <tr>
      {props.row.map((item, index) => (
        <td key={index} className={item === props.date ? styles.today : styles.cursorPointer}
          onClick={props.onHandleDatePicker} data-value={item}>{item}</td>
      ))}
    </tr>
  );
};
// Component TAbleRow -- END --