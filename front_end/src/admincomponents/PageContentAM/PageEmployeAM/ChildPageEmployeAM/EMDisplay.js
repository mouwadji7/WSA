import React, { useState, useEffect, useRef } from "react";
import axiosConfig from "../../../../axiosConfig";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

function EMDisplay() {
  const [employees, setEmployees] = useState([]);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const tooltipRef = useRef();

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

  const handleMouseMove = (event) => {
    setTooltipPosition({ x: event.pageX, y: event.pageY });
  };

  return (
    <div className="col-sm-6 bg-dark text-white" onMouseMove={handleMouseMove}>
      <div className="container pt-5">
        <h1 className="text-white mb-4">Liste des employés</h1>
        <ul className="list-group">
          {employees.map((employee) => (
            <li
              key={employee.id}
              className="list-group-item bg-dark text-white mb-2"
            >
              <OverlayTrigger
                trigger="hover"
                placement="right"
                overlay={
                  <Tooltip
                    id={`tooltip-${employee.id}`}
                    style={{
                      left: `${tooltipPosition.x}px`,
                      top: `${tooltipPosition.y}px`,
                    }}
                    ref={tooltipRef}
                  >
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
                <div>
                  {employee.nom} {employee.prenom}
                </div>
              </OverlayTrigger>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default EMDisplay;
