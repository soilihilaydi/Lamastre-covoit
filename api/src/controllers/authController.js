import { hashPassword, comparePassword } from "../helpers/helper.js";
import utilisateur from "../models/utilisateur.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await utilisateur.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).send({ error: "Email déjà utilisé" });
    }
    const hashedPassword = await hashPassword(password);
    const newUser = await utilisateur.create({
      name,
      email,
      password: hashedPassword,
    });
    const token = await generateAuthToken(newUser.id);
    res.status(201).send({ user: newUser, token });
  } catch (error) {
    res.status(400).send(error);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await utilisateur.findOne({ where: { email } });
    if (!user) {
      return res.status(400).send({ error: "Impossible de se connecter" });
    }
    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      return res.status(400).send({ error: "Impossible de se connecter" });
    }
    const token = await generateAuthToken(user.id);
    res.send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
};

const generateAuthToken = async (userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET);
  return token;
};
