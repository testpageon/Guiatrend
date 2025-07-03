import React, { useEffect, useState } from "react";

const ciudades = [
  { nombre: "Monterrey", archivo: "monterrey.json" },
  { nombre: "Guadalajara", archivo: "guadalajara.json" },
  { nombre: "CDMX", archivo: "cdmx.json" },
  { nombre: "Cancún", archivo: "cancun.json" },
  { nombre: "Palenque", archivo: "palenque.json" },
  { nombre: "Puerto Vallarta", archivo: "puertoVallarta.json" },
  { nombre: "Veracruz", archivo: "veracruz.json" },
  { nombre: "Otras Regiones", archivo: "otras.json" }
];

function DirectorioTabs() {
  const [ciudadSeleccionada, setCiudadSeleccionada] = useState(ciudades[0].archivo);
  const [tarjetas, setTarjetas] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setCargando(true);
    setError(null);
    fetch(`/src/data/directorio/${ciudadSeleccionada}`)
      .then((res) => {
        if (!res.ok) throw new Error("No se pudo cargar el directorio");
        return res.json();
      })
      .then((data) => setTarjetas(data))
      .catch((err) => setError(err.message))
      .finally(() => setCargando(false));
  }, [ciudadSeleccionada]);

  return (
    <div className="directorio-tabs">
      <div className="tabs-ciudades">
        {ciudades.map((c) => (
          <button
            key={c.archivo}
            className={ciudadSeleccionada === c.archivo ? "activo" : ""}
            onClick={() => setCiudadSeleccionada(c.archivo)}
          >
            {c.nombre}
          </button>
        ))}
      </div>
      {cargando && <p>Cargando directorio...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      <div className="tarjetas-directorio">
        {tarjetas.map((t) => (
          <div className="tarjeta-directorio" key={t.id}>
            <h3>{t.nombre}</h3>
            <p><b>Categoría:</b> {t.categoria}</p>
            <p><b>Descripción:</b> {t.descripcion}</p>
            <p><b>Dirección:</b> {t.direccion}</p>
            <p><b>Teléfono:</b> {t.telefono}</p>
            {t.web && t.web !== "NA" && (
              <p><b>Web:</b> <a href={t.web} target="_blank" rel="noopener noreferrer">{t.web}</a></p>
            )}
            <p><b>Horario:</b> {t.horario}</p>
            {t.imagen && t.imagen !== "NA" && (
              <img src={t.imagen} alt={t.nombre} style={{ width: "100%", maxWidth: 200 }} />
            )}
            <p><b>Estado:</b> {t.estado}</p>
          </div>
        ))}
      </div>
      <style>{`
        .directorio-tabs { width: 100%; }
        .tabs-ciudades { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px; }
        .tabs-ciudades button { padding: 8px 16px; border: none; border-radius: 4px; background: #eee; cursor: pointer; }
        .tabs-ciudades button.activo { background: #007bff; color: #fff; }
        .tarjetas-directorio { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; }
        .tarjeta-directorio { background: #fff; border-radius: 8px; box-shadow: 0 2px 8px #0001; padding: 16px; display: flex; flex-direction: column; gap: 6px; }
        @media (max-width: 600px) {
          .tarjetas-directorio { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}

export default DirectorioTabs; 