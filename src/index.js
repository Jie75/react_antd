import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
<<<<<<< HEAD
import Life from './pages/life/life';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Life />, document.getElementById('root'));
=======
import Admin from './admin';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Admin />, document.getElementById('root'));
>>>>>>> cfc42825bfad63bdebb95bddda0c23fd01acf0e8

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
