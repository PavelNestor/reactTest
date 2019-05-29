import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Lesson1 from './lessons/lesson1';
import Lesson2 from './lessons/lesson2';
import Lesson3 from './lessons/lesson3';
import Lesson4 from './lessons/lesson4';
import Lesson5 from './lessons/lesson5';
import Lesson6 from './lessons/lesson6';
import Lesson7 from './lessons/lesson7';
import Lesson8 from './lessons/lesson8';
import Lesson9 from './lessons/lesson9';
import Lesson10 from './lessons/lesson10';

function App() {
  return (
    <BasicExample />
  );
}

function BasicExample() {
  return (
    <Router>
      <div style={{display: 'flex', padding: '10px', justifyContent: 'space-between'}}>
        <div><Link to="/lesson1">Lesson1</Link></div>
        <div><Link to="/lesson2">Lesson2</Link></div>
        <div><Link to="/lesson3">Lesson3</Link></div>
        <div><Link to="/lesson4">Lesson4</Link></div>
        <div><Link to="/lesson5">Lesson5</Link></div>
        <div><Link to="/lesson6">Lesson6</Link></div>
        <div><Link to="/lesson7">Lesson7</Link></div>
        <div><Link to="/lesson8">Lesson8</Link></div>
        <div><Link to="/lesson9">Lesson9</Link></div>
        <div><Link to="/lesson10">Lesson10</Link></div>
      </div>
      <Route exact path="/" component={lesson1} />
      <Route path="/lesson1" component={lesson1} />
      <Route path="/lesson2" component={lesson2} />
      <Route path="/lesson3" component={lesson3} />
      <Route path="/lesson4" component={lesson4} />
      <Route path="/lesson5" component={lesson5} />
      <Route path="/lesson6" component={lesson6} />
      <Route path="/lesson7" component={lesson7} />
      <Route path="/lesson8" component={lesson8} />
      <Route path="/lesson9" component={lesson9} />
      <Route path="/lesson10" component={lesson10} />
    </Router>
  );
}
function lesson1() {
  return (
    <Lesson1 />
  );
}
function lesson2() {
  return (
    <Lesson2 />
  );
}
function lesson3() {
  return (
    <Lesson3 />
  );
}
function lesson4() {
  return (
    <Lesson4 />
  );
}
function lesson5() {
  return (
    <Lesson5 />
  );
}
function lesson6() {
  return (
    <Lesson6 />
  );
}
function lesson7() {
  return (
    <Lesson7 />
  );
}
function lesson8() {
  return (
    <Lesson8 />
  );
}
function lesson9() {
  return (
    <Lesson9 />
  );
}
function lesson10() {
  return (
    <Lesson10 />
  );
}

export default App;
