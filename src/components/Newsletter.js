import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import './../styles/Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // La funcionalidad se implementará más adelante
    console.log('Newsletter subscription:', email);
    alert('¡Gracias por suscribirte! La funcionalidad estará disponible próximamente.');
    setEmail('');
  };

  return (
    <div className="newsletter-section">
      <div className="newsletter-container">
        <div className="newsletter-content">
          <h2 className="newsletter-title">Mantente Informado</h2>
          <p className="newsletter-subtitle">
            Suscríbete a nuestro newsletter y recibe las últimas noticias, eventos y ofertas exclusivas
          </p>
          
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <div className="newsletter-input-group">
              <input
                type="email"
                className="newsletter-input"
                placeholder="Suscríbete a nuestro newsletter"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="newsletter-button">
                <FaPaperPlane />
                <span>Enviar</span>
              </button>
            </div>
          </form>
          
          <p className="newsletter-disclaimer">
            * No compartimos tu información personal. Puedes cancelar la suscripción en cualquier momento.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter; 