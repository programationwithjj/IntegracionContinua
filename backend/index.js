const express = require('express');
const sequelize = require('./config/database');
const Student = require('./models/Student');

const app = express();
const port = 5000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Bienvenido al servidor del backend!');
});

app.post('/register', async (req, res) => {
    const { name, email, age } = req.body;
    try {
        const student = await Student.create({ name, email, age });
        res.status(200).json({ message: 'Estudiante registrado exitosamente', student });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Hubo un error al registrar al estudiante' });
    }
});

sequelize.sync()
    .then(() => {
        app.listen(port, () => {
            console.log(`Backend app listening at http://localhost:${port}`);
        });
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
