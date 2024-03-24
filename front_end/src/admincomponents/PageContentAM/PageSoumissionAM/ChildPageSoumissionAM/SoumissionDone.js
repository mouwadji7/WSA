import React, { useState, useEffect } from "react";
import axiosConfig from "../../../../axiosConfig";
import SoumissionDoneDisplay from "./SoumissionDoneDisplay"; // Importer le composant SoumissionDoneDisplay

const SoumissionDone = () => {
  const [gestionSoumissions, setGestionSoumissions] = useState([]);
  const [selectedGestionSoumission, setSelectedGestionSoumission] =
    useState(null);

  useEffect(() => {
    fetchGestionSoumissions();
  }, []);

  const fetchGestionSoumissions = async () => {
    try {
      const response = await axiosConfig.get("/gestionSoumissions/all");
      setGestionSoumissions(response.data);
    } catch (error) {
      console.error("Error fetching gestion soumissions:", error);
    }
  };

  const handleGestionSoumissionClick = (gestionSoumission) => {
    setSelectedGestionSoumission(gestionSoumission);
  };

  const handleCancelClick = () => {
    setSelectedGestionSoumission(null); // Réinitialise selectedGestionSoumission à null
  };

  return (
    <div className="col-sm-6 bg-dark text-white">
      <div className="container pt-5">
        <h2>Liste des Gestion Soumissions</h2>
        <ul>
          {gestionSoumissions.map((gestionSoumission) => (
            <li
              key={gestionSoumission.id}
              onClick={() => handleGestionSoumissionClick(gestionSoumission)}
            >
              {gestionSoumission.id} - {gestionSoumission.tache.nom}
            </li>
          ))}
        </ul>
      </div>
      {selectedGestionSoumission && (
        <SoumissionDoneDisplay gestionSoumission={selectedGestionSoumission} />
      )}
      {/* Bouton Cancel */}
      {selectedGestionSoumission && (
        <button className="btn btn-danger mt-3" onClick={handleCancelClick}>
          Cancel
        </button>
      )}
    </div>
  );
};

export default SoumissionDone;
