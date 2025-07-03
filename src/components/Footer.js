import React from 'react';
import { FaGlobe, FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { useTheme } from '../utils/theme';
import './../styles/Footer.css';

const Footer = () => {
  const { theme, toggleTheme } = useTheme();
  const [language, setLanguage] = React.useState('es');

  const toggleLanguage = () => {
    setLanguage(prevLang => (prevLang === 'es' ? 'en' : 'es'));
  };

  const quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Directorio', href: '#directorio' },
    { name: 'Eventos', href: '#eventos' },
    { name: 'Blog', href: '#blog' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Contacto', href: '#contacto' }
  ];

  const socialLinks = [
    {
      name: 'Web de la Revista',
      icon: <FaGlobe />,
      url: 'https://revistaestamosentrend.com',
      color: '#FF004F'
    },
    {
      name: 'Facebook',
      icon: <FaFacebook />,
      url: 'https://www.facebook.com/Revistaestamosentrend/',
      color: '#FF004F'
    },
    {
      name: 'Instagram',
      icon: <FaInstagram />,
      url: 'https://www.instagram.com/estamosentrend/',
      color: '#FF004F'
    },
    {
      name: 'TikTok',
      icon: <FaTiktok />,
      url: 'https://www.tiktok.com/@estamosentrend',
      color: '#FF004F'
    }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Información de Contacto */}
        <div className="footer-section">
          <h3>Contáctanos</h3>
          <div className="contact-info">
            <div className="contact-item centered">
              <span className="contact-icon">📧</span>
              <a href="mailto:estamosentrend@gmail.com">estamosentrend@gmail.com</a>
            </div>
            <div className="contact-item centered">
              <span className="contact-icon">📞</span>
              <a href="tel:+525665828832">+52 56 6582 8832</a>
            </div>
            <div className="contact-item centered">
              <span className="contact-icon">🕐</span>
              <span>Lun-Vie 9:00 a 18:00</span>
            </div>
            <div className="contact-item">
              <div className="address-info">
                <div className="address-line">
                  <span className="address-label">Dirección Principal:</span>
                  <span>Av Diego Díaz de Berlanga 400, San Nicolás de los Garza, Nuevo León, México</span>
                </div>
                <div className="address-line">
                  <span className="address-label">Oficina de Operaciones:</span>
                  <span>Azucena 265 Col San Carlos, Guadalajara, Jalisco, México</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enlaces Rápidos */}
        <div className="footer-section">
          <h3>Enlaces Rápidos</h3>
          <nav className="footer-nav">
            <ul>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="footer-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Redes Sociales y Controles */}
        <div className="footer-section">
          <h3>Síguenos</h3>
          <div className="social-controls-container">
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="controls-group">
              <button className="control-button" onClick={toggleLanguage} title="Cambiar idioma">
                {language === 'es' ? '🇲🇽' : '🇬🇧'}
              </button>
              <button className="control-button" onClick={toggleTheme} title="Cambiar tema">
                {theme === 'dark' ? '🌙' : '☀️'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Derechos de Autor */}
      <div className="footer-bottom">
        <p className="copyright">
          GUIATREND © by EstamosEnTrend 2023 – Todos los derechos reservados.
        </p>
      </div>

      {/* Botón Flotante de WhatsApp */}
      <a
        href="https://wa.me/525665828832"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        title="Contactar por WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </footer>
  );
};

export default Footer; 