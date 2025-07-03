import React from 'react';
import './../styles/BusinessCTA.css';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const BusinessCTA = () => {
  const email = 'estamosentrend@gmail.com';
  const phone = '+525665828832';
  const whatsappMessage = 'Hola, me gustaría obtener más información para registrar mi negocio en GUIATREND.';

  return (
    <section className="business-cta-section">
      <div className="business-cta-content">
        <h2>¿Tienes un negocio?</h2>
        <p>Registra tu establecimiento en GUIATREND y llega a miles de clientes potenciales.</p>
        
        <div className="cta-buttons">
          <a href={`https://wa.me/${phone}?text=${encodeURIComponent(whatsappMessage)}`} target="_blank" rel="noopener noreferrer" className="cta-button whatsapp">
            <FaWhatsapp /> Contáctanos por WhatsApp
          </a>
          <a href={`mailto:${email}`} className="cta-button email">
            <FaEnvelope /> Enviar Correo
          </a>
          <a href="/contacto" className="cta-button contact-form">
            <FaMapMarkerAlt /> Ver Formulario de Contacto
          </a>
        </div>
      </div>
    </section>
  );
};

export default BusinessCTA;