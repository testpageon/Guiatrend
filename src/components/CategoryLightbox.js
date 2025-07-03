import React from 'react';
import { FaTimes } from 'react-icons/fa';
import './../styles/CategoryLightbox.css';

// Componente de ventana modal (lightbox) genérico
const CategoryLightbox = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null;

  return (
    <div className="category-lightbox-overlay">
      <div className="category-lightbox-modal">
        {title && <h2 className="category-lightbox-title">{title}</h2>}
        {children}
      </div>
    </div>
  );
};

export default CategoryLightbox;

