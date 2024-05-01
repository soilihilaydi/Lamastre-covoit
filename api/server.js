import app from "./app.js";
import dotenv from "dotenv";

// Charger les variables d'environnement
dotenv.config();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(
    `hey man ca roule pour toi pour moi ca tourne le serveur et pret  ${PORT}`,
  );
});
