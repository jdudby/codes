import React from "react";
import {NavLink} from "react-router-dom";
import "./Navigation.css";



function Navigation()
{
  return (
    <div class="format">

        <NavLink to="/">Home</NavLink>
        <NavLink to="/Reception"  > Reception </NavLink>
        <NavLink to="/Distribution"> Distribution </NavLink>
        <NavLink to="/Rapport"> Rapport </NavLink>
        <NavLink to="/Gestion"> Gestion </NavLink>
        <NavLink to="/Parametres"> Paramètres </NavLink>
        <NavLink to="/About"> À propos de nous </NavLink>

    </div>
  );
}
export default Navigation;
