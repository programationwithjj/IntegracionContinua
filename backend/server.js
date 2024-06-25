const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3000;

// Configurar body-parser para manejar datos POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Habilitar CORS
app.use(cors());

// Configurar conexión a MySQL usando variables de entorno
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'root',
  database: process.env.DB_NAME || 'escuela'
};

let db;

function handleDisconnect() {
  db = mysql.createConnection(dbConfig);

  db.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:', err.stack);
      setTimeout(handleDisconnect, 2000); // Intentar reconectar después de 2 segundos
    } else {
      console.log('Connected to the database.');
    }
  });

  db.on('error', (err) => {
    console.error('Database error', err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      handleDisconnect(); // Reconectar si la conexión se pierde
    } else {
      throw err;
    }
  });
}

handleDisconnect();

// Ruta para manejar la inscripción de estudiantes
app.post('/register', (req, res) => {
  const student = req.body;
  const query = 'INSERT INTO students SET ?';

  db.query(query, student, (err, result) => {
    if (err) {
      console.error('Error inserting data into the database:', err.stack);
      res.status(500).json({ message: 'Error registering student' });
      return;
    }
    res.status(200).json({ message: 'Student registered successfully' });
  });
});

// Ruta para obtener y mostrar los datos de los estudiantes
app.get('/students', (req, res) => {
  const query = 'SELECT * FROM students';

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching data from the database:', err.stack);
      res.status(500).json({ message: 'Error fetching students data' });
      return;
    }
    res.status(200).json(results);
  });
});

// Ruta para manejar solicitudes GET en la raíz
app.get('/', (req, res) => {
  res.send('Bienvenido al servidor backend. El servidor está funcionando correctamente.');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
