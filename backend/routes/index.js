// backend/routes/index.js
const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

// Ruta para obtener todos los estudiantes
router.get('/students', studentController.getAllStudents);

module.exports = router;

