import React, { useState, useEffect } from "react";

function SoumissionRecue() {
  const [soumissionsRecues, setSoumissionsRecues] = useState([]);

  useEffect(() => {
    fetch("/api/Soumission")
      .then((response) => response.json())
      .then((data) => setSoumissionsRecues(data))
      .catch((error) =>
        console.error("Error fetching received submissions:", error)
      );
  }, []);

  return (
    <div className="container pt-5">
      <h1>Liste des Soumissions Reçues</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Adresse</th>
          </tr>
        </thead>
        <tbody>
          {soumissionsRecues.map((Soumission) => (
            <tr key={Soumission.id}>
              <td>{Soumission.id}</td>
              <td>{Soumission.nom}</td>
              <td>{Soumission.adresse}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SoumissionRecue;
