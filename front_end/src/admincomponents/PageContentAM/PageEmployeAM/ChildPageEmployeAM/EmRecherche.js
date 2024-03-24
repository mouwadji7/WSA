// Importez le composant useState pour gérer l'état des actions
import React, { useState, useEffect } from "react";
import axiosConfig from "../../../../axiosConfig";

function EmRecherche() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [taskDetails, setTaskDetails] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axiosConfig.get("/employes");
      setSearchResults(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des employés:", error);
    }
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Effectuer la recherche
    const filteredResults = searchResults.filter(
      (employee) =>
        employee.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.tachesAssignes.includes(searchTerm),
    );
    // Mettre à jour les résultats de la recherche
    setSearchResults(filteredResults);
  };

  const handleTaskDetails = async (taskId) => {
    try {
      const response = await axiosConfig.get(`/taches/${taskId}`);
      setTaskDetails(response.data);
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des détails de la tâche:",
        error,
      );
    }
  };

  const deleteTask = async (taskId) => {
    try {
      setLoading(true);
      await axiosConfig.delete(`/taches/delete/${taskId}`);
      // Rafraîchir les résultats après la suppression
      fetchEmployees();
    } catch (error) {
      console.error("Erreur lors de la suppression de la tâche:", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteEmployee = async (employeeId) => {
    try {
      setLoading(true);
      await axiosConfig.delete(`/employes/${employeeId}`);
      // Rafraîchir les résultats après la suppression
      fetchEmployees();
    } catch (error) {
      console.error("Erreur lors de la suppression de l'employé:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateEmployee = async (employeeId, newData) => {
    try {
      setLoading(true);
      await axiosConfig.put(`/employes/${employeeId}`, newData);
      // Rafraîchir les résultats après la modification
      fetchEmployees();
    } catch (error) {
      console.error("Erreur lors de la mise à jour de l'employé:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="col-sm-6 bg-dark text-white">
      <div className="container pt-5">
        <h1 className="text-white mb-4">Recherche d'employés</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={searchTerm}
            onChange={handleChange}
            placeholder="Rechercher par nom, ID ou tâche"
            className="form-control mb-3"
          />
          <button type="submit" className="btn btn-primary mb-3">
            Rechercher
          </button>
        </form>
        <ul className="list-group">
          {searchResults.map((employee) => (
            <li
              key={employee.id}
              className="list-group-item bg-dark text-white mb-2"
              onClick={() => handleTaskDetails(employee.id)}
            >
              <div>Nom: {employee.nom}</div>
              <div>Prénom: {employee.prenom}</div>
              <div>Email: {employee.email}</div>
              <div>Téléphone: {employee.telephone}</div>
              <div>
                Tâches assignées:{" "}
                {employee.tachesAssignes.map((taskId) => (
                  <button
                    key={taskId}
                    onClick={() => handleTaskDetails(taskId)}
                    className="btn btn-link"
                  >
                    {taskId}
                  </button>
                ))}
              </div>
              {taskDetails.id && (
                <div>
                  <h5>Détails de la tâche:</h5>
                  <div>Nom: {taskDetails.nom}</div>
                  <div>Description: {taskDetails.description}</div>
                  <div>Date de début: {taskDetails.dateDebut}</div>
                  <div>Date de fin: {taskDetails.dateFin}</div>
                  {/* Afficher d'autres détails de la tâche si nécessaire */}

                  {/* Ajout des boutons de suppression de tâche et d'annulation */}
                  <div>
                    <button onClick={() => deleteTask(taskDetails.id)}>
                      Supprimer Tâche
                    </button>
                    <button onClick={() => setTaskDetails({})}>Annuler</button>
                  </div>
                </div>
              )}
              <button onClick={() => deleteEmployee(employee.id)}>
                Supprimer Employé
              </button>
              {/* Bouton de suppression d'employé */}
              <button
                onClick={() =>
                  updateEmployee(employee.id, {
                    /* Nouvelles données d'employé */
                  })
                }
              >
                Modifier Employé
              </button>
              {/* Bouton de modification d'employé */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default EmRecherche;
