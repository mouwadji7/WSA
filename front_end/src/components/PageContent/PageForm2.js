import React, { useState } from 'react';

function PageFormV({ onSubmit }) {
  const [formDataV, setFormDataV] = useState({
    sellist1: '',
    sellist2: '',
    AppartNumber: '',
    sellist3: '',
    truckSize: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDataV((prevFormDataV) => ({
      ...prevFormDataV,
      [name]: value,
    }));
  };

  const handleSubmitV = (e) => {
    e.preventDefault();
    const formDataV = {
      sellist1: e.target.sel1.value,
      sellist2: e.target.sel2.value,
      AppartNumber: e.target.AppartNumber.value,
      sellist3: e.target.sellist3.value,
      truckSize: e.target.truckSize.value,
    };
    if (onSubmit) {
      onSubmit(formDataV);
    }
  };

  return (
    <main className="container mt-5 pt-5">
      <h2>Formulaire de Déménagement Choix de voitures nº2</h2>
      <p>Remplissez le formulaire numéro 2 ci-dessous pour obtenir un devis personnalisé et commencer votre expérience de déménagement en toute simplicité.</p>

      <form onSubmit={handleSubmitV}>
        <div className="col">
          <div className="row">
            <div className="col">
              <label htmlFor="valueOfGoods">Veuillez estimer la valeur des biens à transporter :</label>
              <select
                className="form-select"
                id="sel1"
                name="sellist1"
                onChange={handleInputChange}
                value={formDataV.sellist1}
              >
                <option>Moins de 3000 dollars</option>
                <option>Entre 3000 et 7000 dollars</option>
                <option>Plus de 7000 dollars</option>
              </select>
            </div>
            <div className="col">
              <label htmlFor="dwellingType">Veuillez indiquer le type d'habitation :</label>
              <select className="form-select" id="sel2" name="sellist2"
                onChange={handleInputChange}
                value={formDataV.sellist2}
              >
                <option>Bungalow</option>
                <option>Maison</option>
                <option>Appartement</option>
                <option>Autre</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label htmlFor="AppartNumber">Veuillez préciser votre emplacement dans l'habitation :</label>
              <input type="text" name="AppartNumber" className="form-control" required />
            </div>
            <div className="col">
              <label htmlFor="phoneNumber">Veuillez indiquer le nombre de chambres à charger :</label>
              <select className="form-select" id="sel3" name="sellist3" onChange={handleInputChange} value={formDataV.sellist3}>
                <option>Une chambre</option>
                <option>Un appartement d'une chambre</option>
                <option>Un appartement de deux chambres</option>
                <option>Un appartement de trois chambres</option>
                <option>Plusieurs pièces</option>
              </select>
            </div>
          </div>

          <div className="row feature mt-5">
            <label>Veuillez préciser quel genre de camion de déménagement pourrait contenir toutes les fournitures de l'appartement :</label>
            <p>Nous comprenons que chaque déménagement est unique, c'est pourquoi nous vous proposons une gamme de camions adaptés à vos besoins spécifiques. Choisissez la taille qui convient le mieux à votre situation :</p>

            <div className="col">
              <label>
                <input type="radio" name="truckSize" value="10ft" onChange={handleInputChange} checked={formDataV.truckSize === '10ft'} />
                <img src="/image/vl.png" className="rounded-circle" alt="Camion 10 pieds" />
                <p>10' idéal pour les studios et appartements d'une chambre. Parfait si vous avez des meubles et articles de taille standard.</p>
              </label>
            </div>

            <div className="col">
              <label>
                <input type="radio" name="truckSize" value="17ft" onChange={handleInputChange} checked={formDataV.truckSize === '17ft'} />
                <img src="/image/vxl.png" className="rounded-circle" alt="Camion 17 pieds" />
                <p>17' idéal pour les appartements de deux chambres ou plus. Offre suffisamment d'espace pour des meubles plus volumineux et des objets supplémentaires.</p>
              </label>
            </div>

            <div className="col">
              <label>
                <input type="radio" name="truckSize" value="26ft" onChange={handleInputChange} checked={formDataV.truckSize === '26ft'} />
                <img src="/image/vxxl.png" className="rounded-circle" alt="Camion 26 pieds" />
                <p>26' idéal pour les maisons de trois chambres et plus. Idéal si vous avez une grande quantité de biens à déménager, y compris des meubles encombrants.</p>
              </label>
            </div>
          </div>

          <div className="row mt-3">
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
