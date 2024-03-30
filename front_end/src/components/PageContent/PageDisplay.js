import React from "react";
import axiosConfig from "../../axiosConfig";
import "./CSSPageDisplay.css";

function PageDisplay({ formData, formDataV, onConfirm, onCancel, onModify }) {
  const sendSubmissionToDatabase = async () => {
    try {
      const submissionData = {
        referenceNumber: formData.submissionReference,
        nom: formData.lastName,
        prenom: formData.firstName,
        email: formData.email,
        telephone: formData.phoneNumber,
        adresseDepart: formData.departureAddress,
        adresseDestination: formData.destinationAddress,
        dateDemenagement: formData.movingDate,
        heureDemenagement: formData.movingTime,
        typeHabitation: formDataV.sellist2,
        emplacementHabitation: formDataV.AppartNumber,
        chambresACharger: formDataV.sellist3,
      };

      const response = await axiosConfig.post(
        "/soumissions/create",
        submissionData,
      );
      console.log("Soumission envoyée à la base de données :", response.data);

      onConfirm();
    } catch (error) {
      console.error(
        "Erreur lors de l'envoi de la soumission à la base de données :",
        error,
      );
      // Gérer l'erreur
    }
  };

  return (
    <main className="container mt-5 pt-5 text-center">
      <h2 className="mb-4">Révision des informations</h2>

      <div className="border-bottom pb-3 mb-4">
        <p className="mb-2">
          Client: {formData.firstName} {formData.lastName}
        </p>
        <p className="mb-2">
          Identifiants : Email - {formData.email}, Téléphone -{" "}
          {formData.phoneNumber}
        </p>
      </div>

      <div className="border-bottom pb-3 mb-4">
        <p className="mb-2">Détails du trajet :</p>
        <p className="mb-2">Adresse de départ : {formData.departureAddress}</p>
        <p className="mb-2">
          Adresse de destination : {formData.destinationAddress} à{" "}
          {formData.movingTime}
        </p>
      </div>

      <div className="border-bottom pb-3 mb-4">
        <p className="mb-2">
          Estimation des biens à transporter : {formDataV.sellist1}
        </p>
        <p className="mb-2">Détails de l'habitation :</p>
        <p className="mb-2">Type d'habitation : {formDataV.sellist2}</p>
        <p className="mb-2">
          Emplacement dans l'habitation : {formDataV.AppartNumber}
        </p>
        <p className="mb-2">Chambres à charger : {formDataV.sellist3}</p>
        <p className="mb-2">
          Taille du camion suggérée : {formDataV.truckSize}
        </p>
      </div>

      <div className="border-bottom pb-3 mb-4">
        <p className="mb-2">
          Remarque : Plus le volume des biens à transporter est important, plus
          des frais supplémentaires peuvent s'appliquer. Les articles
          supplémentaires peuvent être soumis à des frais additionnels.
        </p>
      </div>

      <div className="mt-4 d-flex justify-content-center">
        <button
          className="btn btn-primary me-3"
          onClick={sendSubmissionToDatabase}
        >
          Confirmer
        </button>
        <button className="btn btn-primary me-3" onClick={onCancel}>
          Annuler
        </button>
        <button className="btn btn-primary" onClick={onModify}>
          Modifier
        </button>
      </div>
    </main>
  );
}

export default PageDisplay;
