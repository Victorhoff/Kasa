import { NavLink, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navigation">
      <Link to="/">
        <img className="navigation__logo" src="/img/logo.png" alt="logo kasa" />
      </Link>
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
