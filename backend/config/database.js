// backend/config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mydb', 'root', 'password', {
  host: 'db', // El nombre del contenedor MySQL en Docker Compose
  dialect: 'mysql',
});

module.exports = sequelize;

