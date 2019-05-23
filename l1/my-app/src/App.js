import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Lesson1 from './lessons/lesson1';
import Lesson2 from './lessons/lesson2';

function App() {
  return (
    <BasicExample />
  );
}

function BasicExample() {
  return (
    <Router>
      <div style={{display: 'flex', padding: '10px', justifyContent: 'space-between'}}>
        <div><Link to="/home">home</Link></div>
        <div><Link to="/lesson1">Lesson1</Link></div>
        <div><Link to="/lesson2">Lesson2</Link></div>
      </div>
      <Route path="/home" component={home} />
      <Route path="/lesson1" component={lesson1} />
      <Route path="/lesson2" component={lesson2} />
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

export default App;
