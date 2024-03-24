import React, { useState, useEffect } from "react";
import axiosConfig from "../../../../axiosConfig";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { BsTrash, BsPencil } from "react-icons/bs"; // Import des icônes pour les boutons de suppression et de modification

function VehDisplay() {
  const [listeVehicules, setListeVehicules] = useState([]);

  useEffect(() => {
    // Appel API pour récupérer la liste des véhicules
    axiosConfig
      .get("/vehicules/all")
      .then((response) => {
        setListeVehicules(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des véhicules:", error);
      });
  }, []); // Utilisation de la dépendance vide pour n'exécuter cet effet qu'une seule fois lors du montage du composant

  // Fonction pour supprimer un véhicule
  const handleDelete = (id) => {
    axiosConfig
      .delete(`/vehicules/delete/${id}`)
      .then((response) => {
        console.log("Véhicule supprimé avec succès");
        // Mettre à jour la liste des véhicules après suppression
        setListeVehicules((prevList) =>
          prevList.filter((vehicle) => vehicle.id !== id),
        );
      })
      .catch((error) => {
        console.error("Erreur lors de la suppression du véhicule:", error);
      });
  };

  // Fonction pour modifier un véhicule (rediriger vers une page de modification)
  const handleEdit = (id) => {
    // Rediriger vers la page de modification du véhicule avec l'ID spécifié
    // Vous pouvez implémenter cela en utilisant react-router-dom ou toute autre méthode de routage
  };

  return (
    <div className="col-sm-6 bg-dark text-white">
      <div className="container pt-5">
        <h1>Liste des Véhicules</h1>
        <ul>
          {listeVehicules.map((vehicle, index) => (
            <OverlayTrigger
              key={index}
              placement="right"
              overlay={
                <Tooltip id={`tooltip-${index}`}>
                  <div>ID: {vehicle.id}</div>
                  <div>Nom: {vehicle.nom}</div>
                  <div>Type: {vehicle.type}</div>
                  <div>
                    Tâches assignées: {vehicle.tachesAssignes.join(", ")}
                  </div>
                  {/* Ajoutez d'autres informations si nécessaire */}
                </Tooltip>
              }
            >
              <li>
                {vehicle.nom} - {vehicle.type}
                <button onClick={() => handleEdit(vehicle.id)}>
                  <BsPencil />
                </button>{" "}
                {/* Bouton Modifier */}
                <button onClick={() => handleDelete(vehicle.id)}>
                  <BsTrash />
                </button>{" "}
                {/* Bouton Supprimer */}
              </li>
            </OverlayTrigger>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default VehDisplay;
