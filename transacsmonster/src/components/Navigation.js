import React from "react";
import {NavLink} from "react-router-dom";
import "./Navigation.css";


function Navigation()
{
  return (
    <div>
        <NavLink to="/"  className="format">Home</NavLink>
        <NavLink to="/Reception"  className="format"> Reception </NavLink>
        <NavLink to="/Distribution"  className="format"> Distribution </NavLink>
        <NavLink to="/Rapport"  className="format"> Rapport </NavLink>
        <NavLink to="/Gestion" className="format"> Gestion </NavLink>
        <NavLink to="/Parametres" className="format"> Paramètres </NavLink>
        <NavLink to="/About" className="format"> À propos de nous </NavLink>
    </div>
  );
}
export default Navigation;
