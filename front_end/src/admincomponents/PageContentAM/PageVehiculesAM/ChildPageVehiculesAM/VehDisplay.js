import React, { useState, useEffect } from 'react';
import axiosConfig from '../../../../axiosConfig';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function VehDisplay() {
    const [listeVehicules, setListeVehicules] = useState([]);

    useEffect(() => {
        // Appel API pour récupérer la liste des véhicules
        axiosConfig.get('/vehicules/all')
            .then(response => {
                setListeVehicules(response.data);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des véhicules:', error);
            });
    }, []); // Utilisation de la dépendance vide pour n'exécuter cet effet qu'une seule fois lors du montage du composant

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
                                    <div>Tâches assignées: {vehicle.tachesAssignes.join(', ')}</div>
                                </Tooltip>
                            }
                        >
                            <li>{vehicle.nom} - {vehicle.type}</li>
                        </OverlayTrigger>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default VehDisplay;