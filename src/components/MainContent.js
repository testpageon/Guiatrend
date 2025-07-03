import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import '../styles/MainContent.css';

const MainContent = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqData = [
    {
      id: 1,
      question: "¿Cómo publico mi negocio en GUIATREND?",
      answer: "Puedes visitar nuestra pagina de Directorio y mandarnos un mensaje Via Whatsapp"
    },
    {
      id: 2,
      question: "¿Qué ciudades cubren actualmente?",
      answer: "Tenemos cobertura en las principales ciudades de México y continuamente expandimos a nuevas ubicaciones."
    },
    {
      id: 3,
      question: "¿Puedo Guardar en Favoritos los destino o negocios?",
      answer: "Sí solo con tu registro y es totalmente free"
    },
    {
      id: 4,
      question: "¿Cómo puedo reportar información incorrecta?",
      answer: "Envianos correo a estamosentrend@gmail.com"
    },
    {
      id: 5,
      question: "¿Hay planes para una aplicación móvil?",
      answer: "Nuestra plataforma web está optimizada para móviles. La app nativa estará disponible próximamente en App Store y Google Play."
    }
  ];

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="main-content">
      <div className="faq-container">
        <h2 className="faq-title">Preguntas Frecuentes</h2>
        <p className="faq-subtitle">Acceder a preguntas frecuentes sin salir de la página</p>
        
        <div className="faq-list">
          {faqData.map((faq) => (
            <div key={faq.id} className="faq-item">
              <button 
                className={`faq-question ${openFaq === faq.id ? 'active' : ''}`}
                onClick={() => toggleFaq(faq.id)}
              >
                <span>{faq.question}</span>
                {openFaq === faq.id ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              <div className={`faq-answer ${openFaq === faq.id ? 'open' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
