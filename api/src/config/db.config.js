import dotenv from "dotenv"; // Charger les variables d'environnement
import { Sequelize } from "sequelize";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  },
);

sequelize
  .authenticate()
  .then(() => console.log("Connexion à la base de données réussie"))
  .catch((err) => console.error("Erreur de connexion:", err));

export default sequelize;
