import React, { useState, useEffect } from "react";
import axiosConfig from "../../../../axiosConfig";

const DisplaySoumissionsEnt = ({ soumissionId }) => {
  const [soumission, setSoumission] = useState(null);
  const [selectedPage, setSelectedPage] = useState(null);
  const [vehicules, setVehicules] = useState([]);
  const [employes, setEmployes] = useState([]);
  const [tacheDetails, setTacheDetails] = useState({
    nom: "",
    description: "",
    dateDebut: "",
    dateFin: "",
    employesAssignes: [],
    vehiculesAssignes: [],
  });

  useEffect(() => {
    if (soumissionId) {
      fetchSoumission(soumissionId);
    }
  }, [soumissionId]);

  const fetchSoumission = async (id) => {
    try {
      const response = await axiosConfig.get(`/soumissions/${id}`);
      setSoumission(response.data);
    } catch (error) {
      console.error("Error fetching soumission:", error);
    }
  };

  const handlePageChange = (page) => {
    setSelectedPage(page);
  };

  const handleAddVehicule = async () => {
    try {
      const response = await axiosConfig.get("/vehicules/all");
      setVehicules(response.data);
    } catch (error) {
      console.error("Error fetching vehicles:", error);
    }
  };

  const handleAddEmploye = async () => {
    try {
      const response = await axiosConfig.get("/employes");
      setEmployes(response.data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  const handleAddToTache = async () => {
    try {
      const response = await axiosConfig.post("/gestionSoumissions/create", {
        soumissionId: soumission.id,
        tache: tacheDetails,
      });
      console.log("Gestion soumission created:", response.data);
    } catch (error) {
      console.error("Error creating gestion de soumission:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTacheDetails({ ...tacheDetails, [name]: value });
  };

  return (
    <div className="container-fluid mt-5 pt-5">
      <h1>Page Gestion des soumissions</h1>
      <div className="row">
        {/* Affichage des détails de la soumission */}
        <div className="col-sm-4 bg-primary text-white">
          {/* Code pour afficher les détails de la soumission */}
        </div>
        {/* Colonne pour ajouter un véhicule ou un employé */}
        <div className="col-sm-4 bg-dark text-white">
          <h2>Ajouter</h2>
          <button onClick={() => handlePageChange("ajouterVehicule")}>
            Ajouter un véhicule
          </button>
          <button onClick={() => handlePageChange("ajouterEmploye")}>
            Ajouter un employé
          </button>
          <button onClick={() => handlePageChange("ajouterTache")}>
            Ajouter une tâche
          </button>
        </div>
        {/* Colonne pour afficher le contenu sélectionné */}
        <div className="col-sm-4 bg-primary text-white">
          <h2>Contenu sélectionné</h2>
          {selectedPage === "ajouterVehicule" && (
            <div>
              {vehicules.map((vehicule) => (
                <div key={vehicule.id}>
                  <p>{vehicule.nom}</p>
                  <button
                    onClick={() => console.log("Ajouter à tâche:", vehicule.id)}
                  >
                    Ajouter
                  </button>
                </div>
              ))}
            </div>
          )}
          {selectedPage === "ajouterEmploye" && (
            <div>
              {employes.map((employe) => (
                <div key={employe.id}>
                  <p>{employe.nom}</p>
                  <button
                    onClick={() => console.log("Ajouter à tâche:", employe.id)}
                  >
                    Ajouter
                  </button>
                </div>
              ))}
            </div>
          )}
          {selectedPage === "ajouterTache" && (
            <div>
              <input
                type="text"
                name="nom"
                placeholder="Nom de la tâche"
                value={tacheDetails.nom}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="description"
                placeholder="Description de la tâche"
                value={tacheDetails.description}
                onChange={handleInputChange}
              />
              <input
                type="date"
                name="dateDebut"
                value={tacheDetails.dateDebut}
                onChange={handleInputChange}
              />
              <input
                type="date"
                name="dateFin"
                value={tacheDetails.dateFin}
                onChange={handleInputChange}
              />
              <button onClick={handleAddToTache}>Ajouter Tâche</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DisplaySoumissionsEnt;
