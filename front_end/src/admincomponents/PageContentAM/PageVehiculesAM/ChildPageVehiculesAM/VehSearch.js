import React, { useState } from 'react';
import AxiosConfig from './httpService.js'; // Assurez-vous que le chemin d'importation est correct

function VehSearch() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [error, setError] = useState('');

    const handleSearch = async (event) => {
        event.preventDefault();

        if (!searchTerm.trim()) {
            setError('Veuillez entrer un terme de recherche.');
            setSearchResults([]);
            return;
        }

        try {
            const response = await AxiosConfig.get(`/vehicules/search?nom=${searchTerm}`);
            setSearchResults(response.data);
            if (response.data.length === 0) {
                setError('Aucun véhicule trouvé correspondant à votre recherche.');
            }
        } catch (err) {
            setError('Erreur lors de la recherche des véhicules.');
            console.error(err);
        }
    };

    return (
        <div className="col-sm-6 bg-dark text-white">
            <div className="container pt-5">
                <h1>Recherche de Véhicules</h1>
                <form onSubmit={handleSearch} className="mb-3">
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            id="searchTerm"
                            placeholder="Rechercher par nom ou modèle"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">Rechercher</button>
                </form>
                {error && <p className="text-danger">{error}</p>}
            </div>
            <div className="results">
                <h2>Résultats</h2>
                {searchResults.length > 0 ? (
                    <ul className="list-group">
                        {searchResults.map((vehicule, index) => (
                            <li key={index} className="list-group-item bg-secondary text-white">
                                {vehicule.nom} - {vehicule.modele}
                            </li>
                        ))}
                    </ul>
                ) : searchTerm && !error && <p>Aucun véhicule trouvé.</p>}
            </div>
        </div>
    );
}

export default VehSearch;
