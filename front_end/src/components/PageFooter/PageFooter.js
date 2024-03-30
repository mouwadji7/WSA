import React from "react";
import "./PageFooter.css";
import { Link } from "react-router-dom";
function PageFooter() {
  return (
    <footer>
      <nav class="navbar navbar-expand-sm bg-black navbar-dark fixed-bottom text-white">
        <div class="container-fluid">
          <div>
            <img src="/image/logo.png" alt="notre_logo" />
          </div>

          <div class="row">
            <Link to="/carriere" className="navbar-brand">
              {" "}
              Carriere
            </Link>
            <Link to="/don" className="navbar-brand">
              Faire un Don
            </Link>
          </div>
          <div class="row">
            <Link to="/apropos" className="navbar-brand">
              Qui sommes nous
            </Link>
            <Link to="/histoires" className="navbar-brand">
              Histoires
            </Link>
          </div>
          <div class="row">
            <Link to="/votreavis" className="navbar-brand">
              Donner Avis
            </Link>
          </div>
          <div class="row">
            <p>
              <bold>Addresse Email :</bold> Mouwadjinc.Demenagement@gmail.com
            </p>
            <p>
              <bold>Numeros telephone :</bold>614-677-4568{" "}
            </p>
          </div>
        </div>
      </nav>
    </footer>
  );
}

export default PageFooter;
