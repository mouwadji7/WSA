import React, { useState } from 'react';
import VehCreation from './ChildPageVehiculesAM/VehCreation';
import VehDisplay from './ChildPageVehiculesAM/VehDisplay';
import VehRecherche from './ChildPageVehiculesAM/VehRecherche';

function PageVehiculesAM() {
    const [listeVehicules, setListeVehicules] = useState([]);
    const [currentDisplay, setCurrentDisplay] = useState(<VehCreation setListeVehicules={setListeVehicules} />);

    const handleClick = (displayComponent) => {
        setCurrentDisplay(displayComponent);
    };

    return (
        <main className="container-fluid mt-5 pt-5 text-center">

            <h1>Page Gestion Véhicules</h1>

            <div className="row justify-content-center">
                <div className="col-sm-6 bg-primary text-white">
                    <div className="container pt-5">
                        <h1 className="text-dark">Cote Management</h1>

                        <div className="btn-group-vertical mt-5">
                            <button type="button" className="btn btn-dark mb-4" onClick={() => handleClick(<VehCreation setListeVehicules={setListeVehicules} />)}>Créer Véhicule</button>
                            <button type="button" className="btn btn-dark mb-4" onClick={() => handleClick(<VehDisplay listeVehicules={listeVehicules} />)}>Lister Véhicules</button>
                            <button type="button" className="btn btn-dark mb-4" onClick={() => handleClick(<VehRecherche />)}>Recherche véhicule</button>
                            <button type="button" className="btn btn-dark mb-4">A revoir</button>
                            <button type="button" className="btn btn-dark mb-4">A revoir</button>
                        </div>
                    </div>
                </div>
                
                <div className="col-sm-6">
                    {currentDisplay}
                </div>
            </div>
            
            <div className="container mt-5 pt-5">
                <div className="row">
                    <div className="col">
                        <button type="button" className="btn btn-primary mb-2">Revenir à l'accueil adminHome</button>
                    </div>
                    <div className="col">
                        <button type="button" className="btn btn-dark mb-2">Tout effacer</button>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default PageVehiculesAM;
