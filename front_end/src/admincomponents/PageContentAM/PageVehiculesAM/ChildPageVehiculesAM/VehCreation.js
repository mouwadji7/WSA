import React, { useState } from "react";
import axios from "./httpService.js"; // Assurez-vous que le chemin d'importation est correct

function VehCreation({ setListeVehicules }) {
  const [vehicleID, setVehicleID] = useState("");
  const [type, setType] = useState("");
  // Ajoutez d'autres états pour les propriétés du véhicule si nécessaire

  const handleSubmit = (event) => {
    event.preventDefault();

    const newVehicle = {
      id: vehicleID, // Assurez-vous que le modèle de données correspond au backend
      type: type,
      // Ajoutez les autres propriétés du véhicule ici
    };

    axios
      .post("/vehicules", newVehicle)
      .then((response) => {
        // Ajoutez le nouveau véhicule à la liste
        setListeVehicules((prev) => [...prev, response.data]);
        // Réinitialisez les champs
        setVehicleID("");
        setType("");
        // Réinitialisez d'autres champs si nécessaire
      })
      .catch((error) => {
        console.error("Erreur lors de la création du véhicule:", error);
      });
  };

  return (
    <div className="col-sm-6 bg-dark text-white">
      <div className="container pt-5">
        <h2>Créer un nouveau véhicul</h2>
        <form onSubmit={handleSubmit}>
          {/* Champs de formulaire pour les propriétés du véhicule */}
          <div>
            <label>ID du Véhicule:</label>
            <input
              type="text"
              value={vehicleID}
              onChange={(e) => setVehicleID(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Type de Véhicule:</label>
            <input
              type="text"
              value={type}
              onChange={(e) => setType(e.target.value)}
              required
            />
          </div>
          {/* Ajoutez d'autres champs pour les propriétés du véhicule */}
          <button type="submit">Créer Véhicule</button>
        </form>
      </div>
    </div>
  );
}

export default VehCreation;
