import React from "react";
import { FaRegNewspaper, FaTasks, FaChartBar } from "react-icons/fa";

function PrincipalePage({ onNavigateToForm }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onNavigateToForm();
  };

  return (
    <main className="container-fluid mt-5 pt-5">
      <div className="container">
        <h1 className="text-center mb-4">Bienvenue chez Mouwadji_Inc</h1>

        <p className="lead text-center">
          Bienvenue sur le site de Mouwadji Inc, votre partenaire de confiance
          pour tous vos besoins en déménagement.
        </p>

        <p className="text-center">
          "Nous sommes une entreprise de déménagement expérimentée, spécialisée
          dans la fourniture de services de qualité et de solutions
          personnalisées pour rendre votre déménagement sans stress."
        </p>

        <div className="call-to-action text-center m-5">
          <img
            src="/image/accord.png"
            className="submit-icon"
            alt="Soumission"
          />
          <button type="button" className="btn btn-dark" onClick={handleSubmit}>
            Faire une soumission
          </button>
        </div>

        <div className="row mt-5">
          <div className="col-md-12" id="image_list">
            <div className="row feature">
              <div className="col text-center">
                <img
                  src="/image/Pro.jpeg"
                  className="rounded-circle"
                  alt="Professionnalisme et Expérience"
                />
                <p>
                  Professionnalisme et Expérience - Notre équipe possède une
                  vaste expérience dans l'industrie du déménagement.
                </p>
              </div>
              <div className="col text-center">
                <img
                  src="/image/Per.jpeg"
                  className="rounded-circle"
                  alt="Personnalisation des Services"
                />
                <p>
                  Personnalisation des Services - Nous nous engageons à fournir
                  des services personnalisés pour répondre à vos besoins
                  spécifiques.
                </p>
              </div>
              <div className="col text-center">
                <img
                  src="/image/eq.jpeg"
                  className="rounded-circle"
                  alt="Équipe Qualifiée"
                />
                <p>
                  Équipe Qualifiée - Notre équipe est composée de professionnels
                  qualifiés et dévoués.
                </p>
              </div>
            </div>
            <div className="row feature">
              <div className="col text-center">
                <img
                  src="/image/Ep.jpeg"
                  className="rounded-circle"
                  alt="Équipement de Pointe"
                />
                <p>
                  Équipement de Pointe - Nous utilisons des équipements modernes
                  et de pointe pour garantir un déménagement efficace et
                  sécurisé.
                </p>
              </div>
              <div className="col text-center">
                <img
                  src="/image/Tc.jpeg"
                  className="rounded-circle"
                  alt="Transparence des Coûts"
                />
                <p>
                  Transparence des Coûts - Nous croyons en une transparence
                  totale en ce qui concerne nos tarifs et nos services.
                </p>
              </div>
              <div className="col text-center">
                <img
                  src="/image/ass.jpeg"
                  className="rounded-circle"
                  alt="Assurance"
                />
                <p>
                  Assurance - Votre satisfaction et la sécurité de vos biens
                  sont notre priorité absolue.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="call-to-action text-center mt-5">
          <h2>Prêt pour une expérience de déménagement sans stress ?</h2>
          <p>
            Complétez notre formulaire de soumission dès maintenant et profitez
            de nos services exceptionnels. Nous sommes là pour rendre votre
            déménagement aussi facile que possible !
          </p>
          <img
            src="/image/accord.png"
            className="submit-icon"
            alt="Soumission"
          />
          <button type="button" className="btn btn-dark" onClick={handleSubmit}>
            Faire une soumission
          </button>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col text-center">
          <div className="fireworks-animation">
            <img src="/image/celeb.png" alt="Fireworks Animation" />
          </div>
          <h2 className="mt-3">Célébrons notre succès ensemble</h2>
          <p className="lead">
            Notre entreprise a été classée parmi les meilleures dans l'industrie
            du déménagement. Merci à toute notre équipe dévouée et à nos clients
            fidèles pour leur soutien continu.
          </p>
        </div>
      </div>
    </main>
  );
}

export default PrincipalePage;
