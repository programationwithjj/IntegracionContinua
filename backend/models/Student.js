// backend/models/Student.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Student = sequelize.define('Student', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    documento: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha_nacimiento: {
        type: DataTypes.DATE,
        allowNull: false
    },
    lugar_nacimiento: {
        type: DataTypes.STRING,
        allowNull: false
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    grado: {
        type: DataTypes.STRING,
        allowNull: false
    },
    eps: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rh: {
        type: DataTypes.STRING,
        allowNull: false
    },
    discapacidad: {
        type: DataTypes.STRING,
        allowNull: false
    },
    acudiente: {
        type: DataTypes.STRING,
        allowNull: false
    },
    parentesco: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefono_acudiente: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ciudad: {
        type: DataTypes.STRING,
        allowNull: false
    },
    estrato: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sisben: {
        type: DataTypes.STRING,
        allowNull: false
    },
    etnia: {
        type: DataTypes.STRING,
        allowNull: false
    },
    religion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    grado_repetido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    razon_repeticion: {
        type: DataTypes.STRING,
        allowNull: true
    },
    situacion_academica: {
        type: DataTypes.STRING,
        allowNull: false
    },
    curso_reforzamiento: {
        type: DataTypes.STRING,
        allowNull: false
    },
    grupo: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Student;
// Path: backend/routes/student.js
// Compare this snippet from frontend/scripts.js:
// // frontend/script.js
