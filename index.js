import express from "express";
import { connectToDatabase } from "./database/db-config.js";
import { actualizarMascota, agregarMascota, eliminarMascota, listarMascotas } from "./src/controllers/mascotas.controller.js";

const app = express();

connectToDatabase();

app.use(express.json());

// Rutas
app.get("/mascotas", listarMascotas);
app.post("/mascotas/agregar", agregarMascota);
app.put('/mascotas/:id', actualizarMascota);
app.delete('/mascotas/:id', eliminarMascota);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
