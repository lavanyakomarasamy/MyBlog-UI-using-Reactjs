import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

const routes = (
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={App} />
        <Redirect from="/" to="/home" />
      </Switch>
    </BrowserRouter>
  );
  
ReactDOM.render(routes, document.getElementById("root"));
  
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
