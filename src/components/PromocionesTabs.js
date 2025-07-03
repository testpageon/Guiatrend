import React, { useEffect, useState } from 'react';

/**
 * Componente PromocionesTabs
 * Carga y muestra las promociones de la ciudad seleccionada usando fetch() desde archivos JSON externos.
 * @param {string} ciudad - Nombre de la ciudad (ejemplo: 'monterrey', 'guadalajara', etc.)
 */
const PromocionesTabs = ({ ciudad }) => {
  const [promociones, setPromociones] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setCargando(true);
    setError(null);
    // Ruta pública para producción
    fetch(`/src/data/promociones/${ciudad}.json`)
      .then((res) => {
        if (!res.ok) throw new Error('No se pudo cargar el archivo de promociones.');
        return res.json();
      })
      .then((data) => {
        setPromociones(data);
        setCargando(false);
      })
      .catch((err) => {
        setError(err.message);
        setCargando(false);
      });
  }, [ciudad]);

  if (cargando) return <div>Cargando promociones...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!promociones.length) return <div>No hay promociones disponibles para esta ciudad.</div>;

  return (
    <div className="promociones-tabs">
      <div className="promociones-grid">
        {promociones.map((promo) => (
          <div key={promo.id} className="promocion-card">
            <h3>{promo.titulo}</h3>
            <p><b>Descripción:</b> {promo.descripcion}</p>
            <p><b>Vigencia:</b> {promo.vigencia}</p>
            <p><b>Negocio:</b> {promo.negocio}</p>
            <p><b>Categoría:</b> {promo.categoria}</p>
            <p><b>Condiciones:</b> {promo.condiciones}</p>
            <p><b>Teléfono:</b> {promo.telefono}</p>
            <p><b>Estado:</b> {promo.estado}</p>
            {promo.web && promo.web !== 'NA' && (
              <p><a href={promo.web} target="_blank" rel="noopener noreferrer">Sitio web</a></p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromocionesTabs; 