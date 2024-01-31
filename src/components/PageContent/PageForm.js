import React, { useState } from 'react';
import './CSSPageForm.css';

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
    <main class="container mt-5 pt-5">
    <h2>Formulaire de Demenagement n-1</h2>
    <p>Remplissez le formulaire numero 1 ci-dessous pour obtenir un devis personnalisé et commencer votre expérience de déménagement en toute simplicité.</p>

    <form onSubmit={handleSubmit}>
        <div class="col">
        
            <div class="row">
                <div class="col">
                    <label for="firstName">Nom</label>
                    <input type="text" name="firstName" class="form-control" required />
                </div>
                <div class="col">
                    <label for="lastName">Prénom</label>
                    <input type="text" name="lastName" class="form-control" required />
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <label for="email">Adresse courriel</label>
                    <input type="email" name="email" class="form-control" required />
                </div>
                <div class="col">
                    <label for="phoneNumber">Numéro de téléphone</label>
                    <input type="tel" name="phoneNumber" class="form-control" required />
                </div>
            </div>

            
            <div class="row">
                <div class="col">
                    <label for="departureAddress">Adresse de départ</label>
                    <input type="text" name="departureAddress" class="form-control" required />
                </div>
                <div class="col">
                    <label for="destinationAddress">Adresse de destination</label>
                    <input type="text" name="destinationAddress" class="form-control" required />
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <label for="movingDate">Date du déménagement</label>
                    <input type="date" name="movingDate" class="form-control" required />
                </div>
                <div class="col">
                    <label for="movingTime">Heure du déménagement</label>
                    <input type="time" name="movingTime" class="form-control" required />
                </div>
            </div>

            
            <div class="row mt-3">
                <div class="col">
                    <button type="submit" class="btn btn-primary">Soumettre Formulaire numeros 1</button>
                </div>
                <div class="col">
                    <button type="reset" class="btn btn-primary">Effacer le formulaire</button>
                </div>
            </div>

            
            <div class="row mt-4">
                <div class="col">
                    <p>Nous comprenons que déménager peut être stressant. Chez Mouwadji Inc, nous sommes là pour rendre votre expérience de déménagement fluide, sécurisée et sans tracas. Remplissez le formulaire ci-dessus, et nous prendrons soin du reste. Merci de choisir Mouwadji Inc pour votre déménagement!</p>
                </div>
            </div>

            <div class="row mt-5">
                <div class="col">
                    <h3>Ce que nos clients disent</h3>
                    <div class="testimonial">
                        <blockquote>
                            "Mouwadji Inc a rendu notre déménagement sans souci. L'équipe était professionnelle et efficace. Nous les recommandons vivement!"
                        </blockquote>
                        <cite>John et Mary, Clients Satisfaits</cite>
                    </div>
                </div>
            </div>

            <div class="row mt-5">
                <div class="col">
                    <h3>Pourquoi Choisir Mouwadji Inc?</h3>
                    <ul class="no-bullets">
                        <li><i class="bi bi-check-circle"></i> Service professionnel et fiable</li>
                        <li><i class="bi bi-check-circle"></i> Équipe qualifiée et expérimentée</li>
                        <li><i class="bi bi-check-circle"></i> Personnalisation des services pour répondre à vos besoins</li>
                        <li><i class="bi bi-check-circle"></i> Équipement moderne et technologie de pointe</li>
                        <li><i class="bi bi-check-circle"></i> Transparence des coûts</li>
                    </ul>
                </div>
            </div>

        </div>
    </form>
</main>
  );
}

export default PageForm;
