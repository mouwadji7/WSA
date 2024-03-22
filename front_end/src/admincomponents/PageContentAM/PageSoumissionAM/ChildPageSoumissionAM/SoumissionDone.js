import React, { useState, useEffect } from 'react';
import axiosConfig from '../../../../axiosConfig';

function SoumissionDone() {
    const [gestionSoumissions, setGestionSoumissions] = useState([]);
    const [selectedSoumission, setSelectedSoumission] = useState(null);
    const [vehicules, setVehicules] = useState([]);
    const [employes, setEmployes] = useState([]);

    useEffect(() => {
        axiosConfig.get('/gestionSoumissions/all')
            .then(response => {
                setGestionSoumissions(response.data);
            })
            .catch(error => {
                console.error('Error fetching gestion soumissions:', error);
            });
    }, []);

    useEffect(() => {
        if (selectedSoumission) {
            axiosConfig.get(`/taches/${selectedSoumission.tacheId}`)
                .then(response => {
                    setVehicules(response.data.vehiculesAssignes);
                    setEmployes(response.data.employesAssignes);
                })
                .catch(error => {
                    console.error('Error fetching tache details:', error);
                });
        }
    }, [selectedSoumission]);

    const handleSoumissionClick = (soumissionId) => {
        axiosConfig.get(`/soumissions/${soumissionId}`)
            .then(response => {
                setSelectedSoumission(response.data);
            })
            .catch(error => {
                console.error('Error fetching soumission details:', error);
            });
    };

    const handleCancel = () => {
        setSelectedSoumission(null); // Met à jour l'état pour fermer le modal
    };

    const handleDelete = () => {
        if (selectedSoumission) {
            const gestionSoumissionId = selectedSoumission.id;
            axiosConfig.delete(`/gestionSoumissions/delete/${gestionSoumissionId}`)
                .then(response => {
                    // Mettre à jour la liste des gestionSoumissions après la suppression
                    setGestionSoumissions(prevGestionSoumissions => {
                        return prevGestionSoumissions.filter(gestionSoumission => gestionSoumission.id !== gestionSoumissionId);
                    });
                    // Fermer le modal
                    setSelectedSoumission(null);
                })
                .catch(error => {
                    console.error('Error deleting gestion soumission:', error);
                });
        }
    };

    return (
        <div className="col-sm-6 bg-dark text-white">
            <div className="container pt-5">
                <h1>Listes des soumissions dont le déménagement est prêt </h1>
                <ul>
                    {gestionSoumissions.map(gestionSoumission => (
                        <li key={gestionSoumission.id} onClick={() => handleSoumissionClick(gestionSoumission.soumissionId)}>
                            {gestionSoumission.soumissionId}
                        </li>
                    ))}
                </ul>
                {selectedSoumission && (
                    <div>
                        <h2>Détails de la soumission</h2>
                        <p>Soumission ID: {selectedSoumission.id}</p>
                        <p>Véhicules assignés: {vehicules.join(', ')}</p>
                        <p>Employés assignés: {employes.join(', ')}</p>
                        <button onClick={handleCancel}>Annuler</button>
                        <button onClick={handleDelete}>Supprimer</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SoumissionDone;