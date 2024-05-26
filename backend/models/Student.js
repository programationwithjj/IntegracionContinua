// backend/models/Student.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Student = sequelize.define('Student', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Student;
