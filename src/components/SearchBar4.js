import React, { useState } from 'react';
import { FaSearch, FaMapMarkerAlt, FaTag, FaTimes, FaFilter } from 'react-icons/fa';
import '../styles/SearchBar4.css';
import CustomSelect from './CustomSelect';

const cityOptions = [
  { value: '', label: 'Ciudades' },
  { value: 'monterrey', label: 'Monterrey' },
  { value: 'guadalajara', label: 'Guadalajara' },
  { value: 'cdmx', label: 'CDMX' },
  { value: 'cancun', label: 'Cancún' },
  { value: 'palenque', label: 'Palenque' },
  { value: 'puerto-vallarta', label: 'Puerto Vallarta' },
  { value: 'veracruz', label: 'Veracruz' },
];

const categoryOptions = [
  { value: '', label: 'Categorías' },
  { value: 'restaurantes', label: 'Restaurantes' },
  { value: 'bares', label: 'Bares' },
  { value: 'turismo', label: 'Turismo' },
  { value: 'servicios', label: 'Servicios' },
  { value: 'eventos', label: 'Eventos' },
  { value: 'promociones', label: 'Promociones' },
];

const SearchBar4 = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('Ciudades');
  const [selectedCategory, setSelectedCategory] = useState('Categorías');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Búsqueda realizada:', { searchQuery, selectedCity, selectedCategory });
  };

  return (
    <div className="search-container">
      <div className="search-bar">
        <form onSubmit={handleFormSubmit} className="search-form">
          {/* Campo de búsqueda */}
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

          {/* Filtro de ciudades */}
          <div className="select-group">
            <FaMapMarkerAlt className="select-icon" />
            <CustomSelect
              icon={null}
              options={cityOptions}
              placeholder="Ciudades"
              value={selectedCity}
              onChange={setSelectedCity}
            />
          </div>

          {/* Filtro de categorías */}
          <div className="select-group">
            <FaTag className="select-icon" />
            <CustomSelect
              icon={null}
              options={categoryOptions}
              placeholder="Categorías"
              value={selectedCategory}
              onChange={setSelectedCategory}
            />
          </div>

          {/* Botón Aplicar */}
          <button type="submit" className="search-button">
            <FaFilter />
            <span>Aplicar</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar4; 