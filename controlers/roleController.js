import { validationResult } from "express-validator";
import Role from "../models/roleModel";

// Créer un rôle
export const creerRole = async (req, res) => {
  // Vérifier les erreurs de validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const role = await Role.create(req.body);
    res.status(201).json(role);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur lors de la création du rôle" });
  }
};

// Obtenir tous les rôles
export const obtenirTousRoles = async (req, res) => {
  try {
    const roles = await Role.findAll();
    res.json(roles);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération des rôles" });
  }
};

// Obtenir un rôle par son ID
export const obtenirRoleParId = async (req, res) => {
  const { id } = req.params;
  try {
    const role = await Role.findByPk(id);
    if (!role) {
      return res.status(404).json({ message: "Rôle non trouvé" });
    }
    res.json(role);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur lors de la récupération du rôle" });
  }
};

// Modifier un rôle
export const modifierRole = async (req, res) => {
  const { id } = req.params;
  // Vérifier les erreurs de validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const [updated] = await Role.update(req.body, {
      where: { id },
    });
    if (updated) {
      const updatedRole = await Role.findByPk(id);
      return res.json({ message: "Rôle modifié", updatedRole });
    }
    throw new Error("Rôle non trouvé");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur lors de la mise à jour du rôle" });
  }
};

// Supprimer un rôle
export const supprimerRole = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Role.destroy({
      where: { id },
    });
    if (deleted) {
      return res.json({ message: "Rôle supprimé" });
    }
    throw new Error("Rôle non trouvé");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur lors de la suppression du rôle" });
  }
};
