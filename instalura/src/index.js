import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './components/Login';
import {Router, Route, browserHistory} from 'react-router';
import './css/timeline.css';
import './css/reset.css';
import './css/login.css';

ReactDOM.render(
  (
    <Router history={browserHistory}>
      <Route path="/" component={Login} />
      <Route path="/timeline" component={App} />
    </Router>
  ), 
  document.getElementById('root')
  
  );
