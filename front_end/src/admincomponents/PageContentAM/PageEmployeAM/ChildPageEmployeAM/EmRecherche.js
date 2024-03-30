import React, { useEffect, useState } from "react";
import axiosConfig from "../../../../axiosConfig";

function EmRecherche() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [taskDetails, setTaskDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage] = useState(5); // Nombre d'employés par page

  useEffect(() => {
    fetchEmployees();
  }, [currentPage]); // Rafraîchir les employés chaque fois que la page actuelle change

  // Fonction pour récupérer la liste des employés
  const fetchEmployees = async () => {
    try {
      const response = await axiosConfig.get("/employes");
      setSearchResults(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des employés:", error);
    }
  };

  // Calculer l'index du premier et du dernier employé sur la page actuelle
  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = searchResults.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );

  // Fonction pour changer de page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Fonction pour gérer le changement dans le champ de recherche
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Fonction pour soumettre la recherche
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Effectuer la recherche
    setLoading(true);
    try {
      const response = await axiosConfig.get("/employes");
      const filteredResults = await response.data.filter(
        (employee) =>
          employee.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
          employee.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
          employee.tachesAssignes.includes(searchTerm),
      );
      // Mettre à jour les résultats de la recherche
      setSearchResults(filteredResults);
    } catch (error) {
      console.error("Erreur lors de la récupération des employés:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fonction pour récupérer les détails d'une tâche
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

  // Fonction pour supprimer une tâche
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

  return (
    <div className="bg-dark text-white">
      <div className="container pt-5">
        <h1 className="text-center text-white mb-4">Recherche d'employés</h1>
        {/* Formulaire de recherche */}
        <form
          onSubmit={handleSubmit}
          className="d-flex flex-column align-items-center"
        >
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
        {/* Liste des employés */}
        <ul className="list-group">
          {searchResults?.map((employee) => (
            <li
              key={employee.id}
              className="list-group-item bg-dark text-white mb-2 d-flex justify-content-between align-items-center"
              onClick={() => handleTaskDetails(employee.id)}
            >
              {/* Composant Employe pour chaque employé */}
              <Employe
                employee={employee}
                fetchEmployees={fetchEmployees}
                setLoading={setLoading}
              />
              <div>
                {/* Afficher le nombre de tâches assignées et leurs IDs */}
                Tâches assignées: {employee?.tachesAssignes?.length}
                {employee?.tachesAssignes?.map((taskId) => (
                  <button
                    key={taskId}
                    onClick={() => handleTaskDetails(taskId)}
                    className="btn btn-link"
                  >
                    {taskId}
                  </button>
                ))}
              </div>
              {/* Afficher les détails de la tâche si disponibles */}
              {taskDetails.id && (
                <div>
                  <h5>Détails de la tâche:</h5>
                  <div>Nom: {taskDetails.nom}</div>
                  <div>Description: {taskDetails.description}</div>
                  <div>Date de début: {taskDetails.dateDebut}</div>
                  <div>Date de fin: {taskDetails.dateFin}</div>
                  {/* Ajout des boutons de suppression de tâche et d'annulation */}
                  <div>
                    <button className="btn btn-danger" onClick={() => deleteTask(taskDetails.id)}>
                      Supprimer Tâche
                    </button>
                    <button className="btn btn-secondary" onClick={() => setTaskDetails({})}>Annuler</button>
                  </div>
                </div>
              )}
              {/* Bouton de modification d'employé */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Employe({ employee, fetchEmployees, setLoading }) {
  const [employe, setEmploye] = useState(employee);

  // Fonction pour supprimer un employé
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

  // Fonction pour mettre à jour les informations d'un employé
  const updateEmployee = async (employeeId, newData) => {
    try {
      setLoading(true);
      await axiosConfig.put(`/employes/${employeeId}`, newData);
      fetchEmployees();
    } catch (error) {
      console.error("Erreur lors de la mise à jour de l'employé:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ marginBottom: '10px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
      {/* Champs de saisie pour les informations de l'employé */}
      <div style={{ marginBottom: '5px' }}>
        <span style={{ marginRight: '10px', fontWeight: 'bold' }}>Nom:</span>
        <input
          type={"text"}
          value={employe.nom}
          onChange={(e) => setEmploye((v) => ({ ...v, nom: e.target.value }))}
        />
      </div>
      <div style={{ marginBottom: '5px' }}>
        <span style={{ marginRight: '10px', fontWeight: 'bold' }}>Prénom:</span>
        <input
          type={"text"}
          value={employe.prenom}
          onChange={(e) => setEmploye((v) => ({ ...v, prenom: e.target.value }))}
        />
      </div>
      <div style={{ marginBottom: '5px' }}>
        <span style={{ marginRight: '10px', fontWeight: 'bold' }}>Email:</span>
        <input
          type={"email"}
          value={employe.email}
          onChange={(e) => setEmploye((v) => ({ ...v, email: e.target.value }))}
        />
      </div>
      <div style={{ marginBottom: '5px' }}>
        <span style={{ marginRight: '10px', fontWeight: 'bold' }}>Téléphone:</span>
        <input
          type={"text"}
          value={employe.telephone}
          onChange={(e) => setEmploye((v) => ({ ...v, telephone: e.target.value }))}
        />
      </div>

      {/* Bouton de suppression d'employé */}
      <button style={{ marginRight: '10px', padding: '5px 10px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '5px' }} onClick={() => deleteEmployee(employe.id)}>
        Supprimer Employé
      </button>
      {/* Bouton de modification d'employé */}
      <button style={{ padding: '5px 10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px' }} onClick={() => updateEmployee(employe.id, employe)}>
        Modifier Employé
      </button>
    </div>
  );
}

export default EmRecherche;
