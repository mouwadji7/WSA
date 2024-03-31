import { DataTypes } from "sequelize";
import connexion from "../database/connexion";

const Role = connexion.define("Role", {
  titre: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isIn: [["Admin", "Prof", "Technicien", "Développeur"]],
    },
  },
});

// Définir l'association avec Utilisateur
Role.belongsToMany(Utilisateur, {
  through: "Utilisateurs_Roles",
  foreignKey: "role_id",
});

export default Role;
