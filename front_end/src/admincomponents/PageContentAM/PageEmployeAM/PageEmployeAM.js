import React, { useState } from "react";
import EMCreation from "./ChildPageEmployeAM/EMCreation";
import EMDisplay from "./ChildPageEmployeAM/EMDisplay"; // Importez le composant EMDisplay depuis son fichier
import EmRecherche from "./ChildPageEmployeAM/EmRecherche";

function PageEmployeAM() {
  const [currentDisplay, setCurrentDisplay] = useState(<EMCreation />); // État local pour suivre le composant affiché

  const handleClick = (displayComponent) => {
    setCurrentDisplay(displayComponent);
  };

  return (
    <main className="container mt-5 pt-5">
      <h1> Page Gestion employes </h1>

      <div className="row">
        <div className="col-sm-6 bg-primary text-white">
          <div className="container  pt-5">
            <h1 className="text-dark">Cote Managment </h1>

            <div className="btn-group-vertical mt-5">
              <button
                type="button"
                className="btn btn-dark mb-4"
                onClick={() => handleClick(<EMCreation />)}
                data-bs-toggle="tooltip"
                title="L'on pourras creer un nouveau employes en cliquant ici"
              >
                Creer Employes
              </button>
              <button
                type="button"
                className="btn btn-dark mb-4"
                onClick={() => handleClick(<EMDisplay />)}
                data-bs-toggle="tooltip"
                title="On pourras liste les employes ici avec ID ,Nom et Prenom. et len faisans un hover sur l'in 2 l'on pourras voir ses taches assignes "
              >
                Lister Employes
              </button>
              <button
                type="button"
                className="btn btn-dark mb-4"
                onClick={() => handleClick(<EmRecherche />)}
                data-bs-toggle="tooltip"
                title="On pourras recherche les employes ici avec ID ,Nom et Prenom. et len faisans un hover sur l'in 2 l'on pourras voir ses taches assignes "
              >
                Recherche employes{" "}
              </button>
            </div>
          </div>
        </div>
        {currentDisplay} {/* Afficher le composant actuel */}
      </div>
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col">
            <button type="button" className="btn btn-primary mb-2">
              Revenir a l'acceui adminHome
            </button>
          </div>
          <div className="col">
            <button type="button" className="btn btn-dark mb-2">
              Tout effacer
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default PageEmployeAM;
