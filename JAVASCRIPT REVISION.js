const solicitudes = [
  {
    id: 1,
    docente: "María Pérez",
    tipo: "Promoción",
    estado: "Pendiente",
    documentos: ["CV.pdf", "Titulo.pdf", "Certificados.pdf"],
  },
  {
    id: 2,
    docente: "Luis Mendoza",
    tipo: "Recategorización",
    estado: "Aprobada",
    documentos: ["CV.pdf", "Titulo.pdf", "Certificados.pdf"],
  }
];

function renderTabla(filtro) {
  const contenedor = document.getElementById("tablaSolicitudes");
  contenedor.innerHTML = ""; 

  const filtradas = solicitudes.filter(s => filtro === "Todos" || s.estado === filtro);

  if (filtradas.length === 0) {
    contenedor.innerHTML = "<p>No hay solicitudes en este estado.</p>";
    return;
  }

  const tabla = document.createElement("table");
  tabla.style.width = "100%";
  tabla.border = "1";

  const thead = tabla.createTHead();
  const filaCabecera = thead.insertRow();
  ["Docente", "Tipo", "Estado", "Documentos", "Acciones"].forEach(titulo => {
    const th = document.createElement("th");
    th.textContent = titulo;
    filaCabecera.appendChild(th);
  });

  const tbody = tabla.createTBody();
  filtradas.forEach(s => {
    const fila = tbody.insertRow();
    fila.insertCell().textContent = s.docente;
    fila.insertCell().textContent = s.tipo;
    fila.insertCell().textContent = s.estado;

    const docs = document.createElement("ul");
    s.documentos.forEach(doc => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="#">${doc}</a>`;
      docs.appendChild(li);
    });
    fila.insertCell().appendChild(docs);

    const acciones = document.createElement("td");
    if (s.estado === "Pendiente") {
      acciones.innerHTML = `
        <button onclick="cambiarEstado(${s.id}, 'Aprobada')">✅ Aprobar</button>
        <button onclick="cambiarEstado(${s.id}, 'Rechazada')">❌ Rechazar</button>
        <button onclick="cambiarEstado(${s.id}, 'Corrección')">✏️ Solicitar correcciones</button>
      `;
    } else {
      acciones.textContent = "Sin acciones";
    }
    fila.appendChild(acciones);
  });

  contenedor.appendChild(tabla);
}

function cambiarEstado(id, nuevoEstado) {
  const solicitud = solicitudes.find(s => s.id === id);
  if (solicitud) {
    solicitud.estado = nuevoEstado === "Corrección" ? "Pendiente (con observaciones)" : nuevoEstado;
    alert(`Solicitud de ${solicitud.docente} marcada como ${solicitud.estado}`);
    renderTabla(document.getElementById("filtroEstado").value);
  }
}

document.getElementById("filtroEstado").addEventListener("change", function () {
  renderTabla(this.value);
});

document.addEventListener("DOMContentLoaded", () => {
  renderTabla("Todos");
});
