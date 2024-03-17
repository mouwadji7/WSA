import React, { useEffect, useState } from 'react';
import AxiosConfig from './httpService.js'; // Assurez-vous que le chemin d'importation est correct

function TaskManager() {
    const [taches, setTaches] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        AxiosConfig.get('/taches') // Assurez-vous que le chemin de l'endpoint est correct
            .then(response => {
                setTaches(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des tâches:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Chargement des tâches...</div>;
    }

    return (
        <div className="col-sm-6 bg-dark text-white">
            <div className="container pt-5">
                <h2>Liste des Tâches</h2>
                {taches.length > 0 ? (
                    <ul>
                        {taches.map(tache => (
                            <li key={tache.id}>
                                {tache.description} - Assigné à: {tache.assigne} -
                                {tache.termine ? ' Terminée' : ' En cours'}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div>Aucune tâche à afficher.</div>
                )}
            </div>
        </div>
    );
}

export default TaskManager;
