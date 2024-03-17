import React, { useEffect, useState } from "react";
import axios from "./httpService.js"; // Assurez-vous que le chemin d'importation est correct

function VehDisplay() {
  const [listeVehicules, setListeVehicules] = useState([]);

  useEffect(() => {
    axios
      .get("/vehicules")
      .then((response) => {
        setListeVehicules(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des véhicules:", error);
      });
  }, []);

  return (
    <div className="col-sm-6 bg-dark text-white">
      <div className="container pt-5">
        <h2>Liste des Véhicules</h2>
        {listeVehicules.length > 0 ? (
          listeVehicules.map((vehicule, index) => (
            <div key={index}>
              <p>ID: {vehicule.id}</p>
              <p>Type: {vehicule.type}</p>
              {/* Autres propriétés du véhicule */}
            </div>
          ))
        ) : (
          <p>Aucun véhicule trouvé.</p>
        )}
      </div>
    </div>
  );
}

export default VehDisplay;
