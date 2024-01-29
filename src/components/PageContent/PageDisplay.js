import React from 'react';
import './CSSPageDisplay.css';

function PageDisplay({ formData, onConfirm, onCancel, onModify }) {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    departureAddress,
    destinationAddress,
    movingDate,
    movingTime,
  } = formData;

  return (
    <div className="display-container">

      <div className='aumilieu'>
        <div></div>
        <h2>Informations soumises :</h2>
        <div></div>
      </div>


      <div className="grid-container">
        <p></p>
        <div><strong>Votre Prenom :</strong></div>
        <p className='double-width-item'>{firstName}</p>
        
        <p></p>
        <div><strong>Votre nom :</strong></div>
        <p className='double-width-item'>{lastName}</p>

        <p></p>
        <div><strong>Votre adresse email :</strong></div>
        <p className='double-width-item'>{email}</p>

        <p></p>
        <div><strong>Votre numéro de téléphone :</strong></div>
        <p className='double-width-item'>{phoneNumber}</p>

        <p></p>
        <div><strong>L'adresse de départ est :</strong></div>
        <p className='double-width-item'>{departureAddress}</p>

        <p></p>
        <div><strong>L'adresse de destination est :</strong></div>
        <p className='double-width-item'>{destinationAddress}</p>

        <p></p>
        <div><strong>Le déménagement sera le :</strong></div>
        <p className='double-width-item'>{movingDate} à {movingTime}</p>
      </div>
      
      <div className="button-container">
        <button className="confirm-button" onClick={onConfirm}>Je suis sûr de soumettre</button>
        <button className="cancel-button" onClick={onCancel}>Annuler</button>
        <button className="modify-button" onClick={onModify}>Modifier</button>
      </div>
    </div>
  );
}

export default PageDisplay;
