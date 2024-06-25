CREATE DATABASE IF NOT EXISTS escuela;

USE escuela;

CREATE TABLE IF NOT EXISTS students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  documento VARCHAR(255) NOT NULL,
  fecha_nacimiento DATE NOT NULL,
  lugar_nacimiento VARCHAR(255) NOT NULL,
  direccion VARCHAR(255) NOT NULL,
  telefono VARCHAR(255) NOT NULL,
  correo VARCHAR(255) NOT NULL,
  grado VARCHAR(255) NOT NULL,
  eps VARCHAR(255) NOT NULL,
  rh VARCHAR(255) NOT NULL,
  discapacidad VARCHAR(255) NOT NULL,
  acudiente VARCHAR(255) NOT NULL,
  parentesco VARCHAR(255) NOT NULL,
  telefono_acudiente VARCHAR(255) NOT NULL,
  ciudad VARCHAR(255) NOT NULL,
  estrato VARCHAR(255) NOT NULL,
  sisben VARCHAR(255) NOT NULL,
  etnia VARCHAR(255) NOT NULL,
  religion VARCHAR(255) NOT NULL,
  grado_repetido VARCHAR(255) NOT NULL,
  razon_repeticion VARCHAR(255),
  situacion_academica VARCHAR(255) NOT NULL,
  curso_reforzamiento VARCHAR(255) NOT NULL,
  grupo VARCHAR(255) NOT NULL
);
