import express from "express";
import * as utilisateurController from "../controllers/utilisateurController";
import { verifierToken } from "../autorisation/verifierToken";
import { roleAuthorization } from "../autorisation/roleAuthorization";

const router = express.Router();

// Routes pour les utilisateurs
router.post(
  "/",
  verifierToken,
  roleAuthorization({
    Admin: ["create"],
    Prof: ["create"],
    Technicien: ["create"],
    Développeur: ["create"],
  }),
  utilisateurController.creerUtilisateur,
);
router.get(
  "/",
  verifierToken,
  roleAuthorization({
    Admin: ["read"],
    Prof: ["read"],
    Technicien: ["read"],
    Développeur: ["read"],
  }),
  utilisateurController.obtenirTousUtilisateurs,
);
router.get(
  "/:id",
  verifierToken,
  roleAuthorization({
    Admin: ["read"],
    Prof: ["read"],
    Technicien: ["read"],
    Développeur: ["read"],
  }),
  utilisateurController.obtenirUtilisateurParId,
);
router.put(
  "/:id",
  verifierToken,
  roleAuthorization({
    Admin: ["update"],
    Prof: ["update"],
    Technicien: ["update"],
    Développeur: ["update"],
  }),
  utilisateurController.modifierUtilisateur,
);
router.delete(
  "/:id",
  verifierToken,
  roleAuthorization({
    Admin: ["delete"],
    Prof: ["delete"],
    Technicien: ["delete"],
    Développeur: ["delete"],
  }),
  utilisateurController.supprimerUtilisateur,
);

export default router;
