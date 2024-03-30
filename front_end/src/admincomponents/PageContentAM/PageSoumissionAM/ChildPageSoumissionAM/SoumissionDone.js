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
      response.data.map( async (s) => {
          let soumissionRes = await getSoumissionFromBackend(s?.soumissionId)
          setSoumissions(v => [...v, soumissionRes])

          let tacheRes = await getTacheFromBackend(s?.tacheId)
          setTaches(v => [...v, tacheRes])
        }
      );
      setGestionSoumissions(response.data);
    } catch (error) {
      console.error("Error fetching gestion soumissions:", error);
    }
  };


  const getSoumissionFromBackend = async (id) => {
    try {
      const response = await axiosConfig.get("/soumissions/"+id);
      return await response.data;
    } catch (error) {
      console.error("Error fetching gestion soumissions:", error);
    }
  }

  const getTacheFromBackend = async (id) => {
    try {
      const response = await axiosConfig.get("/taches/"+id);
      return await response.data;
    } catch (error) {
      console.error("Error fetching gestion soumissions:", error);
    }
  }

  const getSoumission = (id) => {
    const res = soumissions.filter(s => s?.id == id );
    if ( res.length == 0 ) {
      return {}
    }else {
      return res[0];
    }
  }

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
          {gestionSoumissions?.map((gestionSoumission) => (
            <li
              key={gestionSoumission.id}
              onClick={() => handleGestionSoumissionClick(gestionSoumission)}
            >
              <p>Client: {getSoumission(gestionSoumission.soumissionId)?.nom} { getSoumission(gestionSoumission.soumissionId)?.prenom}</p>
              <p>Soumission ID: {gestionSoumission.id} - {gestionSoumission?.tache?.nom}</p>
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
