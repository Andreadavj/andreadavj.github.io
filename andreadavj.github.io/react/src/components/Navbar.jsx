import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">Doris Valverde</h2>
      <ul>
        <li><NavLink to="/" activeClassName="active">Sobre mí</NavLink></li>
        <li><NavLink to="/portfolio" activeClassName="active">Portafolio</NavLink></li>
        <li><NavLink to="/resume" activeClassName="active">Resumen</NavLink></li>
        <li><NavLink to="/contact" activeClassName="active">Contacto</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
