import React from 'react';
import json_data from './data/data7';


export default function Lesson7() {

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ border: '1px dotted grey' }}><h2 >Задачи для решения</h2></div>
      <div><WriteHeader num='0'/><Lesson71 /></div>
      <div><WriteHeader num='1'/></div>
    </div >
  )
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
  )
};

const Lesson71 = () => {
  const [value, setValue] = React.useState("text");
  const changeValue = (event) => setValue(event.target.value)
  return <div>
    <p>{value}</p>
    <textarea onChange={changeValue} />
  </div>
};

const Lesson72 = () => {
  const [value, setValue] = React.useState(false);
  const changeValue = event => setValue(!value)
  return <div>
    <p>Состояние: {value ? 'отмечен' : 'не отмечен'}</p>
    <input type="checkbox" onChange={changeValue} />
  </div>
};
