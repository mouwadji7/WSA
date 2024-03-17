import React from "react";

const soumissionsTraitees = [
  { id: 1, nom: "Client 1", status: "traité" },
  { id: 2, nom: "Client 2", status: "traité" },
];

function SoumissionTraitee() {
  const handleTaskAssignment = (soumissionId) => {
    console.log("Assigning tasks for soumission ID:", soumissionId);
  };

  return (
    <div className="container pt-5">
      <h1>Liste des Soumissions Traitées</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {soumissionsTraitees.map((Soumission) => (
            <tr key={Soumission.id}>
              <td>{Soumission.id}</td>
              <td>{Soumission.nom}</td>
              <td>
                <button onClick={() => handleTaskAssignment(soumission.id)}>
                  Gérer les Tâches
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SoumissionTraitee;
