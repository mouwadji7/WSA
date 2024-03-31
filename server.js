import express from "express";
import helmet from "helmet";
import compression from "compression";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import utilisateurRoutes from "./routes/utilisateurRoutes";
import roleRoutes from "./routes/roleRoutes";
import authRoutes from "./routes/authRoutes";

// Charger les variables d'environnement à partir du fichier .env
dotenv.config();

// Créer une application Express
const app = express();

// Middlewares
app.use(helmet());
app.use(compression());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/utilisateurs", utilisateurRoutes);
app.use("/api/roles", roleRoutes);

// Port
const PORT = process.env.PORT || 5000;

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
