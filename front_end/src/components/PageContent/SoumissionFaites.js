import React from 'react';

function SoumissionFaites({ formData, formDataV ,onReturnToHome}) {
  return (
    <main className="container mt-5 pt-5">
      <h2>Soumission réussie</h2>

      <p>
        Votre demande de déménagement a été soumise avec succès. Un numéro de soumission a été généré :
        <strong>{formData.submissionReference}</strong>.
      </p>

      <p>
        Voici un récapitulatif de vos informations :
      </p>

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
        <p>
          Vous pouvez vérifier l'état de votre soumission en cliquant sur "État de ma soumission" dans le menu de navigation. Nous vous contacterons dans les plus brefs délais pour vous fournir un devis (prix) final. Merci d'avoir fait une soumission avec Mouwadji Inc.
        </p>
        <button className="btn btn-primary mt-3" onClick={onReturnToHome}>Revenir à l'accueil</button>
      </div>
    </main>
  );
}

export default SoumissionFaites;