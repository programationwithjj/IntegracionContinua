// backend/controllers/studentController.js
const Student = require('../models/Student');

// Controlador para obtener todos los estudiantes
exports.getAllStudents = async (req, res) => {
  try {
    // Consultar la base de datos para obtener todos los estudiantes
    const students = await Student.findAll();

    // Enviar la lista de estudiantes como respuesta
    res.status(200).json({ success: true, students });
  } catch (error) {
    // Manejar cualquier error que ocurra durante la consulta
    console.error(error);
    res.status(500).json({ success: false, message: 'Error al obtener los estudiantes' });
  }
};
