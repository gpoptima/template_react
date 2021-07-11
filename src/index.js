import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './Login';
import NoMatch from './NoMatch';
import reportWebVitals from './reportWebVitals';
import { Switch, Route, Redirect,HashRouter } from 'react-router-dom';

localStorage.setItem('@@auth_user',JSON.stringify({user:'Ajelet',token:'RXZU83793DJAI8849834XMNALZU83793DJAI8849834XMNALZ'}))
//localStorage.clear()
const user = JSON.parse(localStorage.getItem('@@auth_user'));


ReactDOM.render(
     <HashRouter>
        <Switch>
          <Route exact path='/'>
             <Redirect to='/login'/>
          </Route>
          <Route exact path='/login'>
             <Login/>
          </Route>
          <Route path='/app' >
              <App/>
          </Route>
          <Route component={NoMatch}/>
        </Switch>
      </HashRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
