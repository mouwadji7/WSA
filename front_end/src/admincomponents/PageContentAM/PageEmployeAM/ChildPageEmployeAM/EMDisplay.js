import React, { useState, useEffect } from "react";
import axiosConfig from "../../../../axiosConfig";

function EMDisplay() {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axiosConfig.get("/employes");
        setEmployees([...response.data]);
      } catch (error) {
        console.error("Erreur lors de la récupération des employés:", error);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div className="bg-dark text-white">
      <div className="container pt-5">
        <h1 className="text-center text-white mb-4">Liste des employés</h1>
        <ul className="list-group">
          {employees.map((employee) => (
            <li
              key={employee.id}
              className="list-group-item bg-dark text-white mb-2"
            >
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  {employee.nom} {employee.prenom}
                </div>
                <button
                  className="btn btn-primary"
                  onClick={() => setSelectedEmployee(employee)}
                >
                  <i className="bi bi-info-circle"></i>
                </button>
              </div>
              {selectedEmployee && selectedEmployee.id === employee.id && (
                <div>
                  <div>ID: {employee.id}</div>
                  <div>Nom: {employee.nom}</div>
                  <div>Prénom: {employee.prenom}</div>
                  <div>Email: {employee.email}</div>
                  <div>Téléphone: {employee.telephone}</div>
                  <div>
                    Tâches assignées: {employee.tachesAssignes?.join(", ")}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default EMDisplay;
