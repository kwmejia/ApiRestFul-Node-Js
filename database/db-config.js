import mysql2 from "mysql2/promise";

export let db;

export const connectToDatabase = async () => {
  try {
    db = await mysql2.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "company",
    });
    console.log("Conectado a la base de datos MySQL");
  } catch (err) {
    console.error("Error al conectar a la base de datos:", err);
  }
};
