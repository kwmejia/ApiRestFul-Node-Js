import { db } from "../../database/db-config.js";

class Mascota {
  static async findAll() {
    const [results] = await db.query("SELECT * FROM MASCOTAS");
    return results;
  }

  static async insert(data) {
    const { nombre, raza, edad } = data;
    const [result] = await db.query(
      "INSERT INTO MASCOTAS (nombre, raza, edad) VALUES (?, ?, ?)",
      [nombre, raza, edad]
    );
    return result;
  }

  static async update(data) {
    const { nombre, raza, edad, id } = data;
    const [result] = await db.query(
      "UPDATE MASCOTAS SET nombre = ?, raza = ?, edad = ? WHERE id = ?",
      [nombre, raza, edad, id]
    );
    return result;
  }

  static async delete(id) {
    const [result] = await db.query(
      "DELETE FROM MASCOTAS WHERE id = ?",
      [id]
    );
    return result;
  }
}

export default Mascota;
