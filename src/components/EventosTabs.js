import React, { useEffect, useState } from 'react';

/**
 * Componente EventosTabs
 * Carga y muestra los eventos de la ciudad seleccionada usando fetch() desde archivos JSON externos.
 * @param {string} ciudad - Nombre de la ciudad (ejemplo: 'monterrey', 'guadalajara', etc.)
 */
const EventosTabs = ({ ciudad }) => {
  const [eventos, setEventos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setCargando(true);
    setError(null);
    // Ruta pública para producción
    fetch(`/src/data/eventos/${ciudad}.json`)
      .then((res) => {
        if (!res.ok) throw new Error('No se pudo cargar el archivo de eventos.');
        return res.json();
      })
      .then((data) => {
        setEventos(data);
        setCargando(false);
      })
      .catch((err) => {
        setError(err.message);
        setCargando(false);
      });
  }, [ciudad]);

  if (cargando) return <div>Cargando eventos...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!eventos.length) return <div>No hay eventos disponibles para esta ciudad.</div>;

  return (
    <div className="eventos-tabs">
      <div className="eventos-grid">
        {eventos.map((evento) => (
          <div key={evento.id} className="evento-card">
            <h3>{evento.nombre}</h3>
            <p><b>Fecha:</b> {evento.fecha}</p>
            <p><b>Hora:</b> {evento.hora}</p>
            <p><b>Lugar:</b> {evento.lugar}</p>
            <p><b>Descripción:</b> {evento.descripcion}</p>
            <p><b>Precio:</b> {evento.precio}</p>
            <p><b>Organizador:</b> {evento.organizador}</p>
            <p><b>Teléfono:</b> {evento.telefono}</p>
            <p><b>Estado:</b> {evento.estado}</p>
            {evento.web && evento.web !== 'NA' && (
              <p><a href={evento.web} target="_blank" rel="noopener noreferrer">Sitio web</a></p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventosTabs; 