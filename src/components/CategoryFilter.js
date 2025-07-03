import React from 'react';

const CategoryFilter = () => {
  return (
    <div>
      <label>Categoría:</label>
      <select>
        <option value="">Todas</option>
        <option value="Food">Comida</option>
        <option value="Accommodation">Alojamiento</option>
        <option value="Shopping">Compras</option>
      </select>
    </div>
  );
};

export default CategoryFilter;
