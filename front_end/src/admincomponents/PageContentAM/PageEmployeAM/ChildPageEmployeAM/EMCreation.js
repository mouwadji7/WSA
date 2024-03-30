import React, { useState } from "react";
import axiosConfig from "../../../../axiosConfig";

function EMCreation() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newEmployee = {
      nom: nom,
      prenom: prenom,
      email: email,
      telephone: telephone,
      tachesAssignes: [], // Par défaut, la liste des tâches assignées est vide
    };

    axiosConfig
      .post("/employes", newEmployee)
      .then((response) => {
        console.log("Employé créé avec succès:", response.data);
        // Ajoutez ici une logique pour gérer la réussite de la création de l'employé
      })
      .catch((error) => {
        console.error("Erreur lors de la création de l'employé:", error);
        // Ajoutez ici une logique pour gérer l'échec de la création de l'employé
      });

    // Réinitialiser les champs du formulaire après la soumission
    setNom("");
    setPrenom("");
    setEmail("");
    setTelephone("");
  };

  return (
    <div className=" bg-dark text-white">
      <div className="container pt-5">
        <h1 className="text-center text-white mb-4">Créer un nouvel employé</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="nom" className="form-label text-white">
              Nom :
            </label>
            <input
              type="text"
              className="form-control"
              id="nom"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="prenom" className="form-label text-white">
              Prénom :
            </label>
            <input
              type="text"
              className="form-control"
              id="prenom"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label text-white">
              Email :
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="telephone" className="form-label text-white">
              Téléphone :
            </label>
            <input
              type="tel"
              className="form-control"
              id="telephone"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
              required
            />
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary pb-2">
              Créer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EMCreation;
