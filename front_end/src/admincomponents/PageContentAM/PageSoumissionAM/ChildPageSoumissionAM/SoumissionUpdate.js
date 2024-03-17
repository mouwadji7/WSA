import React, { useState } from "react";

function SoumissionTraitee({ soumissions, setSoumissions }) {
  const [selectedId, setSelectedId] = useState("");

  const handleTraiter = (id) => {
    const SoumissionUpdate = soumissions.map((soumission) =>
      soumission.id === id ? { ...soumission, traitee: true } : soumission
    );

    setSoumissions(SoumissionUpdate);
  };

  return (
    <div>
      <h2>Soumissions Traitées</h2>
      {soumissions
        .filter((soumission) => !soumission.traitee)
        .map((soumission) => (
          <div key={soumission.id}>
            <p>
              {soumission.nom} - {soumission.details}
            </p>
            <button onClick={() => handleTraiter(soumission.id)}>
              Marquer comme traité
            </button>
          </div>
        ))}
      <div>
        <h3>Soumissions Déjà Traitées</h3>
        {soumissions
          .filter((soumission) => soumission.traitee)
          .map((soumission) => (
            <p key={soumission.id}>
              {soumission.nom} - {soumission.details}
            </p>
          ))}
      </div>
    </div>
  );
}

export default SoumissionTraitee;
