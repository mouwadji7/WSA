import React from 'react';

function VehDisplay({ listeVehicules }) {
    return (
        <div className="col-sm-6 bg-dark text-white">
            <div className="container pt-5">
                <h1>Liste des Véhicules</h1>
                <ul>
                    {listeVehicules.map((vehicle, index) => (
                        <li key={index}>
                            {vehicle.vehicleID} - {vehicle.type} - {vehicle.year}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default VehDisplay;