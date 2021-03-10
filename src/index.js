import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import FlightInfo from './components/FlightInfo';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <FlightInfo />
  </React.StrictMode>,
  document.getElementById('root')
);

