import React, { useState } from 'react';
import AxiosConfig from './httpService.js'; // Assurez-vous que le chemin d'importation est correct

function VehSorter() {
    const [filteredVehicules, setFilteredVehicules] = useState([]);
    const [noResultsMessage, setNoResultsMessage] = useState('');

    const handleShowAssigned = () => {
        AxiosConfig.get('/vehicules/assigned') // L'endpoint API pour les véhicules assignés
            .then(response => {
                setFilteredVehicules(response.data);
                setNoResultsMessage(response.data.length === 0 ? 'Aucun véhicule assigné trouvé.' : '');
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des véhicules assignés:', error);
                setNoResultsMessage('Erreur lors de la récupération des véhicules.');
            });
    };

    const handleShowUnassigned = () => {
        AxiosConfig.get('/vehicules/unassigned') // L'endpoint API pour les véhicules non assignés
            .then(response => {
                setFilteredVehicules(response.data);
                setNoResultsMessage(response.data.length === 0 ? 'Aucun véhicule non assigné trouvé.' : '');
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des véhicules non assignés:', error);
                setNoResultsMessage('Erreur lors de la récupération des véhicules.');
            });
    };

    return (
        <div className="col-sm-6 bg-dark text-white">
            <div className="container pt-5">
                <h2>Trier les Véhicules</h2>
                <div className="buttons">
                    <button onClick={handleShowAssigned} className="btn btn-dark m-2">Véhicules Assignés</button>
                    <button onClick={handleShowUnassigned} className="btn btn-light m-2">Véhicules Non Assignés</button>
                </div>
                {filteredVehicules.length > 0 ? (
                    <ul className="list-group mt-3">
                        {filteredVehicules.map((vehicle, index) => (
                            <li key={index} className="list-group-item">
                                ID: {vehicle.id}, Type: {vehicle.type}, Assigné: {vehicle.assigne ? 'Oui' : 'Non'}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="mt-3">{noResultsMessage}</p>
                )}
            </div>
        </div>
    );
}

export default VehSorter;
