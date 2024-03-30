import React, { useState, useEffect } from "react";
import axiosConfig from "../../../../axiosConfig";
import SoumissionDoneDisplay from "./SoumissionDoneDisplay";

const SoumissionDone = () => {
  const [gestionSoumissions, setGestionSoumissions] = useState([]);
  const [selectedGestionSoumission, setSelectedGestionSoumission] = useState(null);

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
    setSelectedGestionSoumission(null);
  };

  return (
    <div className="col-sm-6 bg-dark text-white">
      <div className="container pt-5">
        <h2 className="text-center">Liste des Gestion Soumissions</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {gestionSoumissions?.map((gestionSoumission) => (
            <li
              key={gestionSoumission.id}
              style={{ backgroundColor: "#007bff", color: "#fff", padding: "10px", marginBottom: "10px" }}
            >
              <div onClick={() => handleGestionSoumissionClick(gestionSoumission)}>
                <p>
                  Client: {gestionSoumission?.soumission?.nom} {gestionSoumission?.soumission?.prenom}
                </p>
                <p>
                  Soumission ID: {gestionSoumission.id} - {gestionSoumission?.tache?.nom}
                </p>
              </div>
              {selectedGestionSoumission && selectedGestionSoumission.id === gestionSoumission.id && (
                <div>
                  <SoumissionDoneDisplay gestionSoumission={selectedGestionSoumission} />
                  <div className="container text-center mt-3">
                    <button className="btn btn-danger" onClick={handleCancelClick}>
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SoumissionDone;
