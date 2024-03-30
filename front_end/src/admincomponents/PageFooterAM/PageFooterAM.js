import React, { useState } from "react";
import "./CSSPageFooterAM.css";

function PageFooterAM({ selectedPage, setSelectedPage }) {
  const handleClick = (page) => {
    setSelectedPage(page);
  };
  return (
    <footer>
      <nav className="navbar navbar-expand-sm bg-black navbar-dark fixed-bottom text-white">
        <div className="container">
          <div>
            <img src="/image/logo.png" alt="notre_logo" />
          </div>

          <div className="row">
            <a
              className={`navbar-brand ${selectedPage === "News" ? "active" : ""}`}
              href="#"
              onClick={() => handleClick("News")}
            >
              News |
            </a>
            <a
              className={`navbar-brand ${selectedPage === "ListeApp" ? "active" : ""}`}
              href="#"
              onClick={() => handleClick("ListeApp")}
            >
              Liste des applications pour travail |
            </a>
          </div>
          <div className="row">
            <a
              className={`navbar-brand ${selectedPage === "RHContact" ? "active" : ""}`}
              href="#"
              onClick={() => handleClick("RHContact")}
            >
              RH contact |
            </a>
            <a
              className={`navbar-brand ${selectedPage === "FaireRapport" ? "active" : ""}`}
              href="#"
              onClick={() => handleClick("FaireRapport")}
            >
              Faire un rapport |
            </a>
          </div>
          <div className="row">
            <a
              className={`navbar-brand ${selectedPage === "MessagesClient" ? "active" : ""}`}
              href="#"
              onClick={() => handleClick("MessagesClient")}
            >
              Messages Client |
            </a>
            <a
              className={`navbar-brand ${selectedPage === "Arborescence" ? "active" : ""}`}
              href="#"
              onClick={() => handleClick("Arborescence")}
            >
              Arborescence de l'entreprise |
            </a>
          </div>
        </div>
      </nav>
    </footer>
  );
}

export default PageFooterAM;
