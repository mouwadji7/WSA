import React from 'react';
import './CSSPageHeaderAM.css';

function PageHeaderAM() {
  return (
    <header>
            <nav class="navbar navbar-expand-sm bg-black navbar-dark fixed-top">
                <div class="container">
                    <img src="/image/logo.png" alt="notre_logo"/>
                    <a class="navbar-brand" href="#">Admin Home</a>
                  <a class="navbar-brand" href="#">Gestion Employes</a>
                  <a class="navbar-brand" href="#">Gestion Vehicules</a>
                  <a class="navbar-brand" href="#">Gestion Soumission</a>
                  <button type="button" class="btn btn-primary">Avertissement</button>
                </div>
              </nav>
        </header>
  );
}

export default PageHeaderAM;