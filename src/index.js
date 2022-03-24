import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FruitContainer from './FruitContainer';
// import App from './App';
import reportWebVitals from './reportWebVitals';

const fruits = ['apple', 'orange', 'banana', 'pear', 'pineapple', 'jicama',
  'starfruit', 'peach', 'blueberry', 'strawberry', 'raspberry', 'tomato']

console.log(fruits)

ReactDOM.render(
  <React.StrictMode>
    <h1>Fruits</h1>
    <FruitContainer fruits={ fruits }/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
