
function validateForm() {
    let valid = true;
    return valid;
}

document.getElementById("solicitudForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const tipo = document.getElementById("tipoTramite").value;
  const cv = document.getElementById("cv").files.length > 0;
  const titulo = document.getElementById("titulo").files.length > 0;
  const certificados = document.getElementById("certificados").files.length > 0;

  if (tipo && cv && titulo && certificados) {
    alert("Solicitud enviada correctamente.");
    window.location.href = "HTML PANEL.html";
  } else {
    alert("Por favor, complete todos los campos obligatorios y adjunte los documentos requeridos.");
  }
});
