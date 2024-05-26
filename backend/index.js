// backend/index.js

const express = require('express');
const app = express();
const port = 5000;

// Middleware para analizar el cuerpo de las solicitudes JSON
app.use(express.json());

// Ruta para manejar la solicitud POST del formulario de inscripción
app.post('/register', (req, res) => {
    // Obtener los datos del cuerpo de la solicitud
    const { name, email, age } = req.body;
    
    // Aquí puedes guardar los datos en tu base de datos o realizar cualquier otra acción necesaria
    console.log(`Nuevo estudiante registrado: Nombre: ${name}, Email: ${email}, Edad: ${age}`);
    
    // Enviar una respuesta al cliente
    res.status(200).json({ message: 'Estudiante registrado exitosamente' });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Backend app listening at http://localhost:${port}`);
});
