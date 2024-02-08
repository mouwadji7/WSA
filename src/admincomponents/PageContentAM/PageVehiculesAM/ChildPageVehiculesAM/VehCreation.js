import React, { useState } from 'react';
import Vehicle from './Vehile.js';

function VehCreation({ setListeVehicules }) {
    const [vehicleID, setVehicleID] = useState('');
    const [type, setType] = useState('');
    const [year, setYear] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const newVehicle = new Vehicle(
            vehicleID,
            type,
            year
        );

        setListeVehicules((prevListeVehicules) => [...prevListeVehicules, newVehicle]);

        setVehicleID('');
        setType('');
        setYear('');
    }

    return (
        <div className="col-sm-6 bg-dark text-white">
            <div className="container pt-5">
                <h1>Création de Véhicule</h1>
                <form onSubmit={handleSubmit}>
                    <div className="col mt-5">
                        <div className="row">
                            <div className="col">
                                <label htmlFor="vehicleID">ID du Véhicule</label>
                                <input type="text" name="vehicleID" className="form-control" value={vehicleID} onChange={(e) => setVehicleID(e.target.value)} required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="type">Type</label>
                                <input type="text" name="type" className="form-control" value={type} onChange={(e) => setType(e.target.value)} required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="year">Année</label>
                                <input type="text" name="year" className="form-control" value={year} onChange={(e) => setYear(e.target.value)} required />
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