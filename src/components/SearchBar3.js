import React, { useState } from 'react';
import { FaSearch, FaMapMarkerAlt, FaTag, FaTimes, FaFilter } from 'react-icons/fa';
import '../styles/SearchBar3.css';
import CustomSelect from './CustomSelect'; // Importar el nuevo componente

const cityOptions = [
  { value: 'monterrey', label: 'Monterrey' },
  { value: 'guadalajara', label: 'Guadalajara' },
  { value: 'cdmx', label: 'CDMX' },
  { value: 'cancun', label: 'Cancún' },
  { value: 'palenque', label: 'Palenque' },
  { value: 'puerto-vallarta', label: 'Puerto Vallarta' },
  { value: 'veracruz', label: 'Veracruz' },
];

const categoryOptions = [
  { value: 'restaurantes', label: 'Restaurantes' },
  { value: 'bares', label: 'Bares' },
  { value: 'turismo', label: 'Turismo' },
  { value: 'servicios', label: 'Servicios' },
  { value: 'eventos', label: 'Eventos' },
  { value: 'promociones', label: 'Promociones' },
];

const SearchBar3 = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Búsqueda realizada:', searchQuery);
  };

  return (
    <div className="search-container">
      <div className="search-bar">
        <form onSubmit={handleFormSubmit} className="search-form">
          <div className="search-input-group">
            <FaSearch className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="Buscar en GUIATREND..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button type="button" className="clear-button" onClick={() => setSearchQuery('')}>
                <FaTimes />
              </button>
            )}
          </div>

          <div className="search-filters">
            <CustomSelect
              icon={<FaMapMarkerAlt />}
              options={cityOptions}
              placeholder="Todas las Ciudades"
            />
            <CustomSelect
              icon={<FaTag />}
              options={categoryOptions}
              placeholder="Todas las Categorías"
            />
            <button type="submit" className="search-button">
              <FaFilter />
              <span>Aplicar</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBar3;
