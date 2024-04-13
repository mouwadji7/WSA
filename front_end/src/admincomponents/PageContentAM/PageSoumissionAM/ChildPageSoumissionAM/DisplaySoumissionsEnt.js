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
      setSelectedPage("ajouterVehicule");
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
    const generateTache = (tacheDetails) => {
      return {
        ...tacheDetails,
        employesAssignes: tacheDetails.employesAssignes.map((em) => em.id),
        vehiculesAssignes: tacheDetails.vehiculesAssignes.map((vh) => vh.id),
      };
    };

    try {
      const response = await axiosConfig.post("/gestionSoumissions/create", {
        soumissionId: soumission.id,
        tache: generateTache(tacheDetails),
      });
      console.log("Gestion soumission created:", response.data);

      // Réinitialiser les détails de la tâche après la création réussie
      setTacheDetails({
        nom: "",
        description: "",
        dateDebut: "",
        dateFin: "",
        employesAssignes: [],
        vehiculesAssignes: [],
      });
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
      <h1 className="text-center mb-4">Page Gestion des soumissions</h1>
      <div>
              <p>Référence : {soumission.referenceNumber}</p>
              <p>Nom : {soumission.nom}</p>
              <p>Prénom : {soumission.prenom}</p>
              <p>Email : {soumission.email}</p>
              <p>Téléphone : {soumission.telephone}</p>
              <p>Adresse de départ : {soumission.adresseDepart}</p>
              <p>Adresse de destination : {soumission.adresseDestination}</p>
              <p>Date de déménagement : {soumission.dateDemenagement}</p>
              <p>Heure de déménagement : {soumission.heureDemenagement}</p>
              <p>Type d'habitation : {soumission.typeHabitation}</p>
              <p>Emplacement d'habitation : {soumission.emplacementHabitation}</p>
              <p>Chambres à charger : {soumission.chambresACharger}</p>
              <p>Gerer : {soumission.gerer ? "Oui" : "Non"}</p>
          </div>
      <div className="row justify-content-center">
        {/* Affichage des détails de la soumission */}
        <div className="col-sm-4 bg-primary text-white">
          {/* Code pour afficher les détails de la soumission */}
          <h2>Détails de la soumission</h2>
          <table title={"Voitures"} className="table table-striped">
            <thead>
              <tr>
                <th>Voitures</th>
              </tr>
            </thead>
            <tbody>
              {tacheDetails.vehiculesAssignes.map((voiture, id) => (
                <tr key={id}>
                  <td>{voiture.nom}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <table title={"Employés"} className="table table-striped">
            <thead>
              <tr>
                <th>Employés</th>
              </tr>
            </thead>
            <tbody>
              {tacheDetails.employesAssignes.map((employe, id) => (
                <tr key={id}>
                  <td>
                    {employe.nom} {employe.prenom}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Colonne pour ajouter un véhicule ou un employé */}
        <div className="col-sm-4 bg-dark text-white">
          <h2 className="text-center">Ajouter</h2>
          <div className="d-grid gap-2">
            <button
              className="btn btn-primary mb-3"
              onClick={() => {
                handleAddVehicule();
                handlePageChange("ajouterVehicule");
              }}
            >
              Ajouter un véhicule
            </button>
            <button
              className="btn btn-primary mb-3"
              onClick={() => {
                handleAddEmploye();
                handlePageChange("ajouterEmploye");
              }}
            >
              Ajouter un employé
            </button>
            <button
              className="btn btn-primary mb-3"
              onClick={() => handlePageChange("ajouterTache")}
            >
              Ajouter une tâche
            </button>
          </div>
        </div>
        {/* Colonne pour afficher le contenu sélectionné */}
        <div className="col-sm-4 bg-primary text-white">
          <h2 className="text-center">Contenu sélectionné</h2>
          {selectedPage === "ajouterVehicule" && (
            <div>
              {vehicules.map((vehicule) => (
                <div key={vehicule.id}>
                  <p>{vehicule.nom}</p>
                  <button
                    className="btn btn-success"
                    onClick={() =>
                      setTacheDetails((prevState) => ({
                        ...prevState,
                        vehiculesAssignes: [
                          ...prevState.vehiculesAssignes.filter(
                            (data) => data.id !== vehicule.id
                          ),
                          vehicule,
                        ],
                      }))
                    }
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
                  <p>
                    {employe.nom} {employe.prenom}
                  </p>
                  <button
                    className="btn btn-success"
                    onClick={() =>
                      setTacheDetails((prevState) => ({
                        ...prevState,
                        employesAssignes: [
                          ...prevState.employesAssignes.filter(
                            (emp) => emp.id !== employe.id
                          ),
                          employe,
                        ],
                      }))
                    }
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
              <button
                className="btn btn-success mt-3"
                onClick={handleAddToTache}
              >
                Ajouter Tâche
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DisplaySoumissionsEnt;

