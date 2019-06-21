import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Reception from "./components/Reception";
import Distribution from "./components/Distribution";
import Rapport from "./components/Rapport";
import Gestion from "./components/Gestion";
import Parametres from "./components/Parametres";
import About from "./components/About";
import Navigation from "./components/Navigation";
import Error from "./components/Error";


function App() {
const Home=()=>{
  return(

  <h1>Accueil</h1>
  );
}

  return (

    <div className="App">
      <header className="App-header" id="root2">
        <h1>Transacs Monsters</h1>
      </header>

      <BrowserRouter>
          <Navigation />
        <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/Reception" component={Reception} exact/>
        <Route path="/Distribution" component={Distribution} exact/>
        <Route path="/Rapport" component={Rapport} exact/>
        <Route path="/Gestion" component={Gestion} exact/>
        <Route path="/Parametres" component={Parametres} exact/>
        <Route path="/About" component={About} exact/>
        <Route component={Error} exact/>
        </Switch>
      </BrowserRouter>

    </div>



  );
}
export default App;
