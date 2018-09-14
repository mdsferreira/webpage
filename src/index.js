import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import Home from "./components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <Router >
        <Switch>                    
            <Route path="/" component={App} />               
        </Switch>
    </Router>
    
    
    , document.getElementById('root'));
registerServiceWorker();
