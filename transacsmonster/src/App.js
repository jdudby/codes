import React from 'react';
import logo from './logo.svg';
import './App.css';
import Comments from "./Comments";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
const aut={name:'Welens Endy', lastname:'Jean-Pierre'};
  const obcom=()=><Comments text="Ceci est le texte du routeur"
   author={aut}
    date={new Date().toLocaleDateString} />;

  return (

    <div className="App">
      <header className="App-header" id="root2">
      </header>

      <section id="login"></section>
      <section id="comment"></section>
        <section id="clock"></section>
        <BrowserRouter>
          <Route path="/wmis" component={obcom} />
        </BrowserRouter>
    </div>



  );
}
export default App;
