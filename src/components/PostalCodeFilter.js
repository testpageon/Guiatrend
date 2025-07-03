import React from 'react';

const PostalCodeFilter = ({ placeholder, onChange }) => {
  return (
    <div>
      <label>Código Postal:</label>
      <input type="text" placeholder={placeholder} onChange={(e) => onChange(e)} />
    </div>
  );
};

export default PostalCodeFilter;
