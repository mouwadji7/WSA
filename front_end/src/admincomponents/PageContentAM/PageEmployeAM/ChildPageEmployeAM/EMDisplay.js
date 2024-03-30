import React, { useState, useEffect } from "react";
import axiosConfig from "../../../../axiosConfig";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

function EMDisplay() {
  const [employees, setEmployees] = useState([]);

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
    <div className=" bg-dark text-white ">
      <div className="container pt-5">
        <h1 className="text-center text-white mb-4">Liste des employés</h1>
        <ul className="list-group">
          {employees.map((employee) => (
            <li
              key={employee.id}
              className="list-group-item bg-dark text-white mb-2 d-flex justify-content-between align-items-center"
            >
              <div>
                {employee.nom} {employee.prenom}
              </div>
              <OverlayTrigger
                placement="right"
                overlay={
                  <Tooltip id={`tooltip-${employee.id}`}>
                    <div>ID: {employee.id}</div>
                    <div>Nom: {employee.nom}</div>
                    <div>Prénom: {employee.prenom}</div>
                    <div>Email: {employee.email}</div>
                    <div>Téléphone: {employee.telephone}</div>
                    <div>
                      Tâches assignées: {employee.tachesAssignes?.join(", ")}
                    </div>
                  </Tooltip>
                }
              >
                <i className="bi bi-info-circle"></i>
              </OverlayTrigger>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default EMDisplay;
