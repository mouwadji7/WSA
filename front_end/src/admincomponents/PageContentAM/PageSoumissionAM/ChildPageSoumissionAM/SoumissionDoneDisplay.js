import React, { useState, useEffect } from "react";
import axiosConfig from "../../../../axiosConfig";

const SoumissionDoneDisplay = ({ gestionSoumission }) => {
  const [soumission, setSoumission] = useState(null);
  const [tache, setTache] = useState(null);
  const [vehicules, setVehicules] = useState([]);
  const [employes, setEmployes] = useState([]);

  useEffect(() => {
    const fetchSoumission = async (id) => {
      try {
        const response = await axiosConfig.get(`/soumissions/${id}`);
        setSoumission(response.data);
        // Récupérer la tâche associée à la soumission
        const tacheId = response.data.tacheId;
        fetchTache(gestionSoumission.tacheId);
      } catch (error) {
        console.error("Error fetching soumission:", error);
      }
    };

    if (gestionSoumission) {
      fetchSoumission(gestionSoumission.soumissionId);
    }
  }, [gestionSoumission]); // Ajout de soumissionId comme dépendance

  const fetchTache = async (id) => {
    try {
      const response = await axiosConfig.get(`/taches/${id}`);
      setTache(response.data);
      // Récupérer les détails des véhicules assignés à la tâche
      const vehiculesIds = response.data.vehiculesAssignes;
      fetchVehicules(vehiculesIds);
      // Récupérer les détails des employés assignés à la tâche
      const employesIds = response.data.employesAssignes;
      fetchEmployes(employesIds);
    } catch (error) {
      console.error("Error fetching tache:", error);
    }
  };

  const fetchVehicules = async (ids) => {
    try {
      const promises = ids.map((id) => axiosConfig.get(`/vehicules/${id}`));
      const responses = await Promise.all(promises);
      const vehiculesData = responses.map((response) => response.data);
      setVehicules(vehiculesData);
    } catch (error) {
      console.error("Error fetching vehicules:", error);
    }
  };

  const fetchEmployes = async (ids) => {
    try {
      const promises = ids.map((id) => axiosConfig.get(`/employes/${id}`));
      const responses = await Promise.all(promises);
      const employesData = responses.map((response) => response.data);
      setEmployes(employesData);
    } catch (error) {
      console.error("Error fetching employes:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Détails de la Soumission</h2>
      {soumission && (
        <div>
          <p>Référence : {soumission.referenceNumber}</p>
          {/* Afficher d'autres détails de la soumission */}
        </div>
      )}
      <h2 className="text-center">Détails de la Tâche</h2>
      {tache && (
        <div>
          <p>Nom de la tâche : {tache.nom}</p>
          <p>Description : {tache.description}</p>
          <p>Date de début : {tache.dateDebut}</p>
          <p>Date de fin : {tache.dateFin}</p>
        </div>
      )}
      <h2 className="text-center">Véhicules Assignés</h2>
      <div className="row justify-content-center">
        {vehicules.map((vehicule) => (
          <div key={vehicule.id} className="col-sm-4">
            <p>Nom : {vehicule.nom}</p>
            <p>Type : {vehicule.type}</p>
          </div>
        ))}
      </div>
      <h2 className="text-center">Employés Assignés</h2>
      <div className="row justify-content-center">
        {employes.map((employe) => (
          <div key={employe.id} className="col-sm-4">
            <p>Nom : {employe.nom}</p>
            <p>Prénom : {employe.prenom}</p>
            {/* Afficher d'autres détails de l'employé si nécessaire */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SoumissionDoneDisplay;
