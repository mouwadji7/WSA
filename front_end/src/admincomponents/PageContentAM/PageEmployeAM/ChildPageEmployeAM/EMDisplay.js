import React, { useState, useEffect } from 'react';
import axiosConfig from '../../../../axiosConfig';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

function EMDisplay() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axiosConfig.get('/api/employes')
      .then(response => {
        setEmployees(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des employés:', error);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-white mb-4">Liste des employés</h1>
      <ul className="list-group">
        {employees.map(employee => (
          <li key={employee.id} className="list-group-item bg-dark text-white mb-2">
            <OverlayTrigger
              placement="right"
              overlay={
                <Tooltip id={`tooltip-${employee.id}`}>
                  <div>ID: {employee.id}</div>
                  <div>Nom: {employee.nom}</div>
                  <div>Prénom: {employee.prenom}</div>
                  <div>Email: {employee.email}</div>
                  <div>Téléphone: {employee.telephone}</div>
                  <div>Tâches assignées: {employee.tachesAssignes.join(', ')}</div>
                </Tooltip>
              }
            >
              <div>{employee.nom} {employee.prenom}</div>
            </OverlayTrigger>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EMDisplay;