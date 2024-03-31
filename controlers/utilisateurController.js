import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import Utilisateur from "../models/utilisateurModel";

dotenv.config();

// Créer un utilisateur
export const creerUtilisateur = async (req, res) => {
  // Vérifier les erreurs de validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const utilisateur = await Utilisateur.create(req.body);
    res.status(201).json(utilisateur);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Erreur lors de la création de l'utilisateur" });
  }
};

// Obtenir tous les utilisateurs
export const obtenirTousUtilisateurs = async (req, res) => {
  try {
    const utilisateurs = await Utilisateur.findAll();
    res.json(utilisateurs);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération des utilisateurs" });
  }
};

// Obtenir un utilisateur par son ID
export const obtenirUtilisateurParId = async (req, res) => {
  const { id } = req.params;
  try {
    const utilisateur = await Utilisateur.findByPk(id);
    if (!utilisateur) {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }
    res.json(utilisateur);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération de l'utilisateur" });
  }
};

// Modifier un utilisateur
export const modifierUtilisateur = async (req, res) => {
  const { id } = req.params;
  // Vérifier les erreurs de validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const [updated] = await Utilisateur.update(req.body, {
      where: { id },
    });
    if (updated) {
      const updatedUtilisateur = await Utilisateur.findByPk(id);
      return res.json({ message: "Utilisateur modifié", updatedUtilisateur });
    }
    throw new Error("Utilisateur non trouvé");
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Erreur lors de la mise à jour de l'utilisateur" });
  }
};

// Supprimer un utilisateur
export const supprimerUtilisateur = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Utilisateur.destroy({
      where: { id },
    });
    if (deleted) {
      return res.json({ message: "Utilisateur supprimé" });
    }
    throw new Error("Utilisateur non trouvé");
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Erreur lors de la suppression de l'utilisateur" });
  }
};
