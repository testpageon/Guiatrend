import React from 'react';

const ColonyFilter = ({ placeholder, onChange }) => {
  return (
    <div>
      <label>Colonia:</label>
      <input type="text" placeholder={placeholder} onChange={(e) => onChange(e)} />
    </div>
  );
};

export default ColonyFilter;
