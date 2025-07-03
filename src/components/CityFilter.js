import React from 'react';

const CityFilter = () => {
  return (
    <div>
      <label>Ciudad:</label>
      <select>
        <option value="">Todas</option>
        <option value="Monterrey">Monterrey</option>
        <option value="Guadalajara">Guadalajara</option>
        <option value="Cancún">Cancún</option>
        <option value="Veracruz">Veracruz</option>
        <option value="Puerto Vallarta">Puerto Vallarta</option>
        <option value="Palenque">Palenque</option>
        <option value="Ciudad de México">Ciudad de México</option>
      </select>
    </div>
  );
};

export default CityFilter;
