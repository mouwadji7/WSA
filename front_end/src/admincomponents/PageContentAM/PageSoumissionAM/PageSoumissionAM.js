import React, { useState } from "react";
import SoumissionSent from "./ChildPageSoumissionAM/SoumissionSent";
import SoumissionDone from "./ChildPageSoumissionAM/SoumissionDone";

function PageSoumissionAM() {
  const [currentDisplay, setCurrentDisplay] = useState(<SoumissionSent />);

  const handleClick = (displayComponent) => {
    setCurrentDisplay(displayComponent);
  };

  return (
    <main className="container-fluid mt-5 pt-5">
      <h1 className="text-center">Page Gestion Soumission</h1>

      <div className="row justify-content-center text-center">
        <div className="col-sm-6 bg-primary text-white">
          <div className="container pt-5">
            <h1 className="text-center text-dark">Cote Management</h1>

            <div className="btn-group-vertical mt-5">
              <button
                type="button"
                className="btn btn-dark mb-3"
                onClick={() => handleClick(<SoumissionSent />)}
              >
                Soumission reçue
              </button>
              <button
                type="button"
                className="btn btn-dark mb-3"
                onClick={() => handleClick(<SoumissionDone />)}
              >
                Soumission traitée
              </button>
            </div>
          </div>
        </div>

        {currentDisplay}
      </div>

      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-auto">
            <button type="button" className="btn btn-primary mb-2">
              Revenir à l'accueil adminHome
            </button>
          </div>
          <div className="col-auto">
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
