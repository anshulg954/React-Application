import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App, SignIn, SideBar, MainContainer } from './components';
import { BrowserRouter } from 'react-router-dom';

//import SignIn from './components/SignIn'
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

