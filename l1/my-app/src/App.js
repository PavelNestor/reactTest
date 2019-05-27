import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Lesson1 from './lessons/lesson1';
import Lesson2 from './lessons/lesson2';
import Lesson4 from './lessons/lesson4';
import Lesson5 from './lessons/lesson5';
import Lesson6 from './lessons/lesson6';
import Lesson7 from './lessons/lesson7';
import Lesson8 from './lessons/lesson8';

function App() {
  return (
    <BasicExample />
  );
}

function BasicExample() {
  return (
    <Router>
      <div style={{display: 'flex', padding: '10px', justifyContent: 'space-between'}}>
        <div><Link to="/">home</Link></div>
        <div><Link to="/lesson1">Lesson1</Link></div>
        <div><Link to="/lesson2">Lesson2</Link></div>
        <div><Link to="/lesson4">Lesson4</Link></div>
        <div><Link to="/lesson5">Lesson5</Link></div>
        <div><Link to="/lesson6">Lesson6</Link></div>
        <div><Link to="/lesson7">Lesson7</Link></div>
        <div><Link to="/lesson8">Lesson8</Link></div>
      </div>
      <Route path="/" component={home} />
      <Route path="/lesson1" component={lesson1} />
      <Route path="/lesson2" component={lesson2} />
      <Route path="/lesson4" component={lesson4} />
      <Route path="/lesson5" component={lesson5} />
      <Route path="/lesson6" component={lesson6} />
      <Route path="/lesson7" component={lesson7} />
      <Route path="/lesson8" component={lesson8} />
    </Router>
  );
}
function home() {
  return (
    <h1 style={{textAlign: 'center', paddingTop: '100px'}}>React</h1>
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

export default App;
