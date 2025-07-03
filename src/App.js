import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import { ThemeProvider, useTheme } from './utils/theme';
import HeroSlider from './components/HeroSlider';
import MainContent from './components/MainContent';
import CategorySection from './components/CategorySection';
import HowItWorks from './components/HowItWorks';
import BusinessCTA from './components/BusinessCTA';
import CategoryLightbox from './components/CategoryLightbox';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';
import { FaPhone, FaMapMarkerAlt, FaHeart, FaShareAlt, FaGlobe } from 'react-icons/fa';

function AppContent() {
  const { theme } = useTheme();
  const [isCategoryLightboxOpen, setIsCategoryLightboxOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const handleCategoryClick = (categoryKey) => {
    setSelectedCategory(categoryKey);
    setIsCategoryLightboxOpen(true);
  };

  const handleCloseCategoryLightbox = () => {
    setIsCategoryLightboxOpen(false);
    setSelectedCategory(null);
  };

  // Componente genérico para cualquier categoría (excepto cartelera)
  function LightboxCategoryContent({ categoria, titulo, ciudad, setCiudad }) {
    const [datos, setDatos] = useState([]);
    const [descripcionCiudad, setDescripcionCiudad] = useState("");
    const [imagenCiudad, setImagenCiudad] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    React.useEffect(() => {
      setLoading(true);
      setError(null);
      fetch(`/data/${categoria}/${ciudad}.json`)
        .then(res => {
          if (!res.ok) throw new Error('No se pudo cargar el archivo de la ciudad');
          return res.json();
        })
        .then(data => {
          if (data && data.lugares) {
            setDatos(Array.isArray(data.lugares) ? data.lugares.slice(0, 18) : []);
            setDescripcionCiudad(data.descripcion || "");
            setImagenCiudad(data.imagen || "");
          } else if (Array.isArray(data)) {
            setDatos(data.slice(0, 18));
            setDescripcionCiudad("");
            setImagenCiudad("");
          } else {
            setDatos([]);
            setDescripcionCiudad("");
            setImagenCiudad("");
          }
          setLoading(false);
        })
        .catch(err => {
          setError('Error al cargar los datos de la ciudad');
          setLoading(false);
        });
    }, [ciudad, categoria]);

    return (
      <>
        <div className="intro-ciudad">
          {(imagenCiudad || descripcionCiudad) && (
            <div className="ciudad-info-vertical">
              {imagenCiudad && (
                <img src={imagenCiudad} alt={ciudad} className="ciudad-info-img-vertical" />
              )}
              <div className="ciudad-info-desc-vertical">
                <h3 style={{marginTop:'23px', marginBottom:'1.5em', fontWeight:'bold', textAlign:'center'}}>{ciudad.charAt(0).toUpperCase() + ciudad.slice(1)}</h3>
                {descripcionCiudad && (
                  <p style={{margin:0, textAlign:'justify'}}>{descripcionCiudad}</p>
                )}
              </div>
            </div>
          )}
        </div>
        <div className="lightbox-content-scroll">
          <div className="tarjetas-contenedor">
            {loading && <p>Cargando...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div className="business-grid">
              {datos.map((item, idx) => (
                <div className="business-card" key={item.id || idx}>
                  <img src={item.imagen || item.image} alt={item.nombre || item.name} className="business-card-image" />
                  <div className="business-card-content">
                    <h4>{item.nombre || item.name}</h4>
                    <span className="badge" style={{ background: '#FF004F', color: '#fff', borderRadius: '8px', padding: '2px 10px', fontSize: '0.8em', marginBottom: '8px', display: 'inline-block' }}>{item.estado || item.status || 'Abierto'}</span>
                    <p className="business-description" style={{ margin: '8px 0', fontSize: '0.95em' }}>{item.descripcion || item.description}</p>
                    <div className="card-meta">
                      <span className="rating filled">{'★'.repeat(item.calificacion || item.rating || 0)}</span>
                      {item.precio && <span className="price">{item.precio}</span>}
                    </div>
                    <div className="card-buttons">
                      {item.telefono && <a href={`tel:${item.telefono}`} title="Llamar" className="icon-btn"><FaPhone /></a>}
                      {item.direccion && <a href={item.maps || '#'} target="_blank" rel="noopener noreferrer" title="Ver en mapa" className="icon-btn"><FaMapMarkerAlt /></a>}
                      <button title="Favorito" className="icon-btn"><FaHeart /></button>
                      <button title="Compartir" className="icon-btn"><FaShareAlt /></button>
                      {item.web && item.web !== 'NA' && <a href={item.web} target="_blank" rel="noopener noreferrer" title="Sitio web" className="icon-btn"><FaGlobe /></a>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }

  const ciudades = [
    { key: 'monterrey', label: 'Monterrey' },
    { key: 'guadalajara', label: 'Guadalajara' },
    { key: 'cdmx', label: 'CDMX' },
    { key: 'cancun', label: 'Cancún' },
    { key: 'palenque', label: 'Palenque' },
    { key: 'puertoVallarta', label: 'Puerto Vallarta' },
    { key: 'veracruz', label: 'Veracruz' },
  ];
  const [ciudad, setCiudad] = useState(ciudades[0].key);

  return (
    <div className="App">
      <Header />
      <HeroSlider />
      <CategorySection onCategoryClick={handleCategoryClick} />
      <HowItWorks />
      <BusinessCTA />
      <MainContent />
      <Newsletter />
      <Footer />
      <CategoryLightbox
        isOpen={isCategoryLightboxOpen}
        onClose={handleCloseCategoryLightbox}
        title={selectedCategory ? selectedCategory : ''}
      >
        <div className="lightbox-header" style={{position: 'relative'}}>
          <button className="close-btn" onClick={handleCloseCategoryLightbox} aria-label="Cerrar" style={{position: 'absolute', top: 16, right: 20, zIndex: 2}}>X</button>
          <div className="city-tabs">
            {ciudades.map((c, idx) => (
              <button
                key={c.key}
                className={ciudad === c.key ? 'active' : ''}
                style={ciudad === c.key ? { borderBottom: '3px solid #FF004F', color: '#FF004F' } : {}}
                onClick={() => setCiudad(c.key)}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
        {selectedCategory && (
          <LightboxCategoryContent categoria={selectedCategory} titulo={selectedCategory} ciudad={ciudad} setCiudad={setCiudad} />
        )}
        <div className="category-lightbox-footer">
          <button className="btn-destacado">Explorar más</button>
          <button className="btn-destacado">Ver Directorio Completo</button>
          <button className="btn-destacado">Otros destinos</button>
        </div>
      </CategoryLightbox>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
