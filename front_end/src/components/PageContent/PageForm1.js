import React from "react";
import "./CSSPageForm.css"; // Import du fichier de style CSS

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
    } else {
      console.log("elese");
    }
  };

  return (
    <main className="container mt-5 pt-5">
      <h2 className="text-center">Formulaire de Déménagement nº1</h2>
      <p className="lead text-center">
        Remplissez le formulaire numéro 1 ci-dessous pour obtenir un devis
        personnalisé et commencer votre expérience de déménagement en toute
        simplicité.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="col">
          <div className="row">
            <div className="col">
              <label htmlFor="firstName">Nom</label>
              <input
                type="text"
                name="firstName"
                className="form-control"
                required
              />
            </div>
            <div className="col">
              <label htmlFor="lastName">Prénom</label>
              <input
                type="text"
                name="lastName"
                className="form-control"
                required
              />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label htmlFor="email">Adresse courriel</label>
              <input
                type="email"
                name="email"
                className="form-control"
                required
              />
            </div>
            <div className="col">
              <label htmlFor="phoneNumber">Numéro de téléphone</label>
              <input
                type="tel"
                name="phoneNumber"
                className="form-control"
                required
              />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label htmlFor="departureAddress">Adresse de départ</label>
              <input
                type="text"
                name="departureAddress"
                className="form-control"
                required
              />
            </div>
            <div className="col">
              <label htmlFor="destinationAddress">Adresse de destination</label>
              <input
                type="text"
                name="destinationAddress"
                className="form-control"
                required
              />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label htmlFor="movingDate">Date du déménagement</label>
              <input
                type="date"
                name="movingDate"
                className="form-control"
                required
              />
            </div>
            <div className="col">
              <label htmlFor="movingTime">Heure du déménagement</label>
              <input
                type="time"
                name="movingTime"
                className="form-control"
                required
              />
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col text-center">
            <button type="submit" className="btn btn-primary">
              Suivant Formulaire
            </button>
          </div>
          <div className="col text-center">
            <button type="reset" className="btn btn-primary">
              Effacer le formulaire
            </button>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col">
            <p>
              Nous comprenons que déménager peut être stressant. Chez Mouwadji
              Inc, nous sommes là pour rendre votre expérience de déménagement
              fluide, sécurisée et sans tracas. Remplissez le formulaire
              ci-dessus, et nous prendrons soin du reste. Merci de choisir
              Mouwadji Inc pour votre déménagement!
            </p>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col">
            <h3>Ce que nos clients disent</h3>
            <div className="testimonial">
              <blockquote>
                "Mouwadji Inc a rendu notre déménagement sans souci. L'équipe
                était professionnelle et efficace. Nous les recommandons
                vivement!"
              </blockquote>
              <cite>John et Mary, Clients Satisfaits</cite>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col">
            <h3>Pourquoi Choisir Mouwadji Inc?</h3>
            <ul className="no-bullets">
              <li>
                <i className="bi bi-check-circle"></i> Service professionnel et
                fiable
              </li>
              <li>
                <i className="bi bi-check-circle"></i> Équipe qualifiée et
                expérimentée
              </li>
              <li>
                <i className="bi bi-check-circle"></i> Personnalisation des
                services pour répondre à vos besoins
              </li>
              <li>
                <i className="bi bi-check-circle"></i> Équipement moderne et
                technologie de pointe
              </li>
              <li>
                <i className="bi bi-check-circle"></i> Transparence des coûts
              </li>
            </ul>
          </div>
        </div>
      </form>
    </main>
  );
}

export default PageForm;
