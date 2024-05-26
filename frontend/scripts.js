// frontend/script.js
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('simatForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevenir el envío del formulario

        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        fetch('http://localhost:5000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            if (data.message) {
                alert(data.message);
                form.reset();
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('error-message').textContent = 'Hubo un error al enviar el formulario.';
        });
    });
});

