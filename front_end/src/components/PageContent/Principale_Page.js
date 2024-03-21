import React from "react";
import "./CSSPrincipale_Page.css";

function Principale_Page({ onNavigateToForm }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    // This function prevents the default form submission behavior
    // and invokes the onNavigateToForm function passed as a prop
    // which triggers navigation to the form page.
    onNavigateToForm();
  };

  return (
    <main className="container-fluid mt-5 pt-5">
      <div className="container">
        <h1 className="text-center">Bienvenue chez Mouwadji_Inc</h1>
        <p className="lead text-center">
          Bienvenue sur le site de Mouwadji Inc, votre partenaire de confiance
          pour tous vos besoins en déménagement.
        </p>
        <p className="text-center">
          "Nous sommes une entreprise de déménagement expérimentée, spécialisée
          dans la fourniture de services de qualité et de solutions
          personnalisées pour rendre votre déménagement sans stress."
        </p>

        <div className="row mt-5">
          <div className="col-md-12" id="image_list">
            <div className="row feature">
              <div className="col">
                <img
                  src="/image/Pro.jpeg"
                  className="rounded-circle"
                  alt="Professionnalisme et Expérience"
                />
                <p>Professionnalisme et Expérience</p>
              </div>
              <div className="col">
                <img
                  src="/image/Per.jpeg"
                  className="rounded-circle"
                  alt="Personnalisation des Services"
                />
                <p>Personnalisation des Services</p>
              </div>
              <div className="col">
                <img
                  src="/image/eq.jpeg"
                  className="rounded-circle"
                  alt="Équipe Qualifiée"
                />
                <p>Équipe Qualifiée</p>
              </div>
            </div>
            <div className="row feature">
              <div className="col">
                <img
                  src="/image/Ep.jpeg"
                  className="rounded-circle"
                  alt="Équipement de Pointe"
                />
                <p>Équipement de Pointe</p>
              </div>
              <div className="col">
                <img
                  src="/image/Tc.jpeg"
                  className="rounded-circle"
                  alt="Transparence des Coûts"
                />
                <p>Transparence des Coûts</p>
              </div>
              <div className="col">
                <img
                  src="/image/ass.jpeg"
                  className="rounded-circle"
                  alt="Assurance"
                />
                <p>Assurance</p>
              </div>
            </div>
          </div>
        </div>

        <div className="call-to-action">
          <h2>Prêt pour une expérience de déménagement sans stress?</h2>
          <p>
            Complétez notre formulaire de soumission dès maintenant et profitez
            de nos services exceptionnels. Nous sommes là pour rendre votre
            déménagement aussi facile que possible!
          </p>

          <button type="button" className="btn btn-dark" onClick={handleSubmit}>
            Faire une soumission
          </button>
        </div>
      </div>
    </main>
  );
}

export default Principale_Page;
