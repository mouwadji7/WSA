import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import Utilisateur from "../models/utilisateurModel";

dotenv.config();

// Fonction de validation des données de l'utilisateur lors de la connexion
const validateLoginData = [
  check("username", "Le nom d'utilisateur est requis").notEmpty(),
  check("password", "Le mot de passe est requis").notEmpty(),
];

// Fonction de connexion de l'utilisateur
export const login = async (req, res) => {
  // Vérification des erreurs de validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { username, password } = req.body;
    // Recherche de l'utilisateur dans la base de données
    const utilisateur = await Utilisateur.findOne({ where: { username } });
    if (!utilisateur) {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }
    // Vérification du mot de passe
    const motDePasseValide = await bcrypt.compare(
      password,
      utilisateur.password,
    );
    if (!motDePasseValide) {
      return res.status(401).json({ message: "Mot de passe incorrect" });
    }
    // Création du jeton d'authentification
    const token = jwt.sign({ id: utilisateur.id }, process.env.TOKEN_SECRET);
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur lors de l'authentification" });
  }
};
