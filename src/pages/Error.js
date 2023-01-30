import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const Error = () => {
  return (
    <div>
      <main className="error">
        <h1 className="error__title">404</h1>
        <p className="error__msg">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <a className="error__link" href="/">
          Retourner sur la page d'accueil
        </a>
      </main>
    </div>
  );
};

export default Error;
