import express from "express";
import authRoute from "./src/routes/authRoute.js";
import profileRoute from "./src/routes/profileRoute.js";

const app = express();

// Middleware pour parser le corps des requêtes en JSON
app.use(express.json());

// Routes
app.use("/auth", authRoute);
app.use("/profile", profileRoute);

export default app;
