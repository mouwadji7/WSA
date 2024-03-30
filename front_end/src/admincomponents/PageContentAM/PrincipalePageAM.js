import React from "react";

function PrincipalePageAM() {
  return (
    <main className="container-fluid mt-5 pt-5">
      <h1 className="text-center mb-5">
        Page Principale Pour les Administrateurs
      </h1>

      <div className="mt-4 p-5 bg-primary text-center text-white rounded">
        <p>Pas de nouvelles aujourd'hui</p>
      </div>

      <div className="mt-4 p-5 bg-primary text-center text-white rounded">
        <p>Pas de tâches à faire pour l'instant</p>
      </div>

      <div className="mt-4 p-5 bg-primary text-center text-white rounded">
        <p>Statistiques de la Semaine</p>
      </div>
    </main>
  );
}

export default PrincipalePageAM;
