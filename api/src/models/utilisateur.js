import { DataTypes } from "sequelize";
import sequelize from "../config/db.config.js";

const Utilisateur = sequelize.define("Utilisateur", {
  idUtilisateur: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  motDePasse: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nom: {
    type: DataTypes.STRING,
  },
  adresse: {
    type: DataTypes.STRING,
  },
  numéroDeTéléphone: {
    type: DataTypes.STRING,
  },
  photoUrl: {
    type: DataTypes.STRING,
  },
  rôle: {
    type: DataTypes.STRING,
  },
});

export default Utilisateur;
