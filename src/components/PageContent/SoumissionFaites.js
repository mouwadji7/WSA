// SoumissionFaites.jsx
import React from 'react';

function SoumissionFaites({ submissionData }) {
  const { firstName, lastName, submissionReference, date } = submissionData;

  return (
    <div className="content">
      <h2>Soumission Faite</h2>
      <p>
        Une soumission a été faite par {firstName} {lastName} aujourd'hui à {date}. Référence de soumission {submissionReference}
      </p>
      <p>Nous vous contacterons dans les plus brefs délais pour discuter de votre soumission.</p>
      <div>
        {/* Ajoutez ici le contenu spécifique à la page de soumission faite */}
        <button onClick={() => console.log("Supprimer Soumission")}>Supprimer Soumission</button>
        <button onClick={() => console.log("Aller sur Dossier")}>Aller sur Dossier</button>
        <button onClick={() => console.log("Remplir Sondage")}>Remplir Sondage</button>
      </div>
    </div>
  );
}

export default SoumissionFaites;
