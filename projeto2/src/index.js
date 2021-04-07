import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Exchange from './IndexExchange';
import SignUp from './SignUp';
import HomePage from './HomePage';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={HomePage} />
      <Route path="/signUp"  component={SignUp} />
      <Route path="/exchange" component={Exchange} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
