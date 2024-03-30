import React, { useState } from "react";

function FaireRapport() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [idEmploye, setIdEmploye] = useState("");
  const [objet, setObjet] = useState("");
  const [rapport, setRapport] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logique pour envoyer le rapport
    console.log("Nom:", nom);
    console.log("Prénom:", prenom);
    console.log("ID Employé:", idEmploye);
    console.log("Objet:", objet);
    console.log("Rapport:", rapport);
    // Réinitialiser les champs après soumission
    setNom("");
    setPrenom("");
    setIdEmploye("");
    setObjet("");
    setRapport("");
  };

  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();

  return (
    <main className="container-fluid mt-5 pt-5">
      <h1 className="text-center mb-4">Faire un Rapport Hebdomadaire</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="mb-3">
          <label htmlFor="nom" className="form-label">
            Nom:
          </label>
          <input
            type="text"
            id="nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="prenom" className="form-label">
            Prénom:
          </label>
          <input
            type="text"
            id="prenom"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="idEmploye" className="form-label">
            ID Employé:
          </label>
          <input
            type="text"
            id="idEmploye"
            value={idEmploye}
            onChange={(e) => setIdEmploye(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="objet" className="form-label">
            Objet:
          </label>
          <input
            type="text"
            id="objet"
            value={objet}
            onChange={(e) => setObjet(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="rapport" className="form-label">
            Rapport:
          </label>
          <textarea
            id="rapport"
            value={rapport}
            onChange={(e) => setRapport(e.target.value)}
            className="form-control"
            rows="5"
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <p>Date: {currentDate}</p>
          <p>Heure: {currentTime}</p>
        </div>
        <button type="submit" className="btn btn-primary">
          Soumettre
        </button>
      </form>
    </main>
  );
}

export default FaireRapport;

// Styles CSS
const styles = `
  .form-container {
    max-width: 600px;
    margin: 0 auto;
  }

  .text-center {
    text-align: center;
  }
`;

// Insérer les styles dans la page
const styleElement = document.createElement("style");
styleElement.innerHTML = styles;
document.head.appendChild(styleElement);
