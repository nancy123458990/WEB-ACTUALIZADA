const historial = [
  {
    fecha: "2025-05-10",
    tipo: "Promoción",
    estado: "Aprobada",
    observaciones: "Documentación completa. Felicitaciones."
  },
  {
    fecha: "2025-03-02",
    tipo: "Recategorización",
    estado: "Pendiente (con observaciones)",
    observaciones: "Faltó certificado de publicaciones."
  },
  {
    fecha: "2024-11-18",
    tipo: "Promoción",
    estado: "Rechazada",
    observaciones: "No cumplió con el tiempo mínimo en categoría actual."
  }
];

function renderHistorial() {
  const contenedor = document.getElementById("tablaHistorial");

  if (historial.length === 0) {
    contenedor.innerHTML = "<p>No hay solicitudes registradas.</p>";
    return;
  }

  const tabla = document.createElement("table");
  tabla.style.width = "100%";
  tabla.border = "1";

  const thead = tabla.createTHead();
  const cabecera = thead.insertRow();
  ["Fecha", "Tipo", "Estado", "Observaciones", "Detalle"].forEach(texto => {
    const th = document.createElement("th");
    th.textContent = texto;
    cabecera.appendChild(th);
  });

  const tbody = tabla.createTBody();
  historial.forEach(item => {
    const fila = tbody.insertRow();
    fila.insertCell().textContent = item.fecha;
    fila.insertCell().textContent = item.tipo;
    fila.insertCell().textContent = item.estado;
    fila.insertCell().textContent = item.observaciones;

    const btnVer = document.createElement("button");
    btnVer.textContent = "Ver detalle";
    btnVer.onclick = () => {
      alert(`Mostrando detalle de solicitud del ${item.fecha}`);
    };

    const celda = fila.insertCell();
    celda.appendChild(btnVer);
  });

  contenedor.appendChild(tabla);
}

document.addEventListener("DOMContentLoaded", renderHistorial);
