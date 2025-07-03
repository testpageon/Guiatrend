import React from 'react';
import { FaMapMarkedAlt, FaUtensils, FaBed, FaConciergeBell, FaCalendarAlt, FaTicketAlt, FaTags, FaBookOpen } from 'react-icons/fa';
import './../styles/CategorySection.css';

const categories = [
  { name: 'Destinos', icon: <FaMapMarkedAlt />, key: 'destinos' },
  { name: 'Gastronomía', icon: <FaUtensils />, key: 'gastronomia' },
  { name: 'Hospedaje', icon: <FaBed />, key: 'hospedaje' },
  { name: 'Servicios', icon: <FaConciergeBell />, key: 'servicios' },
  { name: 'Eventos', icon: <FaCalendarAlt />, key: 'eventos' },
  { name: 'Cartelera', icon: <FaTicketAlt />, key: 'cartelera' },
  { name: 'Promociones', icon: <FaTags />, key: 'promociones' },
  { name: 'Directorio', icon: <FaBookOpen />, key: 'directorio' },
];

const CategorySection = ({ onCategoryClick }) => {
  return (
    <section className="category-section">
      <h2 className="section-title">Explora por Categoría</h2>
      <div className="category-grid">
        {categories.map((category) => (
          <div key={category.key} className="category-card" onClick={() => onCategoryClick(category.key)}>
            <div className="category-icon">{category.icon}</div>
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;