// Función para validar el formulario
function validateForm() {
  // Aquí podrías agregar tu lógica de validación si lo deseas
  return true; // Devolvemos true para permitir el envío del formulario
}

// Función para previsualizar los datos ingresados en el formulario
function previewData() {
  const nombre = document.getElementById('nombre').value;
  const documento = document.getElementById('documento').value;
  const fechaNacimiento = document.getElementById('fecha_nacimiento').value;
  const lugarNacimiento = document.getElementById('lugar_nacimiento').value;
  const direccion = document.getElementById('direccion').value;
  const telefono = document.getElementById('telefono').value;
  const correo = document.getElementById('correo').value;
  const grado = document.getElementById('grado').value;
  const eps = document.getElementById('eps').value;
  const rh = document.getElementById('rh').value;
  const discapacidad = document.getElementById('discapacidad').value;
  const acudiente = document.getElementById('acudiente').value;
  const parentesco = document.getElementById('parentesco').value;
  const telefonoAcudiente = document.getElementById('telefono_acudiente').value;
  const ciudad = document.getElementById('ciudad').value;
  const estrato = document.getElementById('estrato').value;
  const sisben = document.getElementById('sisben').value;
  const etnia = document.getElementById('etnia').value;
  const religion = document.getElementById('religion').value;
  const gradoRepetido = document.getElementById('grado_repetido').value;
  const razonRepeticion = document.getElementById('razon_repeticion').value;
  const situacionAcademica = document.getElementById('situacion_academica').value;
  const cursoReforzamiento = document.getElementById('curso_reforzamiento').value;
  const grupo = document.getElementById('grupo').value;

  const previewData = `
      Nombre completo: ${nombre}
      Documento de identidad: ${documento}
      Fecha de Nacimiento: ${fechaNacimiento}
      Lugar de Nacimiento: ${lugarNacimiento}
      Dirección de residencia: ${direccion}
      Teléfono: ${telefono}
      Correo electrónico: ${correo}
      Grado: ${grado}
      EPS: ${eps}
      Grupo Sanguíneo y RH: ${rh}
      Discapacidad: ${discapacidad}
      Nombre del acudiente: ${acudiente}
      Parentesco con el acudiente: ${parentesco}
      Teléfono del acudiente: ${telefonoAcudiente}
      Ciudad de residencia: ${ciudad}
      Estrato socioeconómico: ${estrato}
      Puntaje SISBEN: ${sisben}
      Etnia: ${etnia}
      Religión: ${religion}
      ¿Ha repetido algún grado?: ${gradoRepetido}
      Razón de repetición: ${razonRepeticion}
      Situación Académica: ${situacionAcademica}
      ¿Necesita curso de reforzamiento?: ${cursoReforzamiento}
      Grupo: ${grupo}
  `;

  alert(previewData); // Mostrar los datos en una alerta
}


// Función para mostrar mensaje de registro exitoso
function showSuccessMessage() {
  const successMessage = document.createElement('div');
  successMessage.classList.add('success');
  successMessage.textContent = '¡Tu registro fue exitoso!';
  document.body.appendChild(successMessage);

  // Eliminar el mensaje después de unos segundos
  setTimeout(function() {
      successMessage.remove();
  }, 3000); // 3000 milisegundos = 3 segundos
}

// Agregar evento al formulario
document.getElementById('simatForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar que el formulario se envíe por defecto

  // Validar el formulario
  if (validateForm()) {
      // Mostrar mensaje de registro exitoso
      showSuccessMessage();

      // Previsualizar los datos ingresados en el formulario
      previewData();

      // Aquí podrías enviar los datos del formulario a través de AJAX si lo deseas
  } else {
      // En caso de que la validación del formulario falle, podrías mostrar un mensaje de error aquí
  }
});