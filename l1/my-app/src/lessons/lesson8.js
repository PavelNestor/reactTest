import React from 'react';
import json_data from './data/data8';
import styles from './styles.module.scss';

export default function Lesson8() {

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ border: '1px dotted grey' }}><h2 >Задачи для решения</h2></div>
      {[Lesson81, Lesson82, Lesson83, Lesson84, Lesson85, Lesson86, Lesson87, Lesson88, Lesson89,
        Lesson810, Lesson811, Lesson812, Lesson813, Lesson814, Lesson815,
        Lesson816].map((Comp, index) => {
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

const Lesson81 = () => {

  const [users, setUsers] = React.useState([
    { name: 'Коля', isCross: false },
    { name: 'Вася', isCross: false },
    { name: 'Петя', isCross: false },
    { name: 'Дима', isCross: false },
  ]);
  const crossName = index => {
    users[index].isCross = !users[index].isCross
    setUsers(users.concat());
  }
  const css = users.isCross ? 'line-through' : 'none';

  return (
    <div>
      <ul>
        {users.map((users, index) =>
          <li key={index} style={{ textDecoration: css }}>
            {users.name}
            <input type='checkbox' onClick={() => crossName(index)} />
          </li>)}
      </ul>
    </div>
  )
};

const Lesson82 = () => {

  const [workers, setWorkers] = React.useState([
    { name: 'Коля', surname: 'Колин', salary: 1000, isCheck: true },
    { name: 'Вася', surname: 'Васин', salary: 1000, isCheck: true },
    { name: 'Петя', surname: 'Петин', salary: 1000, isCheck: true },
    { name: 'Дима', surname: 'Димын', salary: 1000, isCheck: true },
  ]);

  const sum = () => {
    return (workers.reduce((sum, item) => {
      if (item.isCheck) {
        return sum += item.salary;
      } return sum + 0;
    }, 0)
    )
  };

  const [total, setTotal] = React.useState(sum());

  const checkUsers = index => {
    workers[index].isCheck = !workers[index].isCheck;
    setWorkers(workers.concat());
    setTotal(sum());
  };

  return (
    <div>
      <table>
        <tbody>
          {workers.map((workers, index) =>
            <tr key={index}>
              <td>{workers.name}</td>
              <td>{workers.surname}</td>
              <td>{workers.salary}</td>
              <td>
                <input type='checkbox' checked={workers.isCheck} onChange={() => checkUsers(index)} />
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <p>{total}</p>
    </div>
  )
};

const Lesson83 = () => {
  const [users, setUsers] = React.useState([
    { name: 'Коля', isShow: true },
    { name: 'Вася', isShow: true },
    { name: 'Петя', isShow: true },
    { name: 'Дима', isShow: true },
  ]);

  const handleChecked = index => {
    users[index].isShow = !users[index].isShow
    setUsers(users.concat());
  };

  return (
    <div>
      {users.map((users, index) =>
        <div key={index}>
          <input type='checkbox' checked={users.isShow} onChange={() => handleChecked(index)} />
          <br />
          <p hidden={!users.isShow}>{users.name}</p>
        </div>)}
    </div>
  )
};

const Lesson84 = () => {
  const [users, setUsers] = React.useState([
    { name: 'Коля', surname: 'Иванов', age: 30, isCheck: false },
    { name: 'Вася', surname: 'Петров', age: 40, isCheck: false },
    { name: 'Петя', surname: 'Сидоров', age: 50, isCheck: false },
  ]);

  const handleChecked = index => {
    users[index].isCheck = !users[index].isCheck
    setUsers(users.concat());
  };

  return (
    <div>
      <ul>
        {users.map((user, index) =>
          <li key={index}>
            {user.isCheck ? user.name + ' ' + user.surname + ' ' + user.age : user.name}
            <input type='checkbox' onChange={() => handleChecked(index)} />
          </li>)}
      </ul>
    </div>
  )
};

const View = ({ user, id, onHandleChange }) => {

  const handleChange = event => {
    user.name = event.target.value;
    onHandleChange(user, id);
  };

  const handleBlur = event => {
    user.name = event.target.value;
    user.isCheck = !user.isCheck;
    onHandleChange(user, id);
  };

  const handleClick = () => {
    user.isCheck = !user.isCheck;
    onHandleChange(user, id);
  };

  return (
    user.isCheck
      ?
      <input
        type='text'
        value={user.name}
        onBlur={(event) => handleBlur(event)}
        onChange={(event) => handleChange(event)} />
      :
      <div
        onClick={handleClick}>
        {user.name}
      </div>
  );
}

const Lesson85 = () => {
  const [users, setUsers] = React.useState([
    { name: 'Коля', isCheck: false },
    { name: 'Вася', isCheck: false },
    { name: 'Петя', isCheck: false },
  ]);

  const handleChange = (item, id) => {
    users.splice(id, 1, item);
    setUsers(users.concat());
  };

  return (
    <div>
      <ul>
        {users.map((user, index) => (
          <li key={index} style={{ display: 'flex' }}>
            <View
              user={user}
              id={index}
              onHandleChange={(item, id) => handleChange(item, id)}
            />
          </li>))}
      </ul>
    </div>
  )
};

const Lesson86 = () => {
  const [users, setUsers] = React.useState([
    { name: 'Коля', age: 20, isName: false, isClickAge: false },
    { name: 'Вася', age: 30, isName: false, isClickAge: false },
    { name: 'Петя', age: 40, isName: false, isClickAge: false },
  ]);

  const handleChange = (event, index) => {
    users[index][event.target.name] = event.target.value;
    setUsers(users.concat());
  };

  const handleBlur = (event, index) => {
    users[index][event.target.name] = event.target.value;
    users[index].isCheck = !users[index].isCheck;
    setUsers(users.concat());
  };

  const handleClick = (index) => {
    users[index].isCheck = !users[index].isCheck;
    setUsers(users.concat());
  };

  return (
    <div>
      <table>
        <tbody>
          {users.map((item, index) =>
            <tr key={index}>
              <td>
                {
                  item.isCheck ?
                    <input
                      type='text'
                      name='name'
                      value={item.name}
                      onBlur={(e) => handleBlur(e, index)}
                      onChange={(e) => handleChange(e, index)} />
                    :
                    <div
                      onClick={() => handleClick(index)}>
                      {item.name}
                    </div>
                }
              </td>
              <td>
                {
                  item.isCheck ?
                    <input
                      type='text'
                      name='age'
                      value={item.age}
                      onBlur={(e) => handleBlur(e, index)}
                      onChange={(e) => handleChange(e, index)} />
                    :
                    <div
                      onClick={() => handleClick(index)}>
                      {item.age}
                    </div>
                }
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
};

const Lesson87 = () => {
  const routes = ['option1', 'option2', 'option3'];
  const [route, setRoute] = React.useState(routes[0]);

  const handleChange = event => event.target.checked ? setRoute(event.target.value) : '';

  return (
    <div style={{ textAlign: 'center' }}>
      <p > Select a route: {route} </p>
      {routes.map((item, index) => (
        <div key={index} >
          <input type='radio' onChange={handleChange} value={item} id={item}
            checked={route === item} style={{ margin: '5px' }} />
          <label htmlFor={item}>{item}</label>
        </div>

      ))}
    </div>
  );
};

const Lesson88 = () => {
  const [arr, setArr] = React.useState([]);
  const [value, setValue] = React.useState();

  const handleClick = () => setArr(arr.concat(value));
  const changeValue = event => setValue(event.target.value);
  return (
    <div>
      <div>
        <textarea onChange={changeValue} cols="50" rows="10" />
        <br />
        <button onClick={handleClick}>add</button>
      </div>
      {arr.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};

const Lesson89 = () => {

  const [workers, setWorkers] = React.useState([
    { name: 'Коля', surname: 'Абрамов', salary: 1000 },
    { name: 'Вася', surname: 'Васин', salary: 2000 },
    { name: 'Петя', surname: 'Бильбо', salary: 3000 },
    { name: 'Дима', surname: 'Гамма', salary: 4000 },
  ]);

  const handleClick = event => {
    const col = event.target.name;
    const result = workers.concat().sort((a, b) => {
      if (a[col] > b[col]) {
        return 1;
      } else if (a[col] < b[col]) {
        return -1;
      } else {
        return 0;
      }
    });
    setWorkers(result);
  };
  const border = { border: '1px solid darkgray' };

  return (
    <div>
      <table style={border}>
        <caption>Workers</caption>
        <thead>
          <tr >
            <th><button name='name' onClick={handleClick}>name</button></th>
            <th><button name='surname' onClick={handleClick}>surname</button></th>
            <th><button name='salary' onClick={handleClick}>salary</button></th>
          </tr>
        </thead>
        <tbody >
          {workers.map((workers, index) =>
            <tr key={index}>
              <td>{workers.name}</td>
              <td>{workers.surname}</td>
              <td>{workers.salary}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
};

const Lesson810 = () => {
  const langs = ['en', 'ru'];
  const [lang, setLang] = React.useState(langs[0]);
  const days = new Array(7).fill(null);

  const handleChange = event => setLang(event.target.value);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div>
        <select onChange={handleChange}>
          {langs.map((item, index) => (
            <option key={index} value={item}>{item}</option>
          ))}
        </select>
      </div>
      <div style={{ textAlign: 'left' }}>
        <select>
          {days.map((item, index) => (
            <option key={index}>
              {days[index] = new Date(1970, 1, index).toLocaleString(lang, { weekday: 'long' })}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

const Lesson811 = () => {
  const [borderStyle, setBorderStyle] = React.useState('red');

  const handleChange = event => {
    const length = event.target.value.length;
    length < 4 || length > 9 ? setBorderStyle('red') : setBorderStyle('green');
  }

  return (
    <div style={{ padding: '20px' }}>
      <input type="text" size='50' onChange={handleChange} style={{ outlineColor: borderStyle }} />
    </div>
  );
};

const Lesson812 = () => {

  const [workers, setWorkers] = React.useState([
    { name: 'Коля', surname: 'Абрамов', salary: 1000, genre: 'male' },
    { name: 'Лена', surname: 'Васина', salary: 2000, genre: 'female' },
    { name: 'Петя', surname: 'Бильбо', salary: 3000, genre: 'male' },
    { name: 'Дима', surname: 'Гамма', salary: 4000, genre: 'male' },
  ]);
  const styleLabel = {
    width: '150px',
    marginTop: '3px',
    display: 'inline-block',
    float: 'left',
    padding: '3px'
  }

  const styleInput = {
    height: '20px',
    width: '220px',
    padding: '5px 8px'
  }
  const styleUl = {
    width: '500px',
    listStyleType: 'none',
    listStylePosition: 'outside',
    margin: '0px',
    padding: '0px'
  }
  const styleLi = {
    padding: '12px',
    borderBottom: '1px solid #eee',
    position: 'relative'
  }
  const newUser = {};
  const handleChange = event => {
    newUser[event.target.name] = event.target.value;
  }

  const handleSubmit = event => {
    setWorkers(workers.concat(newUser))
    event.preventDefault();
  }

  return (
    <div>
      <table style={{ border: '1px solid' }}>
        <caption>Workers</caption>
        <thead>
          <tr>
            <th>name</th>
            <th>surname</th>
            <th>salary</th>
            <th>genre</th>
          </tr>
        </thead>
        <tbody >
          {workers.map((workers, index) =>
            <tr key={index}>
              <td>{workers.name}</td>
              <td>{workers.surname}</td>
              <td>{workers.salary}</td>
              <td>{workers.genre}</td>
            </tr>
          )}
        </tbody>
      </table>
      <div>
        <form onSubmit={handleSubmit}>
          <ul style={styleUl}>
            <li style={styleLi}>
              <label htmlFor="name" style={styleLabel}>name</label>
              <input type="text" name="name" style={styleInput} onChange={handleChange} />
            </li>
            <li style={styleLi}>
              <label htmlFor="surname" style={styleLabel}>surname</label>
              <input type="text" name="surname" style={styleInput} onChange={handleChange} />
            </li>
            <li style={styleLi}>
              <label htmlFor="salary" style={styleLabel}>salary</label>
              <input type="text" name='salary' style={styleInput} onChange={handleChange} />
            </li>
            <li style={styleLi}>
              <label htmlFor="genre" style={styleLabel}>genre</label>
              <select style={styleInput} name='genre' defaultValue='genre' onChange={handleChange}>
                <option value="genre">select a genre</option>
                <option value="male">male</option>
                <option value="female">female</option>
              </select>
            </li>
            <li style={styleLi}>
              <input type="submit" value="add" />
            </li>
          </ul>
        </form>
      </div>
    </div>
  )
};

const Lesson813 = () => {

  const workers = [
    { name: 'Коля', surname: 'Абрамов', salary: 1000, genre: 'male' },
    { name: 'Лена', surname: 'Васина', salary: 2000, genre: 'female' },
    { name: 'Петя', surname: 'Бильбо', salary: 3000, genre: 'male' },
    { name: 'Дима', surname: 'Гамма', salary: 4000, genre: 'male' },
    { name: 'aaaaa', surname: 'ddddd', salary: 5000, genre: 'male' },
    { name: 'bbbbb', surname: 'fffff', salary: 6000, genre: 'female' },
    { name: 'ccccc', surname: 'sssss', salary: 7000, genre: 'male' },
    { name: 'dddd', surname: 'uuuu', salary: 8000, genre: 'male' },
    { name: 'eeee', surname: 'hhhhhh', salary: 9000, genre: 'male' },
    { name: 'jjjj', surname: 'lllll', salary: 20000, genre: 'female' },
    { name: 'qqqq', surname: 'rrrrr', salary: 31000, genre: 'male' },
    { name: 'ssss', surname: 'ttttt', salary: 400, genre: 'male' },
  ];

  const [current, setCurrent] = React.useState(0);

  const ITEMS_ON_PAGE = 5;

  const paginate = (array, items, offset) => {
    const from = offset * items;
    const to = from + items

    return array.slice(from, to);
  }

  const getLink = (array, items) => {
    const countLink = Math.ceil(array.length / items);
    const result = new Array(countLink).fill(null);
    for (let i = 0; i < result.length; i++) {
      result[i] = i;
    }
    return result;
  }

  const handleClick = index => setCurrent(index);

  return (
    <div style={{ margin: '30px' }}>
      {getLink(workers, ITEMS_ON_PAGE).map((index, item) => (
        <span key={index} onClick={() => handleClick(index)} style={{ cursor: 'pointer' }}> {item + 1} </span>)
      )}
      <table style={{ border: '1px solid' }}>
        <caption>Workers</caption>

        <thead>
          <tr>
            <th>name</th>
            <th>surname</th>
            <th>salary</th>
            <th>genre</th>
          </tr>
        </thead>
        <tbody >
          {paginate(workers, ITEMS_ON_PAGE, current).map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.surname}</td>
              <td>{item.salary}</td>
              <td>{item.genre}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
};

const Lesson814 = () => {
  const [cities, setCities] = React.useState([]);
  const [city, setCity] = React.useState('');
  const [show, setShow] = React.useState('');

  const handleChange = event => setCity(event.target.value);
  const nandleSubmit = () => setCities(cities.concat(city));
  const handleSelect = event => setShow(event.target.value);

  return (
    <div style={{ margin: '30px' }}>
      <select name='cities' style={{ margin: '30px' }} onChange={handleSelect}>
        {cities.map((item, index) => (
          <option key={index} value={item}>{item}</option>
        ))}
      </select>
      <p>{show}</p>
      <br />
      <label htmlFor="addCity">Add sity</label>
      <input type="text" name='addCity' onChange={handleChange} />
      <button onClick={nandleSubmit}>add</button>
    </div>
  );
};

const Lesson815 = () => {
  const [exchange, setExchange] = React.useState({
    from: 'uah',
    to: 'uah',
  })
  const [amount, setAmount] = React.useState();
  const [result, setResult] = React.useState('');

  const handleSelectFrom = event => setExchange({ from: event.target.value, to: exchange.to, });
  const handleSelectTo = event => setExchange({ from: exchange.to, to: event.target.value, });

  const handleSubmit = () => {
    let result = 1;

    if (exchange.from === 'uah' && exchange.to === 'usd') {
      result = amount / 27;
    } else if (exchange.from === 'usd' && exchange.to === 'uah') {
      result = amount * 27;
    } else {
      result = amount;
    }

    setResult(result)
  };

  const handleChange = event => setAmount(event.target.value);

  return (
    <div style={{ margin: '30px' }}>
      <select name='from' style={{ margin: '30px' }} defaultValue='uah' onChange={handleSelectFrom}>
        <option value='uah'>uah</option>
        <option value='usd'>usd</option>
      </select>
      <select name='to' style={{ margin: '30px' }} defaultValue='uah' onChange={handleSelectTo}>
        <option value='usd'>usd</option>
        <option value='uah'>uah</option>
      </select>
      <br />
      <input type="text" name='addCity' onChange={handleChange} />
      <button onClick={handleSubmit}>add</button>
      <p>{result}</p>
    </div>
  );
};

const Lesson816 = () => {
  const test = [
    {
      question: 'Вопрос 1',
      answers: [
        'Ответ1',
        'Ответ2',
        'Ответ3',
        'Ответ4',
        'Ответ5',
      ],
      right: 1, //номер правильного ответа
    },
    {
      question: 'Вопрос 2',
      answers: [
        'Ответ1',
        'Ответ2',
        'Ответ3',
        'Ответ4',
        'Ответ5',
      ],
      right: 2, //номер правильного ответа
    },
    {
      question: 'Вопрос 3',
      answers: [
        'Ответ1',
        'Ответ2',
        'Ответ3',
        'Ответ4',
        'Ответ5',
      ],
      right: 3, //номер правильного ответа
    },
  ]

  const [answer, setAnswer] = React.useState({});

  const handleChange = event => {
    const value = +event.target.value;
    const name = event.target.name;
    
    setAnswer(Object.assign({}, answer, {[name]: value === test[name].right - 1}));
  }

  return (
    <div className={styles.BorderRed}>
      {test.map((item, index) => (
        <div key={index}>
          <p className={answer[index] === undefined ? styles.default : answer[index] ? styles.right : styles.wrong}>{item.question}</p>
          {item.answers.map((element, innerIndex) => (
            <div  key={innerIndex}>
              <label htmlFor={`${item.question}_${innerIndex}`}>{element}</label>
              <input type='radio' id={`${item.question}_${innerIndex}`} name={index} 
              value={innerIndex} onChange={handleChange} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};