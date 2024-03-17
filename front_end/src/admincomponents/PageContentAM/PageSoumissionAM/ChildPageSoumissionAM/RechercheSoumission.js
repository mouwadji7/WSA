import React, { useState } from "react";

function RechercheSoumission() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    event.preventDefault();

    fetch(`/api/Soumission?${searchTerm}`)
      .then((response) => response.json())
      .then((data) => setSearchResults(data))
      .catch((error) => console.error("Error searching submissions:", error));
  };

  return (
    <div className="container pt-5">
      <h1>Recherche de Soumissions</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          className="form-control"
          placeholder="Rechercher..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" className="btn btn-primary mt-2">
          Rechercher
        </button>
      </form>
      {searchResults.length > 0 && (
        <table className="table mt-4">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nom</th>
              <th>Adresse</th>
            </tr>
          </thead>
          <tbody>
            {searchResults.map((result) => (
              <tr key={result.id}>
                <td>{result.id}</td>
                <td>{result.nom}</td>
                <td>{result.adresse}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default RechercheSoumission;
