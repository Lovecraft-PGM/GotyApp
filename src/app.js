import express from "express";
import dotenv from "dotenv";
import connectionDB from "./db.js"; // Asegúrate de que el archivo se llame db.js

// Configurar dotenv antes de usar variables de entorno
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Conectar a la base de datos
connectionDB();

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

export default app;