import React, { useState } from "react";
import SoumissionSent from "./ChildPageSoumissionAM/SoumissionsRecues";
import SoumissionUpdate from "./ChildPageSoumissionAM/SoumissionUpdate";
import SoumissionDone from "./ChildPageSoumissionAM/SoumissionDone";
import GestionTaches from "./ChildPageSoumissionAM/GestionTaches";
import RechercheSoumission from "./ChildPageSoumissionAM/RechercheSoumission";
import SoumissionRecue from "./ChildPageSoumissionAM/SoumissionsRecues";

function PageSoumissionAM() {
  const [currentDisplay, setCurrentDisplay] = useState(<SoumissionSent />);

  const handleClick = (displayComponent) => {
    setCurrentDisplay(displayComponent);
  };

  return (
    <main className="container-fluid mt-5 pt-5">
      <h1> Page Gestion de soumissions </h1>

      <div className="row">
        <div className="col-sm-6 bg-primary text-white">
          <div className="container pt-5">
            <h1 className="text-dark">Cote Management </h1>

            <div className="btn-group-vertical mt-5">
              <button
                type="button"
                className="btn btn-dark mb-4"
                onClick={() => handleClick(<SoumissionRecue />)}
              >
                Soumission recu
              </button>
              <button
                type="button"
                className="btn btn-dark mb-4"
                onClick={() => handleClick(<SoumissionUpdate />)}
              >
                Soumission traites
              </button>
              <button
                type="button"
                className="btn btn-dark mb-4"
                onClick={() => handleClick(<SoumissionDone />)}
              >
                Soumission en attente de demenagement
              </button>
              <button
                type="button"
                className="btn btn-dark mb-4"
                onClick={() => handleClick(<GestionTaches />)}
              >
                {" "}
                Gerer les taches
              </button>
              <button
                type="button"
                className="btn btn-dark mb-4"
                onClick={() => handleClick(<RechercheSoumission />)}
              >
                Rechercher soumission
              </button>
            </div>
          </div>
        </div>

        {currentDisplay}
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

export default PageSoumissionAM;
