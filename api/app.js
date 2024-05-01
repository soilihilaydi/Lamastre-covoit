import express from "express";

const app = express();

// Middleware pour parser le corps des requêtes en JSON
app.use(express.json());

// Routes

export default app;
