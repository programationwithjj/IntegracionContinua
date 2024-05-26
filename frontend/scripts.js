document.getElementById("studentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const requestData = Object.fromEntries(formData.entries());

    fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
        alert('Estudiante inscrito exitosamente!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Hubo un error al inscribir al estudiante. Por favor, inténtalo de nuevo.');
    });
});
