import React from "react";
import { FaRegNewspaper, FaTasks, FaChartBar } from "react-icons/fa";

function PrincipalePageAM() {
  return (
    <main className="container-fluid mt-5 pt-5">
      <h1 className="text-center mb-5">
        Bienvenue sur la Page Principale pour les Administrateurs
      </h1>

      <div className="row">
        <div className="col-md-4">
          <div className="card mt-4 bg-primary text-white rounded">
            <div className="card-body text-center">
              <FaRegNewspaper className="display-4 mb-3 text-warning" />
              <h5 className="card-title">Nouvelles du Jour</h5>
              <p className="card-text">
                Il n'y a pas de nouvelles aujourd'hui. Restez à l'écoute pour
                les mises à jour.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mt-4 bg-primary text-white rounded">
            <div className="card-body text-center">
              <FaTasks className="display-4 mb-3 text-warning" />
              <h5 className="card-title">Tâches à Faire</h5>
              <p className="card-text">
                Il n'y a pas de tâches à faire pour l'instant. Assurez-vous de
                vérifier régulièrement les mises à jour.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mt-4 bg-primary text-white rounded">
            <div className="card-body text-center">
              <FaChartBar className="display-4 mb-3 text-warning" />
              <h5 className="card-title">Statistiques de la Semaine</h5>
              <p className="card-text">
                Voici un aperçu des statistiques de la semaine. Découvrez les
                performances de votre équipe.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col text-center">
          <div className="lion-animation">
            <img src="/image/lionpp.png" alt="Lion " />
          </div>
          <h2 className="mt-3">Découvrez notre équipe de choc</h2>
          <p className="lead">
            Nos administrateurs travaillent dur pour vous fournir le meilleur
            service possible.
          </p>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col text-center">
          <div className="fireworks-animation">
            <img src="/image/hero.png" alt="hero celebration" />
          </div>
          <h2 className="mt-3">Célébrons nos réalisations</h2>
          <p className="lead">
            Notre équipe a accompli beaucoup cette semaine. Félicitations à
            tous!
          </p>
        </div>
      </div>
    </main>
  );
}

export default PrincipalePageAM;
