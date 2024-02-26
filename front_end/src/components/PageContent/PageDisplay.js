import React from 'react';
import './CSSPageDisplay.css';
import axios from "../../api/axiosConfig"; // Adjust the import path

function PageDisplay({ formData, formDataV, onConfirm, onCancel, onModify }) {

  // Fonction pour envoyer les données à Spring Boot
  const sendDataToSpringBoot = () => {
    const submissionData = {
      referenceNumber: formData.submissionReference, // Utilisation de la référence générée précédemment
      nom: formData.firstName,
      prenom: formData.lastName,
      email: formData.email,
      telephone: formData.phoneNumber,
      adresseDepart: formData.departureAddress,
      adresseDestination: formData.destinationAddress,
      dateDemenagement: formData.movingDate,
      heureDemenagement: formData.movingTime,
      typeHabitation: formDataV.sellist2,
      emplacementHabitation: formDataV.AppartNumber,
      chambresACharger: formDataV.sellist3
    };

    axios.post('/soumission', submissionData) // Utiliser axiosInstance avec l'endpoint correct
      .then(response => {
        // Gérer la réponse si nécessaire
        console.log(response.data);
      })
      .catch(error => {
        // Gérer les erreurs si nécessaire
        console.error('Erreur lors de l\'envoi des données:', error);
      });
  };


  return (
    <main main class="container mt-5 pt-5">
      <h2 className="mb-4">Révision des informations</h2>

      <div className="border-bottom pb-3 mb-4">
        <p className="mb-2">Client: {formData.firstName} {formData.lastName}</p>
        <p className="mb-2">Identifiants : Email - {formData.email}, Téléphone - {formData.phoneNumber}</p>
      </div>

      <div className="border-bottom pb-3 mb-4">
        <p className="mb-2">Détails du trajet :</p>
        <p className="mb-2">Adresse de départ : {formData.departureAddress}</p>
        <p className="mb-2">Adresse de destination : {formData.movingDate} à {formData.movingTime}</p>
      </div>

      <div className="border-bottom pb-3 mb-4">
        <p className="mb-2">Estimation des biens à transporter : {formDataV.sellist1}</p>
        <p className="mb-2">Détails de l'habitation :</p>
        <p className="mb-2">Type d'habitation : {formDataV.sellist2}</p>
        <p className="mb-2">Emplacement dans l'habitation : {formDataV.AppartNumber}</p>
        <p className="mb-2">Chambres à charger : {formDataV.sellist3}</p>
        <p className="mb-2">Taille du camion suggérée : {formDataV.truckSize}</p>
      </div>

      <div className="border-bottom pb-3 mb-4">
        <p className="mb-2">Remarque : Plus le volume des biens à transporter est important, plus des frais supplémentaires peuvent s'appliquer. Les articles supplémentaires peuvent être soumis à des frais additionnels.</p>
      </div>

      <div className="mt-4">
        <button className="btn btn-primary me-3" onClick={() => { onConfirm(); sendDataToSpringBoot(); }}>Confirmer</button>
        <button className="btn btn-primary me-3" onClick={onCancel}>Annuler</button>
        <button className="btn btn-primary" onClick={onModify}>Modifier</button>
      </div>
    </main>
  );
}

export default PageDisplay;
