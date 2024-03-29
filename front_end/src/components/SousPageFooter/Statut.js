import React, { useState } from 'react';
import axiosConfig from "../../axiosConfig";

function StatusPage({ onCheckStatus }) {
  const [referenceNumber, setReferenceNumber] = useState('');
  const [status, setStatus] = useState(null);

  const handleCheckStatus = async (e) => {
    e.preventDefault();
    // Ici, vous devez implémenter la logique pour récupérer le statut en fonction du numéro de référence
    // Cela pourrait impliquer une requête à votre backend ou une vérification locale
    const fetchedStatus = await getStatusFromBackend(referenceNumber); // Exemple de fonction à implémenter
    setStatus(fetchedStatus);
  };

  const getStatusFromBackend = async (id) => {
    try {
      const response = await axiosConfig.get(
          `/soumissions/${id}`,
      );
      return response.data?.gerer ? "Déja traité":"En cours de traitement";
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
      <div className="container mt-5">
        <h2 className="text-center mb-4">Vérifiez le Statut de Votre Demande</h2>
        <p className="text-muted">
          Nous comprenons que l'attente peut être difficile. Mais ne vous inquiétez pas, nous sommes là pour vous accompagner à chaque étape de votre demande. Votre satisfaction est notre priorité absolue.
        </p>
        <p className="text-muted">
          Soyez assuré que notre équipe travaille diligemment pour traiter votre demande et vous fournir une mise à jour dès que possible.
        </p>
        <p className="text-muted">
          N'hésitez pas à nous contacter pour toute question ou préoccupation. Notre équipe est toujours disponible pour vous aider et vous fournir les réponses dont vous avez besoin.
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
          <button type="submit" className="btn btn-primary">Vérifier le Statut</button>
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
