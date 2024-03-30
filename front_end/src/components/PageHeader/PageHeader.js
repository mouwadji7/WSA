import React from "react";
import { Link } from "react-router-dom"; // Importer Link depuis react-router-dom
import "./PageHeader.css";

function PageHeader({ onLogin }) {
  // Accepter la fonction de gestion de la connexion en tant que prop
  return (
    <header>
      <nav className="navbar navbar-expand-sm bg-black navbar-dark fixed-top">
        {" "}
        {/* Utiliser className au lieu de class pour définir les classes CSS */}
        <div className="container">
          {" "}
          {/* Utiliser className au lieu de class pour définir les classes CSS */}
          <img src="/image/logo.png" alt="notre_logo" />
          <Link to="/" className="navbar-brand">
            Home
          </Link>
          <Link to="/status" className="navbar-brand">
            État de ma soumission
          </Link>
          <Link to="/payment" className="navbar-brand">
            Payer soumission
          </Link>
          <button type="button" className="btn btn-primary" onClick={onLogin}>
            Login
          </button>{" "}
          {/* Ajouter un gestionnaire d'événements au clic sur le bouton Login */}
        </div>
      </nav>
    </header>
  );
}

export default PageHeader;
