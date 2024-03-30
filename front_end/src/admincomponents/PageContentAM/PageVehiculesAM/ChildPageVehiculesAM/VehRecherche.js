import React, { useState, useEffect } from "react";
import axiosConfig from "../../../../axiosConfig";

function VehRecherche() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchVehicles();
  }, []);

  const fetchVehicles = async () => {
    try {
      const response = await axiosConfig.get("/vehicules/all");
      setSearchResults(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des véhicules:", error);
    }
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Effectuer la recherche
    const filteredResults = searchResults.filter(
      (vehicle) =>
        vehicle.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vehicle.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vehicle.tachesAssignes.includes(searchTerm),
    );
    // Mettre à jour les résultats de la recherche
    setSearchResults(filteredResults);
  };

  const deleteVehicle = async (vehicleId) => {
    try {
      setLoading(true);
      await axiosConfig.delete(`/vehicules/delete/${vehicleId}`);
      // Rafraîchir les résultats après la suppression
      fetchVehicles();
    } catch (error) {
      console.error("Erreur lors de la suppression du véhicule:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateVehicle = async (vehicleId, newData) => {
    try {
      setLoading(true);
      await axiosConfig.put(`/vehicules/update/${vehicleId}`, newData);
      // Rafraîchir les résultats après la modification
      fetchVehicles();
    } catch (error) {
      console.error("Erreur lors de la mise à jour du véhicule:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="col-sm-6 bg-dark text-white">
      <div className="container pt-5">
        <h1 className="text-center">Recherche de véhicules</h1>
        <form onSubmit={handleSubmit} className="text-center">
          <input
            type="text"
            value={searchTerm}
            onChange={handleChange}
            placeholder="Rechercher par nom, ID ou tâche"
            className="form-control mb-3"
          />
          <button type="submit" className="btn btn-primary mb-3">
            Rechercher
          </button>
        </form>
        <ul className="list-group text-center">
          {searchResults.map((vehicle) => (
            <li
              key={vehicle.id}
              className="list-group-item bg-dark text-white mb-2"
            >
              <div>Nom: {vehicle.nom}</div>
              <div>Type: {vehicle.type}</div>
              <div>
                Tâches assignées:{" "}
                {vehicle.tachesAssignes.map((taskId) => (
                  <button
                    key={taskId}
                    onClick={() =>
                      console.log("Voir détails de la tâche", taskId)
                    }
                    className="btn btn-link"
                  >
                    {taskId}
                  </button>
                ))}
              </div>
              <div className="mt-3">
                {/* Bouton de suppression de véhicule */}
                <button
                  onClick={() => deleteVehicle(vehicle.id)}
                  className="btn btn-danger me-2"
                >
                  Supprimer Véhicule
                </button>
                {/* Bouton de modification de véhicule */}
                <button
                  onClick={() =>
                    updateVehicle(vehicle.id, {
                      /* Nouvelles données du véhicule */
                    })
                  }
                  className="btn btn-primary"
                >
                  Modifier Véhicule
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default VehRecherche;
