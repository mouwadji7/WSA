import React, { useState } from "react";
import axiosConfig from "../../axiosConfig";

function StatusPage({ onCheckStatus }) {
  const [referenceNumber, setReferenceNumber] = useState("");
  const [status, setStatus] = useState(null);

  const handleCheckStatus = async (e) => {
    e.preventDefault();
    const fetchedStatus = await getStatusFromBackend(referenceNumber);
    setStatus(fetchedStatus);
  };

  const getStatusFromBackend = async (id) => {
    try {
      const response = await axiosConfig.get(`/soumissions/${id}`);
      return response.data?.gerer ? "Déjà traité" : "En cours de traitement";
    } catch (error) {
      console.error(
        "Erreur lors de la récupération du statut de la soumission dans la base de données :",
        error,
      );
      // Gérer l'erreur
    }
  };

  return (
    <main className="container mt-5 pt-5">
      <div className="container mt-5 status-container">
        <h2 className="text-center mb-4">
          Vérifiez le Statut de Votre Demande
        </h2>
        <p className="text-muted text-center">
          Nous comprenons que l'attente peut être difficile. Mais ne vous
          inquiétez pas, nous sommes là pour vous accompagner à chaque étape de
          votre demande. Votre satisfaction est notre priorité absolue.
        </p>
        <p className="text-muted text-center">
          Soyez assuré que notre équipe travaille diligemment pour traiter votre
          demande et vous fournir une mise à jour dès que possible.
        </p>
        <p className="text-muted text-center">
          N'hésitez pas à nous contacter pour toute question ou préoccupation.
          Notre équipe est toujours disponible pour vous aider et vous fournir
          les réponses dont vous avez besoin.
        </p>
        <form onSubmit={handleCheckStatus}>
          <div className="mb-3">
            <h5 className="text-muted mb-2">
              Saisissez votre numéro de référence :
            </h5>
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
      </div>
    </main>
  );
}

export default StatusPage;
