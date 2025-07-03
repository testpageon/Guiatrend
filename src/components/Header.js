import React, { useState, useEffect } from 'react';
import './../styles/Header.css';
import { useTheme } from '../utils/theme'; // Importa useTheme

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Persistencia para el estado de login
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });

  // Persistencia para el idioma
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'es';
  });

  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn);
  }, [isLoggedIn]);

  useEffect(() => {
    localStorage.setItem('language', language);
    // Aquí se podría integrar i18next para cambiar el idioma globalmente
  }, [language]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLogin = () => {
    setIsLoggedIn(prev => !prev);
  };

  const toggleLanguage = () => {
    setLanguage(prevLang => (prevLang === 'es' ? 'en' : 'es'));
  };

  return (
    <>
      <header className={`header ${theme}`}>
      <div className="header-left">
        <div className="logo">
          <span className="logo-guia">GUÍA</span>
          <span className="logo-trend">TREND</span>
        </div>
      </div>

      <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#inicio" className="menu-item">Inicio</a></li>
          <li className="dropdown">
            <a href="#destinos" className="menu-item">Destinos</a>
            <div className="dropdown-content">
              <a href="#monterrey">Monterrey</a>
              <a href="#guadalajara">Guadalajara</a>
              <a href="#cdmx">CDMX</a>
              <a href="#cancun">Cancún</a>
              <a href="#palenque">Palenque</a>
              <a href="#puerto-vallarta">Puerto Vallarta</a>
              <a href="#veracruz">Veracruz</a>
            </div>
          </li>
          <li className="dropdown">
            <a href="#directorio" className="menu-item">Directorio</a>
            <div className="dropdown-content">
              <a href="#restaurantes">Restaurantes</a>
              <a href="#bares">Bares</a>
              <a href="#turismo">Turismo</a>
              <a href="#servicios">Servicios</a>
              <a href="#eventos-dir">Eventos</a>
            </div>
          </li>
          <li><a href="#eventos" className="menu-item">Eventos</a></li>
          <li><a href="#cartelera" className="menu-item">Cartelera</a></li>
          <li><a href="#blog" className="menu-item">Blog</a></li>
          <li><a href="#nosotros" className="menu-item">Nosotros</a></li>
          <li><a href="#contacto" className="menu-item">Contacto</a></li>
        </ul>
      </nav>

      <div className="header-right">
        {/* Switch de Modo Oscuro/Claro */}
        <div className="theme-switch-container">
          <button className="theme-switch" onClick={toggleTheme}>
            <span className="theme-switch-handle" style={{ left: theme === 'dark' ? 'calc(100% - 25px)' : '5px' }}></span>
          </button>
          <span className="theme-label">{theme === 'dark' ? '🌙' : '☀️'}</span>
        </div>

        {/* Switch de Login/Logeado */}
        <div className="login-switch-container">
          <button className="login-switch" onClick={toggleLogin}>
            <span className="login-icon" style={{ backgroundColor: isLoggedIn ? '#FF004F' : '#CDCDCD' }}>👤</span>
          </button>
          <span className="login-label">{isLoggedIn ? 'Online' : 'Offline'}</span>
        </div>

        {/* Switch de Idioma */}
        <div className="language-switch-container">
          <button className="language-switch" onClick={toggleLanguage}>
            {language === 'es' ? '🇲🇽 ESP' : '🇬🇧 ENG'}
          </button>
        </div>

        {/* Menú Hamburguesa para móviles */}
        <button className="hamburger-menu" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      </header>
    </>
  );
};

export default Header;
