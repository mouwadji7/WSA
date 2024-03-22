import React, { useState, useEffect } from 'react';
import axiosConfig from '../../../../axiosConfig';

function SoumissionSent() {
    const [soumissions, setSoumissions] = useState([]);
    const [modalData, setModalData] = useState(null);
    const [selectedVehicules, setSelectedVehicules] = useState([]); // Utiliser un tableau pour stocker les véhicules sélectionnés
    const [selectedEmployes, setSelectedEmployes] = useState([]); // Utiliser un tableau pour stocker les employés sélectionnés
    const [tacheId, setTacheId] = useState(null);
    const [vehicules, setVehicules] = useState([]);
    const [employes, setEmployes] = useState([]);
    const [showVehicules, setShowVehicules] = useState(false);
    const [showEmployes, setShowEmployes] = useState(false);

    useEffect(() => {
        // Fetch non-gérés soumissions data from API
        axiosConfig.get('/soumissions/non-geres')
            .then(response => setSoumissions(response.data))
            .catch(error => console.error('Error fetching soumissions:', error));
        
        // Fetch all vehicules from API
        axiosConfig.get('/vehicules/all')
            .then(response => setVehicules(response.data))
            .catch(error => console.error('Error fetching vehicules:', error));

        // Fetch all employes from API
        axiosConfig.get('/employes')
            .then(response => setEmployes(response.data))
            .catch(error => console.error('Error fetching employes:', error));
    }, []);

    const handleClick = (soumissionId) => {
        // Récupérer la date actuelle
        const currentDate = new Date();
    
        // Formater la date au format souhaité (par exemple : AAAA-MM-JJ-HH-mm-ss)
        const formattedDate = currentDate.toISOString().replace(/[-:.]/g, '');
    
        // Créer l'identifiant unique pour la tâche en ajoutant "ti" au début et en concaténant la date
        const uniqueTacheId = "ti" + formattedDate;
    
        // Fetch soumission details based on soumissionId and display modal
        axiosConfig.get(`/soumissions/${soumissionId}`)
            .then(response => {
                setModalData(response.data);
                // Set tacheId with the unique identifier
                setTacheId(uniqueTacheId);
            })
            .catch(error => console.error('Error fetching soumission details:', error));
    };

    const handleVehiculesClick = () => {
        // Handle click on Vehicules button
        // Show list of vehicules
        setShowVehicules(true);
    };

    const handleEmployesClick = () => {
        // Handle click on Employes button
        // Show list of employes
        setShowEmployes(true);
    };

    const handleVehiculeSelect = (vehicule) => {
        // Handle selection of vehicule
        setSelectedVehicules(prevSelectedVehicules => [...prevSelectedVehicules, vehicule]);
    };

    const handleEmployeSelect = (employe) => {
        // Handle selection of employe
        setSelectedEmployes(prevSelectedEmployes => [...prevSelectedEmployes, employe]);
    };

    const handleCreateClick = () => {
        // Perform create action with selected data
        if (selectedVehicules.length > 0 && selectedEmployes.length > 0 && tacheId) {
            const gestionSoumissionData = {
                soumissionId: modalData.id,
                tacheId: tacheId,
            };

            // Send POST request to create gestionSoumission
            axiosConfig.post('/gestionSoumissions/create', gestionSoumissionData)
                .then(response => {
                    // Handle success
                    console.log('Gestion soumission created successfully:', response.data);
                    // Reset selected values
                    setSelectedVehicules([]);
                    setSelectedEmployes([]);
                })
                .catch(error => console.error('Error creating gestion soumission:', error));
        }
    };

    const closeModal = () => {
        setModalData(null);
    };

    return (
        <div className="col-sm-6 bg-dark text-white">
            <div className="container pt-5">
                <h1>Listes des soumissions non gere et envoyes</h1>
                <ul>
                    {soumissions.map(soumission => (
                        <li key={soumission.id} onClick={() => handleClick(soumission.id)}>
                            {soumission.nom} {soumission.prenom} - {soumission.dateDemenagement}
                        </li>
                    ))}
                </ul>
            </div>
            {modalData && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <div className="modal-columns">
                            <div className="modal-column">
                                <h2>Détails du déménagement</h2>
                                <p><strong>Nom: </strong>{modalData.nom}</p>
                                <p><strong>Prénom: </strong>{modalData.prenom}</p>
                                {/* Ajoutez plus de détails selon vos besoins */}
                            </div>
                            <div className="modal-column">
                                <h2>Gérer</h2>
                                <button onClick={handleVehiculesClick}>Sélectionner Véhicules</button>
                                <button onClick={handleEmployesClick}>Sélectionner Employés</button>
                                {showVehicules && (
                                    <div>
                                        <h3>Véhicules disponibles:</h3>
                                        <ul>
                                            {vehicules.map(vehicule => (
                                                <li key={vehicule.id} onClick={() => handleVehiculeSelect(vehicule)}>
                                                    {vehicule.nom} - {vehicule.type}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {showEmployes && (
                                    <div>
                                        <h3>Employés disponibles:</h3>
                                        <ul>
                                            {employes.map(employe => (
                                                <li key={employe.id} onClick={() => handleEmployeSelect(employe)}>
                                                    {employe.nom} {employe.prenom} - {employe.email}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                <button onClick={handleCreateClick}>Créer</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
export default SoumissionSent;