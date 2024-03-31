import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_DIALECT } = process.env;

const connexion = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: DB_DIALECT,
});

connexion.authenticate()
    .then(() => {
        console.log('Connexion à la base de données établie avec succès');
    })
    .catch(err => {
        console.error('Impossible de se connecter à la base de données:', err);
    });

export default connexion;