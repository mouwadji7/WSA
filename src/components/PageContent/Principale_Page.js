import React from 'react';
import './CSSPrincipale_Page.css';

function Principale_Page({ onNavigateToForm }){ 
  return (
    <main class="container-fluid mt-5 pt-5">
            <div class="container">
                <h1 class="text-center">Bienvenue chez Mouwadji_Inc</h1>
                <p class="lead text-center">
                    Bienvenue sur le site de Mouwadji Inc, votre partenaire de confiance pour tous vos besoins en déménagement.
                </p>
                <p class="text-center">
                    "Nous sommes une entreprise de déménagement expérimentée, spécialisée dans la fourniture de services de qualité et de solutions personnalisées pour rendre votre déménagement sans stress."
                </p>
    
                <div class="row mt-5">
                    <div class="col-md-12" id="image_list">
                        <div class="row feature">
                            <div class="col">
                                <img src="/image/Pro.jpeg" class="rounded-circle" alt="Professionnalisme et Expérience"/>
                                <p>Professionnalisme et Expérience</p>
                            </div>
                            <div class="col">
                                <img src="/image/Per.jpeg" class="rounded-circle" alt="Personnalisation des Services"/>
                                <p>Personnalisation des Services</p>
                            </div>
                            <div class="col">
                                <img src="/image/eq.jpeg" class="rounded-circle" alt="Équipe Qualifiée"/>
                                <p>Équipe Qualifiée</p>
                            </div>
                        </div>
                        <div class="row feature">
                            <div class="col">
                                <img src="/image/Ep.jpeg" class="rounded-circle" alt="Équipement de Pointe"/>
                                <p>Équipement de Pointe</p>
                            </div>
                            <div class="col">
                                <img src="/image/Tc.jpeg" class="rounded-circle" alt="Transparence des Coûts"/>
                                <p>Transparence des Coûts</p>
                            </div>
                            <div class="col">
                                <img src="/image/ass.jpeg" class="rounded-circle" alt="Assurance"/>
                                <p>Assurance</p>
                            </div>
                        </div>
                    </div>
                    
                </div>

                <div class="call-to-action">
                    <h2>Prêt pour une expérience de déménagement sans stress?</h2>
                    <p>Complétez notre formulaire de soumission dès maintenant et 
                        profitez de nos services exceptionnels. Nous sommes là pour 
                        rendre votre déménagement aussi facile que possible!</p>
                        
                    <button type="button" class="btn btn-dark" onClick={onNavigateToForm}>Faires une soumission</button>

                </div>

            </div>
        </main>
  );
}

export default Principale_Page;