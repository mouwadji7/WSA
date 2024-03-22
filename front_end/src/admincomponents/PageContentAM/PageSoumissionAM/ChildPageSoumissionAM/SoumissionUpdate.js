import React from 'react';

function SoumissionUpdate() {
    return (
        <div className="col-sm-6 bg-dark text-white">
            <div className="container pt-5">
                <h1>Liste des Participants</h1>

                <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span className="badge bg-primary rounded-pill">Mouhamed Fall</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span className="badge bg-primary rounded-pill">Cheikh Oumar</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span className="badge bg-primary rounded-pill">Mohamed Sonko</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <span className="badge bg-primary rounded-pill">Mariama Dioulde</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SoumissionUpdate;