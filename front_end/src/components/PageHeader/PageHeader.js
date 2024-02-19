// PageHeader.js
import React from 'react';
import './PageHeader.css';

function PageHeader({ onLogin }) { // Accepter la fonction de gestion de la connexion en tant que prop
  return (
    <header>
      <nav class="navbar navbar-expand-sm bg-black navbar-dark fixed-top">
        <div class="container">
          <img src="/image/logo.png" alt="notre_logo"/>
          <a class="navbar-brand" href="#">Home</a>
          <a class="navbar-brand" href="#">Faire une soumission</a>
          <a class="navbar-brand" href="#">État de ma soumission</a>
          <a class="navbar-brand" href="#">Payer soumission</a>
          <button type="button" class="btn btn-primary" onClick={onLogin}>Login</button> {/* Ajouter un gestionnaire d'événements au clic sur le bouton Login */}
        </div>
      </nav>
    </header>
  );
}

export default PageHeader;