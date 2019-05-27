import React from 'react';
import json_data from './data/data7';


export default function Lesson7() {

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ border: '1px dotted grey' }}><h2 >Задачи для решения</h2></div>
      {[Lesson71, Lesson72, Lesson73, Lesson74, Lesson75, Lesson76, Lesson77, Lesson78,
        Lesson79, Lesson710, Lesson711, Lesson712, Lesson713].map((Comp, index) => {
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
      <div>
        <strong>{json_data[props.num].header}</strong>
        <br />
        {json_data[props.num].text}
      </div>
    </div>
  );
};

const Lesson71 = () => {
  const [value, setValue] = React.useState("text");
  const changeValue = (event) => setValue(event.target.value);
  return (
    <div>
      <p>{value}</p>
      <textarea onChange={changeValue} />
    </div>
  );
};

const Lesson72 = () => {
  const [value, setValue] = React.useState(false);
  const changeValue = event => setValue(!value);
  return (
    <div>
      <p>Состояние: {value ? 'отмечен' : 'не отмечен'}</p>
      <input type="checkbox" onChange={changeValue} />
    </div>
  );
};

const Lesson73 = () => {
  const [value, setValue] = React.useState(false);
  const changeValue = () => {
    setValue(!value);
    setIsShowing(value ? 'block' : 'none');
  }
  const [isShowing, setIsShowing] = React.useState(value);
  return (
    <div>
      <p style={{ display: isShowing }}>Виден</p>
      <input type="checkbox" onChange={changeValue} />
    </div>
  );
};

const Lesson74 = () => {
  const [value, setValue] = React.useState('Cherkassy');
  const handleSelectChange = event => setValue(event.target.value);

  return (
    <div>
      <p>{value}</p>
      <select value={value} onChange={handleSelectChange}>
        <option>Cherkassy</option>
        <option>Kiev</option>
        <option>Odessa</option>
        <option>Lviv</option>̵
      </select>
    </div>
  );
};

const Lesson75 = () => {
  const arr = {
    value: 0,
    cities: ['Cherkassy', 'Kiev', 'Odessa', 'Lviv',]
  };
  const [value, setValue] = React.useState(arr.cities[0]);
  const handleSelectChange = event => setValue(arr.cities[event.target.value]);

  return (
    <div>
      <p>{value}</p>
      <select value={value} onChange={handleSelectChange}>
        {arr.cities.map((city, index) => (
          <option key={index} value={index}>{city}</option>
        ))}
      </select>
    </div>
  );
};

const Lesson76 = () => {
  const [option, setOption] = React.useState('1');
  const handleRadioChange = event => setOption(event.target.value);

  return (
    <div>
      <p>{option}</p>
      <input
        name='lang'
        type='checkbox'
        value='1'
        onChange={handleRadioChange}
      />
      <input
        name='lang'
        type='checkbox'
        value='2'
        onChange={handleRadioChange}
      />
      <input
        name='lang'
        type='checkbox'
        value='3'
        onChange={handleRadioChange}
      />
    </div>
  );
};

const Lesson77 = () => {
  const [texts, setTexts] = React.useState([]);
  const [text, setText] = React.useState('');
  const handleAddText = () => setTexts(texts.concat(text));

  return (
    <div>
      <textarea cols="30" rows="10" onChange={event => setText(event.target.value)} />
      <br />
      <button onClick={handleAddText}>add text</button>
      <div>
        {texts.map((item, index) => <p key={index}>{item}</p>)}
      </div>
    </div>
  );
};

const Lesson78 = () => {
  const [value, setValue] = React.useState('grey');
  const handleSelectChange = event => setValue(event.target.value);
  return (
    <div>
      <p style={{ color: value }}>{value}</p>
      <select value={value} onChange={handleSelectChange}>
        <option>grey</option>
        <option>red</option>
        <option>green</option>
        <option>blue</option>
        <option>yellow</option>̵
      </select>
    </div>
  );
};

const Lesson79 = () => {
  const [value, setValue] = React.useState(false);
  const changeValue = () => setValue(!value);
  return (
    <div>
      <select value={value} onChange={changeValue}>
        <option value={true}>отмечен</option>
        <option value={false}>не отмечен</option>
      </select>
      <input type="checkbox" checked={value} readOnly={true} />
    </div>
  );
};

const Lesson710 = () => {
  const paragrafs = [<p>first</p>, <p>second</p>, <p>third</p>];
  const [values, setValues] = React.useState(0);
  const handleSelect = event => setValues([event.target.value]);
  return (
    <div>
      <select value={values} onChange={handleSelect}>
        <option value={0}>first</option>
        <option value={1}>second</option>
        <option value={2}>third</option>
      </select>
      <div>
        {paragrafs[values]}
      </div>
    </div>
  );
};

const Lesson711 = () => {
  const [text, setText] = React.useState();
  const [list, setList] = React.useState([
    'first',
    'second',
    'third',
  ]);

  const handleText = event => setText(event.target.value);
  const handleSubmit = event => {
    setList(list.concat([text]));
    event.preventDefault();
  }
  return (
    <div>
      <select >
        {list.map((item, index) => <option value={index} key={index}>{item}</option>)}
      </select>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleText} />
          <input type="submit" value="add" />
        </form>
      </div>
    </div>
  );
};

const Lesson712 = () => {
  const [input, setInput] = React.useState(false);
  const handleCheck = () => setInput(!input);
  return (
    <div>
      <input type="checkbox" onChange={handleCheck} />
      <input type="submit" value="add" disabled={input} />
    </div>
  );
};

const Lesson713 = () => {
  const [date, setDate] = React.useState(new Date());
  const dates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",];
  const years = [
    2019,
    2018,
    2017,
    2016,
    2015,
    2014,
    2013,];

  const handleSelectDate = event => {
    const newDate = {
      'year': date.getFullYear(),
      'month': date.getMonth(),
      'day': date.getDate(),
    };
    newDate[event.target.name] = event.target.value;
    setDate(
      new Date(newDate.year, newDate.month, newDate.day)
    );
  }
 
  return (
    <div>
      <p>{date.toLocaleString('eng', { weekday: 'long' })}</p>
      <form>
        <select onChange={handleSelectDate} defaultValue={date.getDate()} name='day' >
          {dates.map((item, index) => <option value={index + 1} key={index}>{item}</option>)}
        </select>
        <select onChange={handleSelectDate} defaultValue={date.getMonth()} name='month'>
          {months.map((item, index) => <option value={index} key={index}>{item}</option>)}
        </select>
        <select onChange={handleSelectDate} defaultValue={date.getFullYear()} name='year'>
          {years.map((item, index) => <option value={item} key={index}>{item}</option>)}
        </select>
      </form>
    </div>
  );
};
