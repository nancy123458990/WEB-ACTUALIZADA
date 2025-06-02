document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); 

  const usuario = document.getElementById("usuario").value;
  const contrasena = document.getElementById("contrasena").value;

  
  if (usuario === "docente@uleam.edu.ec" && contrasena === "1234") {
    alert("Inicio de sesión exitoso");
    window.location.href = "HTML PANEL.html"; 
  } else {
    alert("Credenciales incorrectas");
  }
});
