document.getElementById("registroForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const cedula = document.getElementById("cedula").value;
  const correo = document.getElementById("correo").value;
  const facultad = document.getElementById("facultad").value;
  const categoria = document.getElementById("categoria").value;
  const titulo = document.getElementById("titulo").value;
  const clave = document.getElementById("clave").value;

  if (nombre && cedula && correo && facultad && categoria && titulo && clave) {
    alert("Registro exitoso. ¡Bienvenido!");
    window.location.href = "index.html";
  } else {
    alert("Por favor, complete todos los campos.");
  }
});
