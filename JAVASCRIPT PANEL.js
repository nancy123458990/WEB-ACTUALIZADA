document.addEventListener("DOMContentLoaded", () => {
  
  const saludo = document.getElementById("saludo");
  saludo.textContent = "¡Hola, Bienvenido!"; 

  
});

function cerrarSesion() {
  alert("Sesión cerrada correctamente.");
  window.location.href = "HTML LOGIN.html";
}
