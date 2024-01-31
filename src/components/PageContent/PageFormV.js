import React from 'react';
import './CSSPageForm.css';

function PageFormV() {
  return (
    <main class="container mt-5 pt-5">
    <h2>Formulaire de Déménagement Choix de voitures n-2</h2>
    <p>Remplissez le formulaire numéro 2 ci-dessous pour obtenir un devis personnalisé et commencer votre expérience de déménagement en toute simplicité.</p>

    <form>
    <div class="col">

        <div class="row">
            <div class="col">
                <label for="firstName">Veuillez estimer la valeur des biens à transporter :</label>
                <select class="form-select" id="sel1" name="sellist1">
                    <option>Moins de 3000 dollars</option>
                    <option>Entre 3000 et 7000 dollars</option>
                    <option>Plus de 7000 dollars</option>
                </select>
            </div>
            <div class="col">
                <label for="lastName">Veuillez indiquer le type d'habitation :</label>
                <select class="form-select" id="sel2" name="sellist2">
                    <option>Bungalow</option>
                    <option>Maison</option>
                    <option>Appartement</option>
                    <option>Autre</option>
                </select>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <label for="AppartNumber">Veuillez préciser votre emplacement dans l'habitation :</label>
                <input type="text" name="AppartNumber" class="form-control" required />
            </div>
            <div class="col">
                <label for="phoneNumber">Veuillez indiquer le nombre de chambres à charger :</label>
                <select class="form-select" id="sel3" name="sellist3">
                    <option>Une chambre</option>
                    <option>Un appartement d'une chambre</option>
                    <option>Un appartement de deux chambres</option>
                    <option>Un appartement de trois chambres</option>
                    <option>Plusieurs pièces</option>
                </select>
            </div>
        </div>

        <div class="row feature mt-5">
            <label>Veuillez préciser quel genre de camion de déménagement pourrait contenir toutes les fournitures de l'appartement :</label>
            <p>Nous comprenons que chaque déménagement est unique, c'est pourquoi nous vous proposons une gamme de camions adaptés à vos besoins spécifiques. Choisissez la taille qui convient le mieux à votre situation :</p>

            <div class="col">
                <label>
                    <input type="radio" name="truckSize" value="10ft" />
                    <img src="/image/vl.png" class="rounded-circle" alt="Camion 10 pieds"/>
                    <p>10' idéal pour les studios et appartements d'une chambre. Parfait si vous avez des meubles et articles de taille standard.</p>
                </label>
            </div>

            <div class="col">
                <label>
                    <input type="radio" name="truckSize" value="17ft" />
                    <img src="/image/vxl.png" class="rounded-circle" alt="Camion 17 pieds"/>
                    <p>17' idéal pour les appartements de deux chambres ou plus. Offre suffisamment d'espace pour des meubles plus volumineux et des objets supplémentaires.</p>
                </label>
            </div>

            <div class="col">
                <label>
                    <input type="radio" name="truckSize" value="26ft" />
                    <img src="/image/vxxl.png" class="rounded-circle" alt="Camion 26 pieds"/>
                    <p>26' idéal pour les maisons de trois chambres et plus. Idéal si vous avez une grande quantité de biens à déménager, y compris des meubles encombrants.</p>
                </label>
            </div>
        </div>

        <div class="row mt-3">
            <div className="col">
              <button type="submit" className="btn btn-primary">
                Soumettre votre demande
              </button>
            </div>
            <div className="col">
              <button type="button" className="btn btn-primary">
                Modifier
              </button>
            </div>
            <div className="col">
              <button type="reset" className="btn btn-primary">
                Effacer le formulaire
              </button>
            </div>
        </div>

    </div>
</form>

</main>
  );
}

export default PageFormV;