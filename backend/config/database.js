// backend/config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mydb', 'root', 'root', {
    host: 'db',
    dialect: 'mysql'
});

module.exports = sequelize;
