import React from 'react';
import './../styles/SearchResultsLightbox.css';
import { FaTimes } from 'react-icons/fa';

// Datos de ejemplo para los resultados
const sampleResults = [
  { id: 1, name: 'El Rey del Cabrito', category: 'Restaurante', city: 'Monterrey' },
  { id: 2, name: 'Parque Fundidora', category: 'Turismo', city: 'Monterrey' },
  { id: 3, name: 'Pujol', category: 'Restaurante', city: 'CDMX' },
  { id: 4, name: 'Xcaret', category: 'Turismo', city: 'Cancún' },
];

const SearchResultsLightbox = ({ isOpen, onClose, results = sampleResults }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="lightbox-overlay">
      <div className="lightbox-container">
        <div className="lightbox-header">
          <h2>Resultados de la Búsqueda</h2>
          <button onClick={onClose} className="close-button">
            <FaTimes />
          </button>
        </div>
        <div className="lightbox-content">
          {results.length > 0 ? (
            results.map((item) => (
              <div key={item.id} className="result-card">
                <h3>{item.name}</h3>
                <p>{item.category} - {item.city}</p>
              </div>
            ))
          ) : (
            <p>No se encontraron resultados.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResultsLightbox;