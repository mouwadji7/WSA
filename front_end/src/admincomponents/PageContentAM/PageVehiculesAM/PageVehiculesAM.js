import React, { useState } from 'react';
import VehCreation from './ChildPageVehiculesAM/VehCreation';
import VehDisplay from './ChildPageVehiculesAM/VehDisplay';
import VehSearch from './ChildPageVehiculesAM/VehSearch';
import VehTaskManager from './ChildPageVehiculesAM/VehTaskManager';
import VehSorter from './ChildPageVehiculesAM/VehSorter';

function PageVehiculesAM() {
    const [listeVehicules, setListeVehicules] = useState([]);
    const [currentDisplay, setCurrentDisplay] = useState(<VehCreation setListeVehicules={setListeVehicules} />);

    const handleClick = (displayComponent) => {
        setCurrentDisplay(displayComponent);
    };

    const clearVehicles = () => {
        setListeVehicules([]);
        // Reset à la création après nettoyage pour éviter d'afficher une liste vide ou des résultats de recherche obsolètes
        setCurrentDisplay(<VehCreation setListeVehicules={setListeVehicules} />);
    };

    return (
        <main className="container-fluid mt-5 pt-5">
            <h1>Page Gestion Véhicules</h1>
            <div className="row">
                <div className="col-sm-6 bg-primary text-white">
                    <div className="container pt-5">
                        <h1 className="text-dark">Côté Management</h1>
                        <div className="btn-group-vertical mt-5">
                            <button type="button" className="btn btn-dark mb-4" onClick={() => handleClick(<VehCreation setListeVehicules={setListeVehicules} />)}>Créer Véhicule</button>
                            <button type="button" className="btn btn-dark mb-4" onClick={() => handleClick(<VehDisplay listeVehicules={listeVehicules} />)}>Lister Véhicules</button>
                            <button type="button" className="btn btn-dark mb-4" onClick={() => handleClick(<VehSearch listeVehicules={listeVehicules} setListeVehicules={setListeVehicules}/>)}>Recherche Véhicules</button>
                            <button type="button" className="btn btn-dark mb-4" onClick={() => handleClick(<VehTaskManager />)}>Gérer les tâches</button>
                            <button type="button" className="btn btn-dark mb-4" onClick={() => handleClick(<VehSorter listeVehicules={listeVehicules} setListeVehicules={setListeVehicules}/>)}>Trier les véhicules non assignés</button>
                        </div>
                    </div>
                </div>
                
                {currentDisplay}
                
            </div>
            <div className="container mt-5 pt-5">
                <div className="row">
                    <div className="col">
                        <button type="button" className="btn btn-primary mb-2" onClick={() => handleClick(<VehCreation setListeVehicules={setListeVehicules} />)}>Revenir à l'accueil admin</button>
                    </div>
                    <div className="col">
                        <button type="button" className="btn btn-dark mb-2" onClick={clearVehicles}>Tout effacer</button>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default PageVehiculesAM;
