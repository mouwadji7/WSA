import React, { useState } from 'react';

function PageForm({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      phoneNumber: e.target.phoneNumber.value,
      departureAddress: e.target.departureAddress.value,
      destinationAddress: e.target.destinationAddress.value,
      movingDate: e.target.movingDate.value,
      movingTime: e.target.movingTime.value,
    };
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <div className="content">
      <h2>Demenagement Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nom :
          <input type="text" name="firstName" />
        </label>

        <label></label>

        <label>
          Prénom :
          <input type="text" name="lastName" />
        </label>

        <label>
          Adresse courriel :
          <input type="email" name="email" />
        </label>

        <label></label>


        <label>
          Numéro de téléphone :
          <input type="tel" name="phoneNumber" />
        </label>

        <label>
          Adresse de départ :
          <input type="text" name="departureAddress" />
        </label>

        <label></label>

        <label>
          Adresse de destination :
          <input type="text" name="destinationAddress" />
        </label>

        <label>
          Date du déménagement :
          <input type="date" name="movingDate" />
        </label>

        <label></label>

        <label>
          Heure du déménagement :
          <input type="time" name="movingTime" />
        </label>

        <button type="submit">Soumettre</button>

        <label></label>

        <button type="reset">Effacer</button>
      </form>
    </div>
  );
}

export default PageForm;
