import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Titre from "./Titre";
import Connecter from "./Connecter";
import Comments from "./Comments";
import Clock from "./Clock";

import * as serviceWorker from './serviceWorker';

const comment={
  author : {
    name:"Gladysse",
    lastname:"VICTORIN",
  },
  text:"ceci est un conseil d'ami. Soyez bienveillant avec tout le monde",
  date:new Date().toLocaleDateString()
};

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Titre />, document.getElementById('root2'));
ReactDOM.render(<Connecter />, document.getElementById('login'));
ReactDOM.render(
  <Comments author={comment.author}
  name={comment.name}
  lastname={comment.lastname}
  text={comment.text}
  date={comment.date}
  />,
 document.getElementById("comment")
);

ReactDOM.render(<Clock />, document.getElementById("clock") );


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
