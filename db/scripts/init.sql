CREATE TABLE IF NOT EXISTS students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    documento VARCHAR(20) NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    lugar_nacimiento VARCHAR(255) NOT NULL,
    direccion VARCHAR(255) NOT NULL,
    telefono VARCHAR(15) NOT NULL,
    correo VARCHAR(255) NOT NULL,
    grado VARCHAR(20) NOT NULL,
    eps VARCHAR(255) NOT NULL,
    rh VARCHAR(10) NOT NULL,
    discapacidad VARCHAR(255) NOT NULL,
    acudiente VARCHAR(255) NOT NULL,
    parentesco_acudiente VARCHAR(50) NOT NULL,
    telefono_acudiente VARCHAR(15) NOT NULL,
    ciudad VARCHAR(100) NOT NULL,
    estrato INT NOT NULL,
    sisben VARCHAR(20) NOT NULL,
    etnia VARCHAR(50) NOT NULL,
    religion VARCHAR(50) NOT NULL,
    grado_repetido ENUM('Si', 'No') NOT NULL,
    razon_repeticion VARCHAR(255),
    situacion_academica VARCHAR(50) NOT NULL,
    curso_reforzamiento ENUM('Si', 'No') NOT NULL,
    grupo VARCHAR(20) NOT NULL
);
