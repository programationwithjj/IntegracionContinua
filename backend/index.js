app.post('/register', async (req, res) => {
    const {
        nombre,
        documento,
        fecha_nacimiento,
        lugar_nacimiento,
        direccion,
        telefono,
        correo,
        grado,
        eps,
        rh,
        discapacidad,
        acudiente,
        parentesco,
        telefono_acudiente,
        ciudad,
        estrato,
        sisben,
        etnia,
        religion,
        grado_repetido,
        razon_repeticion,
        situacion_academica,
        curso_reforzamiento,
        grupo
    } = req.body;

    console.log(req.body); // Imprimir los datos recibidos

    try {
        const student = await Student.create({
            nombre,
            documento,
            fecha_nacimiento,
            lugar_nacimiento,
            direccion,
            telefono,
            correo,
            grado,
            eps,
            rh,
            discapacidad,
            acudiente,
            parentesco,
            telefono_acudiente,
            ciudad,
            estrato,
            sisben,
            etnia,
            religion,
            grado_repetido,
            razon_repeticion,
            situacion_academica,
            curso_reforzamiento,
            grupo
        });
        console.log('Estudiante registrado:', student); // Imprimir el estudiante registrado
        res.status(200).json({ message: 'Estudiante registrado exitosamente', student });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Hubo un error al registrar al estudiante' });
    }
});
