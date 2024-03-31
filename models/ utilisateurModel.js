import { DataTypes } from "sequelize";
import connexion from "../database/connexion";

const Utilisateur = connexion.define("Utilisateur", {
  nom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  prenom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  naissance: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

// Définir l'association avec Role
Utilisateur.belongsToMany(Role, {
  through: "Utilisateurs_Roles",
  foreignKey: "utilisateur_id",
});

export default Utilisateur;
