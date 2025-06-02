const notificaciones = [
  {
    tipo: "Aprobación",
    fecha: "2025-05-15",
    mensaje: "Su solicitud de promoción ha sido aprobada."
  },
  {
    tipo: "Corrección solicitada",
    fecha: "2025-04-20",
    mensaje: "Adjuntar publicación indexada para completar requisitos."
  },
  {
    tipo: "Rechazo",
    fecha: "2025-03-10",
    mensaje: "Solicitud rechazada por falta de certificados actualizados."
  }
];

function renderNotificaciones() {
  const contenedor = document.getElementById("listaNotificaciones");

  if (notificaciones.length === 0) {
    contenedor.innerHTML = "<p>No hay notificaciones disponibles.</p>";
    return;
  }

  const lista = document.createElement("ul");
  notificaciones.forEach(n => {
    const item = document.createElement("li");
    item.style.marginBottom = "1rem";
    item.innerHTML = `
      <strong>${n.tipo}</strong> - ${n.fecha}<br />
      ${n.mensaje}<br />
      <button onclick="verDetalle('${n.mensaje}')">Ver detalle</button>
    `;
    lista.appendChild(item);
  });

  contenedor.appendChild(lista);
}

function verDetalle(mensaje) {
  alert("Detalle: " + mensaje);
}

document.addEventListener("DOMContentLoaded", renderNotificaciones);
