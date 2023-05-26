document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtener los valores de los campos del formulario
    var nombre = document.getElementById('nombre').value;
    var correo = document.getElementById('correo').value;
    var mensaje = document.getElementById('mensaje').value;

    // Validar que los campos no estén vacíos
    if (nombre.trim() === '' || correo.trim() === '' || mensaje.trim() === '') {
      alert('Por favor, completa todos los campos del formulario.');
    } else {
      // Aquí puedes realizar cualquier otra validación adicional

      // Si pasa todas las validaciones, mostrar mensaje de éxito
      alert('¡Formulario enviado con éxito!');
      document.getElementById('contact-form').reset(); // Reiniciar el formulario
    }
  });