import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaCompass, FaMapMarkerAlt } from 'react-icons/fa';
import SearchBar4 from './SearchBar4';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/HeroSlider.css';

const HeroSlider = () => {
  return (
    <section className="hero-container">
      <div className="hero-slider-background">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          className="swiper-container"
        >
          <SwiperSlide>
            <img src="/images/Monterrey.webp" alt="Monterrey" loading="lazy" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/guadalajara.webp" alt="Guadalajara" loading="lazy" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/cmdx.webp" alt="CDMX" loading="lazy" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/cancun.webp" alt="Cancun" loading="lazy" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/palenque.webp" alt="Palenque" loading="lazy" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/puerto-vallarta.webp" alt="Puerto Vallarta" loading="lazy" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/Veracruz.webp" alt="Veracruz" loading="lazy" />
          </SwiperSlide>
        </Swiper>
        <div className="hero-content-block">
          <div className="hero-text-content">
            <h2>DESCUBRE <span className="trend-folly">TREND</span> POR MEXICO</h2>
            <p>Guía turística, directorio comercial, eventos y mucho más</p>
          </div>
          <div className="hero-actions">
            <div className="buttons">
              <button className="explorar-button" onClick={() => alert('Scroll to categories')}>
                <FaCompass />
                <span>Explorar</span>
              </button>
              <button className="cerca-de-mi-button" onClick={() => alert('Request user location')}>
                <FaMapMarkerAlt />
                <span>Cerca de mí</span>
              </button>
            </div>
            <div className="hero-search-wrapper">
              <SearchBar4 />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
