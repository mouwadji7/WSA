import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const verifierToken = (req, res, next) => {
  const bearerToken = req.headers.authorization;
  if (!bearerToken) return res.status(401).json({ message: "Pas authentifié" });
  const token = bearerToken.split(" ")[1];
  jwt.verify(token, process.env.TOKEN_SECRET, (error, decoded) => {
    if (error) return res.status(401).json({ message: "Token invalide" });
    req.userId = decoded.id;
    next();
  });
};
