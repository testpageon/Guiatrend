import React, { useEffect, useState } from 'react';

// Componente de pestañas para gastronomía por ciudad
// Carga los datos de cada ciudad desde un archivo JSON externo
const ciudades = [
  { key: 'monterrey', nombre: 'Monterrey' },
  { key: 'guadalajara', nombre: 'Guadalajara' },
  { key: 'cdmx', nombre: 'CDMX' },
  { key: 'cancun', nombre: 'Cancún' },
  { key: 'palenque', nombre: 'Palenque' },
  { key: 'puertoVallarta', nombre: 'Puerto Vallarta' },
  { key: 'veracruz', nombre: 'Veracruz' }
];

const GastronomiaTabs = () => {
  const [ciudad, setCiudad] = useState('monterrey');
  const [tarjetas, setTarjetas] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);

  // Cargar los datos de la ciudad seleccionada
  useEffect(() => {
    setCargando(true);
    setError(null);
    setTarjetas([]);
    fetch(`/data/gastronomia/${ciudad}.json`)
      .then(res => {
        if (!res.ok) throw new Error('No se pudo cargar el archivo de datos');
        return res.json();
      })
      .then(data => {
        setTarjetas(data);
        setCargando(false);
      })
      .catch(err => {
        setError('No se pudo cargar la información de gastronomía para esta ciudad.');
        setCargando(false);
      });
  }, [ciudad]);

  return (
    <div>
      {/* Pestañas de ciudades */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}>
        {ciudades.map(c => (
          <button
            key={c.key}
            onClick={() => setCiudad(c.key)}
            style={{
              padding: '10px 18px',
              borderRadius: 8,
              border: 'none',
              background: ciudad === c.key ? '#FF004F' : '#eee',
              color: ciudad === c.key ? '#fff' : '#222',
              fontWeight: 'bold',
              cursor: 'pointer',
              marginBottom: 4
            }}
          >
            {c.nombre}
          </button>
        ))}
      </div>

      {/* Estado de carga y error */}
      {cargando && <p>Cargando información gastronómica...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Tarjetas de restaurantes */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
        {tarjetas.map(t => (
          <div key={t.id} style={{
            borderRadius: 12,
            background: '#fff',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            padding: 18,
            display: 'flex',
            flexDirection: 'column',
            minHeight: 320
          }}>
            <img src={t.imagen} alt={t.nombre} style={{ width: '100%', height: 160, objectFit: 'cover', borderRadius: 8, marginBottom: 12 }} />
            <h3 style={{ margin: '0 0 8px 0', color: '#FF004F' }}>{t.nombre}</h3>
            <div style={{ marginBottom: 8 }}>
              <span style={{ fontWeight: 'bold', color: '#FFD700' }}>{'★'.repeat(t.calificacion)}</span>
              <span style={{ marginLeft: 8, background: '#3dffab', color: '#0a0f14', borderRadius: 4, padding: '2px 8px', fontWeight: 600 }}>{t.precio}</span>
              <span style={{ marginLeft: 8, background: '#3dffab', color: '#0a0f14', borderRadius: 4, padding: '2px 8px', fontWeight: 600 }}>{t.estado}</span>
            </div>
            <p style={{ margin: '0 0 8px 0', fontSize: 15 }}>{t.descripcion}</p>
            <p style={{ margin: '0 0 4px 0', fontSize: 14 }}><strong>Horarios:</strong> {t.horarios}</p>
            <p style={{ margin: '0 0 4px 0', fontSize: 14 }}><strong>Teléfono:</strong> {t.telefono}</p>
            <p style={{ margin: '0 0 4px 0', fontSize: 14 }}><strong>Dirección:</strong> {t.direccion}</p>
            {t.web && <a href={t.web} target="_blank" rel="noopener noreferrer" style={{ color: '#FF004F', fontWeight: 600, fontSize: 14 }}>Sitio web</a>}
            <p style={{ margin: '8px 0 0 0', fontSize: 13 }}><strong>Menú:</strong> {t.menu}</p>
            <p style={{ margin: '0', fontSize: 13 }}><strong>Servicio:</strong> {t.servicio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GastronomiaTabs; 