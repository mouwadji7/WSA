import React, { useState, useEffect } from "react";
import axiosConfig from "../../../../axiosConfig";
import SoumissionDoneDisplay from "./SoumissionDoneDisplay"; // Importer le composant SoumissionDoneDisplay

const SoumissionDone = () => {
  const [gestionSoumissions, setGestionSoumissions] = useState([]);
  const [soumissions, setSoumissions] = useState([]);
  const [taches, setTaches] = useState([]);
  const [selectedGestionSoumission, setSelectedGestionSoumission] =
    useState(null);

  useEffect(() => {
    fetchGestionSoumissions();
  }, []);

  const fetchGestionSoumissions = async () => {
    try {
      const response = await axiosConfig.get("/gestionSoumissions/all");
      const fetchedSoumissions = [];
      const fetchedTaches = [];

      for (const gestion of response.data) {
        const soumissionRes = await getSoumissionFromBackend(
          gestion?.soumissionId,
        );
        fetchedSoumissions.push(soumissionRes);

        const tacheRes = await getTacheFromBackend(gestion?.tacheId);
        fetchedTaches.push(tacheRes);
      }

      setSoumissions(fetchedSoumissions);
      setTaches(fetchedTaches);
      setGestionSoumissions(response.data);
    } catch (error) {
      console.error("Error fetching gestion soumissions:", error);
    }
  };

  const getSoumissionFromBackend = async (id) => {
    try {
      const response = await axiosConfig.get("/soumissions/" + id);
      return response.data;
    } catch (error) {
      console.error("Error fetching gestion soumissions:", error);
    }
  };

  const getTacheFromBackend = async (id) => {
    try {
      const response = await axiosConfig.get("/taches/" + id);
      return response.data;
    } catch (error) {
      console.error("Error fetching gestion soumissions:", error);
    }
  };

  const getSoumission = (id) => {
    const res = soumissions.find((s) => s?.id === id) || {};
    return res;
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
        <h2 className="text-center">Liste des Gestion Soumissions</h2>
        <ul>
          {gestionSoumissions?.map((gestionSoumission) => (
            <li
              key={gestionSoumission.id}
              onClick={() => handleGestionSoumissionClick(gestionSoumission)}
            >
              <p>
                Client: {getSoumission(gestionSoumission.soumissionId)?.nom}{" "}
                {getSoumission(gestionSoumission.soumissionId)?.prenom}
              </p>
              <p>
                Soumission ID: {gestionSoumission.id} -{" "}
                {gestionSoumission?.tache?.nom}
              </p>
            </li>
          ))}
        </ul>
      </div>
      {selectedGestionSoumission && (
        <SoumissionDoneDisplay gestionSoumission={selectedGestionSoumission} />
      )}
      {/* Bouton Cancel */}
      {selectedGestionSoumission && (
        <div className="container text-center mt-3">
          <button className="btn btn-danger" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default SoumissionDone;
