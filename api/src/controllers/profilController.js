import sequelize from "../config/db.config.js";
import { DataTypes } from "sequelize";

const User = sequelize.define("User", {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
});

export const getProfile = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.userId, {
      attributes: ["name", "email"],
    });
    res.send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const updateProfile = async (req, res) => {
  const allowedUpdates = ["name", "email"];
  const updates = Object.keys(req.body).filter((update) =>
    allowedUpdates.includes(update),
  );

  if (updates.length === 0) {
    return res.status(400).send({ error: "Invalid updates!" });
  }

  try {
    await User.update(req.body, {
      where: { id: req.user.userId },
      fields: updates,
    });
    const user = await User.findByPk(req.user.userId, {
      attributes: ["name", "email"],
    });
    res.send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};
