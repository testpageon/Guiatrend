import React from 'react';

const ValuationFilter = () => {
  return (
    <div>
      <label>Valoración:</label>
      <select>
        <option value="">Todas</option>
        <option value="1">1 Estrella</option>
        <option value="2">2 Estrellas</option>
        <option value="3">3 Estrellas</option>
        <option value="4">4 Estrellas</option>
        <option value="5">5 Estrellas</option>
      </select>
    </div>
  );
};

export default ValuationFilter;
