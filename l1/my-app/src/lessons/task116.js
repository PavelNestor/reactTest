import React from 'react';
import styles from './styles.module.scss';

export default function Task116() {
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
          <input type='submit' value='add'/>
        </form>
      </td>
    </tr>
  );
};