import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Titre from "./Titre";
import Connecter from "./Connecter";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Titre />, document.getElementById('root2'));
ReactDOM.render(<Connecter />, document.getElementById('login'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
