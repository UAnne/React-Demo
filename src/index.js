import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Todolist from './views/Todolist/index';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(<Todolist />, document.getElementById('root'));
serviceWorker.unregister();