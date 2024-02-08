import React, { useState } from 'react';
import Employes from './Employee.js'; // Importez la classe Employes depuis son fichier

function EMCreation({ setListeEmployes }) { // Déstructurez setListeEmployes depuis les props
    const [employeeID, setEmployeeID] = useState('');
    const [employeefirstName, setEmployeefirstName] = useState('');
    const [employeelastName, setEmployeelastName] = useState('');
    const [employeeemail, setEmployeeemail] = useState('');
    const [employeephoneNumber, setEmployeephoneNumber] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Création d'un nouvel objet Employes
        const nouvelEmploye = new Employes(
            employeeID,
            employeefirstName,
            employeelastName,
            employeeemail,
            employeephoneNumber
        );

        // Mise à jour de la liste des employés en utilisant la fonction passée en tant que prop
        setListeEmployes((prevListeEmployes) => [...prevListeEmployes, nouvelEmploye]);

        // Réinitialisation des champs du formulaire
        setEmployeeID('');
        setEmployeefirstName('');
        setEmployeelastName('');
        setEmployeeemail('');
        setEmployeephoneNumber('');
    }

    return (
        <div className="col-sm-6 bg-dark text-white">
            <div className="container pt-5">
                <h1>Creation Employes</h1>
                <form onSubmit={handleSubmit} >
                    <div className="col mt-5">
                        <div className="row">
                            <div className="col">
                                <label htmlFor="employeeID">Employes ID</label>
                                <input type="text" name="employeeID" className="form-control" value={employeeID} onChange={(e) => setEmployeeID(e.target.value)} required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="employeefirstName">Nom</label>
                                <input type="text" name="employeefirstName" className="form-control" value={employeefirstName} onChange={(e) => setEmployeefirstName(e.target.value)} required />
                            </div>
                            <div className="col">
                                <label htmlFor="employeelastName">Prenom</label>
                                <input type="text" name="employeelastName" className="form-control" value={employeelastName} onChange={(e) => setEmployeelastName(e.target.value)} required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="employeeemail">Adresse courriel</label>
                                <input type="email" name="employeeemail" className="form-control" value={employeeemail} onChange={(e) => setEmployeeemail(e.target.value)} required />
                            </div>
                            <div className="col">
                                <label htmlFor="employeephoneNumber">téléphone</label>
                                <input type="tel" name="employeephoneNumber" className="form-control" value={employeephoneNumber} onChange={(e) => setEmployeephoneNumber(e.target.value)} required />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col">
                                <button type="submit" className="btn btn-primary">Creer Employes</button>
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

export default EMCreation;
