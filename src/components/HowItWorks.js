import React from 'react';
import './../styles/HowItWorks.css';
import { FaSearch, FaMapMarkedAlt, FaPhoneAlt, FaSmile } from 'react-icons/fa';

const steps = [
  {
    icon: <FaSearch />,
    title: 'Busca lo que necesitas',
    description: 'Encuentra lugares y servicios por ubicación, categoría o nombre.'
  },
  {
    icon: <FaMapMarkedAlt />,
    title: 'Explora detalles',
    description: 'Ve fotos, horarios, valoraciones y toda la información que necesitas.'
  },
  {
    icon: <FaPhoneAlt />,
    title: 'Contacta directamente',
    description: 'Llama, envía WhatsApp o visita el lugar sin salir de la app.'
  },
  {
    icon: <FaSmile />,
    title: 'Disfruta tu experiencia',
    description: 'Vive México con GUIATREND, tu guía local confiable.'
  }
];

const HowItWorks = () => {
  return (
    <section className="how-it-works-section">
      <h2>¿Cómo Funciona?</h2>
      <div className="steps-container">
        {steps.map((step, index) => (
          <div key={index} className="step-card">
            <div className="step-icon">{step.icon}</div>
            <div className="step-content">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;