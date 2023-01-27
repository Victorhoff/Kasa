import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navigation">
      <div>
        <img
          className="navigation__logo"
          src="./img/logo.png"
          alt="logo kasa"
        />
      </div>
      <ul>
        <NavLink to="/">
          <li>Accueil</li>
        </NavLink>
        <NavLink to="/About">
          <li>A propos</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navigation;
