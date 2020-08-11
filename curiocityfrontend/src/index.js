import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from "react-router-dom";
import myTheme from "./styling/muiTheme";
import {MuiThemeProvider} from "@material-ui/core";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <MuiThemeProvider theme={myTheme}>
        <App/>
      </MuiThemeProvider>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
