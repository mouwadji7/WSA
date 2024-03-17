import React, { useState } from "react";

function GestionTaches({ listeEmployes, setListeEmployes }) {
  const [tache, setTache] = useState("");
  const [employeId, setEmployeId] = useState("");

  const ajouterTacheAEmploye = () => {
    // Trouver l'employé par son ID
    const employe = listeEmployes.find((emp) => emp.id === employeId);
    if (employe) {
      // Ajouter la tâche à l'employé spécifique
      const tachesMiseAJour = [...employe.taches, tache];
      const employeMiseAJour = { ...employe, taches: tachesMiseAJour };

      // Mettre à jour la liste des employés avec les tâches mises à jour
      const listeEmployesMiseAJour = listeEmployes.map((emp) =>
        emp.id === employeId ? employeMiseAJour : emp
      );

      setListeEmployes(listeEmployesMiseAJour);

      // Réinitialiser les champs
      setTache("");
      setEmployeId("");
    } else {
      alert("Employé non trouvé avec cet ID");
    }
  };

  return (
    <div>
      <h2>Gestion des Tâches des Employés</h2>
      <input
        type="text"
        value={tache}
        onChange={(e) => setTache(e.target.value)}
        placeholder="Nom de la tâche"
      />
      <input
        type="text"
        value={employeId}
        onChange={(e) => setEmployeId(e.target.value)}
        placeholder="ID de l'employé"
      />
      <button onClick={ajouterTacheAEmploye}>Ajouter Tâche à l'Employé</button>
      {/* on va ajouter les tache que l'on va ajouter  */}
    </div>
  );
}

export default GestionTaches;
