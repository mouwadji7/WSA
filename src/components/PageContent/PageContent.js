import React, { useState } from 'react';
import PageForm from './PageForm';
import PageDisplay from './PageDisplay';
import SoumissionFaites from './SoumissionFaites';
import './CSSPageContent.css';

function PageContent() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState(null);
  const [displayConfirmed, setDisplayConfirmed] = useState(false);
  const [soumissionsList, setSoumissionsList] = useState([]);

  const handleFormSubmit = (formData) => {
    // Générer un numéro de référence unique
    const submissionReference = generateUniqueReference();
    
    // Sauvegarder les données de la soumission avec le numéro de référence
    const submissionData = { ...formData, submissionReference };
    
    // Mettre à jour la liste des soumissions
    setSoumissionsList([...soumissionsList, submissionData]);
    
    setFormData(submissionData);
    setFormSubmitted(true);
  };

  const handleConfirm = () => {
    setDisplayConfirmed(true);
  };

  const handleCancel = () => {
    setFormSubmitted(false);
    setFormData(null);
    setDisplayConfirmed(false);
  };

  const handleModify = () => {
    setFormSubmitted(false);
    setDisplayConfirmed(false);
  };

  const generateUniqueReference = () => {
    // Générer un numéro de référence unique (peut-être utiliser une logique personnalisée)
    return Math.random().toString(36).substr(2, 9);
  };

  return (
    <div>
      {!formSubmitted && !displayConfirmed && <PageForm onSubmit={handleFormSubmit} />}
      {formSubmitted && !displayConfirmed && (
        <PageDisplay formData={formData} onConfirm={handleConfirm} onCancel={handleCancel} onModify={handleModify} />
      )}
      {displayConfirmed && <SoumissionFaites submissionData={formData} />}
      {/* Vous pouvez afficher ici la liste des soumissions, si nécessaire */}
      
    </div>
  );
}

export default PageContent;