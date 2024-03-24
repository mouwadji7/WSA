import React, { useState, useEffect } from "react";
import axiosConfig from "../../../../axiosConfig";
import DisplaySoumissionsEnt from "./DisplaySoumissionsEnt";

const SoumissionsEnt = () => {
  const [soumissions, setSoumissions] = useState([]);
  const [selectedSoumissionId, setSelectedSoumissionId] = useState(null);

  useEffect(() => {
    fetchSoumissionsNonGerees();
  }, []);

  const fetchSoumissionsNonGerees = async () => {
    try {
      const response = await axiosConfig.get("/soumissions/non-geres");
      setSoumissions(response.data);
    } catch (error) {
      console.error("Error fetching soumissions:", error);
    }
  };

  const handleSoumissionClick = (soumissionId) => {
    setSelectedSoumissionId(soumissionId);
  };

  const handleCancelClick = () => {
    setSelectedSoumissionId(null); // Réinitialise selectedSoumissionId à null
  };

  return (
    <div className="col-sm-6 bg-dark text-white">
      <div className="container pt-5">
        <h1>Soumissions non gérées</h1>
        <ul>
          {soumissions.map((soumission) => (
            <li
              key={soumission.id}
              onClick={() => handleSoumissionClick(soumission.id)}
            >
              {soumission.nom} {soumission.prenom} -{" "}
              {soumission.dateDemenagement}
            </li>
          ))}
        </ul>
      </div>
      {/* Affiche DisplaySoumissionsEnt si une soumission est sélectionnée */}
      {selectedSoumissionId && (
        <DisplaySoumissionsEnt soumissionId={selectedSoumissionId} />
      )}
      {/* Bouton Cancel */}
      {selectedSoumissionId && (
        <button className="btn btn-danger mt-3" onClick={handleCancelClick}>
          Cancel
        </button>
      )}
    </div>
  );
};

export default SoumissionsEnt;
