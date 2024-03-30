import React, { useState } from "react";
import "./CSSPageHeaderAM.css";

function PageHeaderAM({ onLogin, selectedPage, setSelectedPage }) {
  const handleClick = (page) => {
    setSelectedPage(page);
  };

  return (
    <header>
      <nav className="navbar navbar-expand-sm bg-black navbar-dark fixed-top">
        <div className="container">
          <img src="/image/logo.png" alt="notre_logo" />
          <a
            className={`navbar-brand ${selectedPage === "AdminHome" ? "active" : ""}`}
            href="#"
            onClick={() => handleClick("AdminHome")}
          >
            Admin Home
          </a>
          <a
            className={`navbar-brand ${selectedPage === "GestionEmployes" ? "active" : ""}`}
            onClick={() => handleClick("GestionEmployes")}
          >
            Gestion Employes
          </a>
          <a
            className={`navbar-brand ${selectedPage === "GestionVehicules" ? "active" : ""}`}
            onClick={() => handleClick("GestionVehicules")}
          >
            Gestion Vehicules
          </a>
          <a
            className={`navbar-brand ${selectedPage === "GestionSoumission" ? "active" : ""}`}
            href="#"
            onClick={() => handleClick("GestionSoumission")}
          >
            Gestion Soumission
          </a>
          <button type="button" className="btn btn-primary" onClick={onLogin}>
            Exit
          </button>
        </div>
      </nav>
    </header>
  );
}

export default PageHeaderAM;
