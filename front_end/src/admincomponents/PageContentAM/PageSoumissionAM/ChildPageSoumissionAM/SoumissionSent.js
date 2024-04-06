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
      <div className="container pt-5 text-center">
        <h1>Soumissions non gérées</h1>
        <ul style={{ padding: "10px PageLogin.js" }}>
          {soumissions.map((soumission) => (
            <li key={soumission.id} className="list-group-item" style={{ marginBottom: "10px" }}>
              <div className="d-flex justify-content-between align-items-center">
                <button
                  onClick={() => handleSoumissionClick(soumission.id)}
                  className="btn btn-primary mr-3"
                  style={{ border: "2px solid #007bff" }}
                >
                  {soumission.nom} {soumission.prenom} - {soumission.dateDemenagement}
                  {/* Afficher DisplaySoumissionsEnt à côté de la soumission cliquée */}
                  {selectedSoumissionId === soumission.id && (
                    <DisplaySoumissionsEnt soumissionId={selectedSoumissionId} />
                  )}
                </button>
                
              </div>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Bouton Cancel */}
      {selectedSoumissionId && (
        <div className="container text-center mt-3">
          <button className="btn btn-danger mr-2" onClick={handleCancelClick} style={{ border: "2px solid #007bff" }}>
            Cancel
          </button>
          {/* Bouton Valider */}
          {/* <button className="btn btn-primary" onClick={handleGestionSoumissionAdd}>
            Valider
          </button> */}
        </div>
      )}
    </div>
  );
};

export default SoumissionsEnt;
