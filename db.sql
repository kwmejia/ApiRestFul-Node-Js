-- Crear la base de datos
CREATE DATABASE company;

-- Usar la base de datos creada
USE company;

-- Crear la tabla MASCOTAS
CREATE TABLE MASCOTAS (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(50),
  raza VARCHAR(50),
  edad INT
);