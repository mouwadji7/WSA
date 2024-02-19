import React from 'react';

function EMDisplay({ listeEmployes }) { // Déstructurez listeEmployes depuis les props
    return (
        <div className="col-sm-6 bg-dark text-white">
            <div className="container pt-5">
                <h1>Liste des Employes</h1>
                <ul>
                    {listeEmployes.map((employe, index) => (
                        <li key={index}>
                            {employe.employeeID} - {employe.firstName} {employe.lastName} - {employe.email} - {employe.phoneNumber}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default EMDisplay;