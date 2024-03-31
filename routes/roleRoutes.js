import express from "express";
import * as roleController from "../controllers/roleController";
import { verifierToken } from "../autorisation/verifierToken";
import { roleAuthorization } from "../autorisation/roleAuthorization";

const router = express.Router();

// Routes pour les rôles
router.post(
  "/",
  verifierToken,
  roleAuthorization({
    Admin: ["create"],
    Prof: [],
    Technicien: [],
    Développeur: [],
  }),
  roleController.creerRole,
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
  roleController.obtenirTousRoles,
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
  roleController.obtenirRoleParId,
);
router.put(
  "/:id",
  verifierToken,
  roleAuthorization({
    Admin: ["update"],
    Prof: [],
    Technicien: [],
    Développeur: [],
  }),
  roleController.modifierRole,
);
router.delete(
  "/:id",
  verifierToken,
  roleAuthorization({
    Admin: ["delete"],
    Prof: [],
    Technicien: [],
    Développeur: [],
  }),
  roleController.supprimerRole,
);

export default router;
