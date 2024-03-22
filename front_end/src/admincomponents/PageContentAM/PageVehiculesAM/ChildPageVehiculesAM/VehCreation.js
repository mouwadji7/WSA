import React, { useState } from 'react';
import axiosConfig from '../../../../axiosConfig';

function VehCreation() {
    const [nom, setNom] = useState('');
    const [type, setType] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    
        const now = Date.now();
        const donnernom = nom + now; // Correction de la déclaration de la variable
        const newVehicle = {
            nom: donnernom, // Utilisation de la variable `donnernom` pour définir le nom du véhicule
            type: type,
            tachesAssignes: [] // La liste des tâches assignées sera vide lors de la création
        };
    
        axiosConfig.post('/vehicules/create', newVehicle)
            .then(response => {
                console.log('Véhicule créé avec succès:', response.data);
                // Vous pouvez ajouter ici une logique pour gérer la réussite de la création du véhicule
            })
            .catch(error => {
                console.error('Erreur lors de la création du véhicule:', error);
                // Vous pouvez ajouter ici une logique pour gérer l'échec de la création du véhicule
            });
    
        // Réinitialiser les champs après la soumission du formulaire
        setNom(''); // Réinitialiser le nom
        setType(''); // Réinitialiser le type
    }
    

    return (
        <div className="col-sm-6 bg-dark text-white">
            <div className="container pt-5">
                <h1>Création de Véhicule</h1>
                <form onSubmit={handleSubmit}>
                    <div className="col mt-5">
                        <div className="row">
                            <div className="col">
                                <label htmlFor="nom">Nom</label>
                                <input type="text" name="nom" className="form-control" value={nom} onChange={(e) => setNom(e.target.value)} required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="type">Type</label>
                                <input type="text" name="type" className="form-control" value={type} onChange={(e) => setType(e.target.value)} required />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col">
                                <button type="submit" className="btn btn-primary">Créer Véhicule</button>
                            </div>
                            <div className="col">
                                <button type="reset" className="btn btn-primary">Effacer</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default VehCreation;
