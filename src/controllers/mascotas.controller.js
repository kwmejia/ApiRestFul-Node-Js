import Mascota from "../models/Mascota.model.js";

export const listarMascotas = async (req, res) => {
  try {
    const results = await Mascota.findAll();
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const agregarMascota = async (req, res) => {
  try {
    const data = req.body;
    const { nombre, raza, edad } = data;

    if (!nombre || !raza || !edad) {
      res.status(500).json({ error: "Faltan parametros" });
      return;
    }

    const result = await Mascota.insert(data);
    res.status(200).json({ message: "Mascota agregada", result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const actualizarMascota = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const { nombre, raza, edad } = data;

    if (!id || !nombre || !raza || !edad) {
      res.status(500).json({ error: "Faltan parametros" });
      return;
    }

    const result = await Mascota.update( {...data, id});
    res.status(200).json({ message: 'Mascota actualizada', result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const eliminarMascota = async (req, res) => {
    try {
      const { id } = req.params;

      if (!id) {
        res.status(500).json({ error: "Faltan parametros" });
        return;
      }
  
      const result = await Mascota.delete(id);
      res.status(200).json({ message: 'Mascota eliminada', result });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
