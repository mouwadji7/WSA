import React from 'react';
import './PageHeader.css';

import { Link } from 'react-router-dom';

function PageHeader({ onLogin }) { // Accepter la fonction de gestion de la connexion en tant que prop
  return (
    <header>
      <nav className="navbar navbar-expand-sm bg-black navbar-dark fixed-top">
        <div className="container">
          <img src="/image/logo.png" alt="notre_logo"/>
          <Link to="/" className="navbar-brand">Home</Link> {/* Fermez la balise Link correctement */}
          <a className="navbar-brand">Faire une soumission</a>
          <a className="navbar-brand" href="#">État de ma soumission</a>
          <a className="navbar-brand" href="#">Payer soumission</a>
          <button type="button" className="btn btn-primary" onClick={onLogin}>Login</button> {/* Ajouter un gestionnaire d'événements au clic sur le bouton Login */}
        </div>
      </nav>
    </header>
  );
}

export default PageHeader; // N'oubliez pas d'exporter le composant
