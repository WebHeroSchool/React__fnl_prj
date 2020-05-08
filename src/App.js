import React from 'react';
import logo from './logo.svg';
import './App.css';

const val = 'я пересменная'
const logic = true;
const tern = false;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p style={{color: 'red'}}>Hello World!</p>
    <p>Вывод значения переменной: {val}</p>
    <p>Вывод числа: {55}</p>
    <p>Вывоа результата арифметической операции: {5 + 5}</p>
    <p>Вывод результата логической операции: {logic && <span>Условие истинно))</span}</p>
    <p>Вспользование тернарного условия: {tern ? <span>Условие истинно))</span> : <span>Все плохо((</span>}</p>
    <p>Вывод undefined: {undefined}, null: {null}, false: {false}, true: {true}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
