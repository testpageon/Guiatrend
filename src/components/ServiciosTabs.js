import React, { useEffect, useState } from 'react';

/**
 * Componente ServiciosTabs
 * Carga y muestra los servicios de la ciudad seleccionada usando fetch() desde archivos JSON externos.
 * @param {string} ciudad - Nombre de la ciudad (ejemplo: 'monterrey', 'guadalajara', etc.)
 */
const ServiciosTabs = ({ ciudad }) => {
  const [servicios, setServicios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setCargando(true);
    setError(null);
    // Ruta pública para producción
    fetch(`/src/data/servicios/${ciudad}.json`)
      .then((res) => {
        if (!res.ok) throw new Error('No se pudo cargar el archivo de servicios.');
        return res.json();
      })
      .then((data) => {
        setServicios(data);
        setCargando(false);
      })
      .catch((err) => {
        setError(err.message);
        setCargando(false);
      });
  }, [ciudad]);

  if (cargando) return <div>Cargando servicios...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!servicios.length) return <div>No hay servicios disponibles para esta ciudad.</div>;

  return (
    <div className="servicios-tabs">
      <div className="servicios-grid">
        {servicios.map((servicio) => (
          <div key={servicio.id} className="servicio-card">
            <h3>{servicio.nombre}</h3>
            <p><b>Descripción:</b> {servicio.descripcion}</p>
            <p><b>Dirección:</b> {servicio.direccion}</p>
            <p><b>Teléfono:</b> {servicio.telefono}</p>
            <p><b>Horario:</b> {servicio.horarios}</p>
            <p><b>Precio:</b> {servicio.precio}</p>
            <p><b>Calificación:</b> {servicio.calificacion} ⭐</p>
            <p><b>Estado:</b> {servicio.estado}</p>
            <p><b>Servicios:</b> {servicio.servicio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiciosTabs; 