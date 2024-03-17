import React, { useState, useEffect } from "react";

function SoumissionsEnAttente() {
  const [soumissionsEnAttente, setSoumissionsEnAttente] = useState([]);

  useEffect(() => {
    // Fetch the submissions that are awaiting processing
    fetch("/api/Soumission")
      .then((response) => response.json())
      .then((data) => setSoumissionsEnAttente(data))
      .catch((error) =>
        console.error(
          "Erreur lors de la récupération des soumissions en attente:",
          error
        )
      );
  }, []);

  return (
    <div className="container pt-5">
      <h1>Soumissions En Attente de Déménagement</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom du client</th>
            <th>Date de déménagement</th>
          </tr>
        </thead>
        <tbody>
          {soumissionsEnAttente.map((Soumission) => (
            <tr key={Soumission.id}>
              <td>{Soumission.id}</td>
              <td>{Soumission.clientName}</td>
              <td>{Soumission.movingDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SoumissionsEnAttente;
