import React, { useState } from "react";
import axiosConfig from "../../axiosConfig";

function StatusPage() {
  const [referenceNumber, setReferenceNumber] = useState("");
  const [status, setStatus] = useState(null);
  const [soumission, setSoumission] = useState(null);
  const [tache, setTache] = useState(null);
  const [vehicules, setVehicules] = useState([]);
  const [employes, setEmployes] = useState([]);

  const handleCheckStatus = async (e) => {
    e.preventDefault();
    const fetchedStatus = await getStatusFromBackend(referenceNumber);
    setStatus(fetchedStatus);
  };

  const getStatusFromBackend = async (id) => {
    try {
      const soumissionResponse = await axiosConfig.get(`/soumissions/by-reference/${id}`);
      const soumissionData = soumissionResponse.data;

      if (soumissionData) {
        setSoumission(soumissionData);
        const gestionSoumissionResponse = await axiosConfig.get(`/gestionSoumissions/by-soumission/${soumissionData.id}`);
        const gestionSoumissionData = gestionSoumissionResponse.data;

        if (gestionSoumissionData) {
          fetchTache(gestionSoumissionData.tacheId);
          return "Déjà traité";
        } else {
          return "Soumission trouvée, mais non encore traitée.";
        }
      } else {
        return "Aucune soumission trouvée pour ce numéro de référence.";
      }
    } catch (error) {
      console.error("Error fetching status:", error);
      return "Erreur lors de la récupération du statut de la soumission.";
    }
  };

  const fetchTache = async (id) => {
    try {
      const response = await axiosConfig.get(`/taches/${id}`);
      setTache(response.data);
      fetchVehicules(response.data.vehiculesAssignes);
      fetchEmployes(response.data.employesAssignes);
    } catch (error) {
      console.error("Error fetching tache:", error);
    }
  };

  const fetchVehicules = async (ids) => {
    try {
      const promises = ids.map((id) => axiosConfig.get(`/vehicules/${id}`));
      const responses = await Promise.all(promises);
      const vehiculesData = responses.map((response) => response.data);
      setVehicules(vehiculesData);
    } catch (error) {
      console.error("Error fetching vehicules:", error);
    }
  };

  const fetchEmployes = async (ids) => {
    try {
      const promises = ids.map((id) => axiosConfig.get(`/employes/${id}`));
      const responses = await Promise.all(promises);
      const employesData = responses.map((response) => response.data);
      setEmployes(employesData);
    } catch (error) {
      console.error("Error fetching employes:", error);
    }
  };

  return (
    <main className="container mt-5 pt-5">
      <div className="container mt-5 status-container">
        <h2 className="text-center mb-4">Vérifiez le Statut de Votre Demande</h2>
        <p className="text-muted text-center">
          Nous comprenons que l'attente peut être difficile. Mais ne vous inquiétez pas, nous
          sommes là pour vous accompagner à chaque étape de votre demande. Votre satisfaction est
          notre priorité absolue.
        </p>
        <p className="text-muted text-center">
          Soyez assuré que notre équipe travaille diligemment pour traiter votre demande et vous
          fournir une mise à jour dès que possible.
        </p>
        <p className="text-muted text-center">
          N'hésitez pas à nous contacter pour toute question ou préoccupation. Notre équipe est
          toujours disponible pour vous aider et vous fournir les réponses dont vous avez besoin.
        </p>
        <form onSubmit={handleCheckStatus}>
          <div className="mb-3">
            <h5 className="text-muted mb-2">Saisissez votre numéro de référence :</h5>
            <input
              type="text"
              id="referenceNumber"
              value={referenceNumber}
              onChange={(e) => setReferenceNumber(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Vérifier le Statut
          </button>
        </form>
        {status && (
          <div className="mt-4">
            <h3 className="text-center">Statut actuel de votre demande :</h3>
            <p className="text-center">{status}</p>
          </div>
        )}
        {soumission && (
          <div className="container mt-5">
            <h2 className="text-center">Détails de la Soumission</h2>
            <p>Référence : {soumission.referenceNumber}, Nom : {soumission.nom}, Prénom : {soumission.prenom}, Email : {soumission.email}, Téléphone : {soumission.telephone}, Adresse de départ : {soumission.adresseDepart}, Adresse de destination : {soumission.adresseDestination}, Date de déménagement : {soumission.dateDemenagement}, Heure de déménagement : {soumission.heureDemenagement}, Type d'habitation : {soumission.typeHabitation}, Emplacement d'habitation : {soumission.emplacementHabitation}, Chambres à charger : {soumission.chambresACharger}, Gerer : {soumission.gerer ? "Oui" : "Non"}</p>
          </div>
        )}
        {tache && (
          <div className="container mt-5">
            <h2 className="text-center">Détails de la Tâche</h2>
            <p>Nom de la tâche : {tache.nom}</p>
            <p>Description : {tache.description}</p>
            <p>Date de début : {tache.dateDebut}</p>
            <p>Date de fin : {tache.dateFin}</p>
          </div>
        )}
        {vehicules.length > 0 && (
          <div className="container mt-5">
            <h2 className="text-center">Véhicules Assignés</h2>
            <div className="row justify-content-center">
              {vehicules.map((vehicule) => (
                <div key={vehicule.id} className="col-sm-4">
                  <p>Nom : {vehicule.nom}</p>
                  <p>Type : {vehicule.type}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        {employes.length > 0 && (
          <div className="container mt-5">
            <h2 className="text-center">Employés Assignés</h2>
            <div className="row justify-content-center">
              {employes.map((employe) => (
                <div key={employe.id} className="col-sm-4">
                  <p>Nom : {employe.nom}</p>
                  <p>Prénom : {employe.prenom}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default StatusPage;
