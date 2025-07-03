// Lógica de JavaScript para GUIATREND

document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const themeSwitcher = document.getElementById('theme-switcher');
    const navToggle = document.getElementById('nav-toggle');
    const mainNav = document.getElementById('main-nav');
    const langSwitcher = document.getElementById('lang-switcher');
    const loginSwitcher = document.getElementById('login-switcher'); // Añadido para futura funcionalidad

    // 1. Switch de Modo Oscuro/Claro
    const storedTheme = localStorage.getItem('guiatrend-theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (storedTheme) {
        body.classList.add(storedTheme);
    } else if (prefersDark) {
        body.classList.add('dark-mode');
        localStorage.setItem('guiatrend-theme', 'dark-mode');
    } else {
        body.classList.add('light-mode'); // Default si no hay preferencia ni guardado
    }
    // Actualizar visualmente el botón si es necesario (ej. si el botón cambia su ícono internamente con clases)
    // Esto ya está manejado por CSS (mostrando/ocultando .light-icon y .dark-icon)

    if (themeSwitcher) {
        themeSwitcher.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            body.classList.toggle('light-mode');

            let newTheme = body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
            localStorage.setItem('guiatrend-theme', newTheme);
        });
    }

    // 2. Menú Hamburguesa y Navegación Móvil
    if (navToggle && mainNav) {
        const openMenu = () => {
            mainNav.classList.add('active');
            navToggle.classList.add('active');
            body.classList.add('no-scroll');
        };

        const closeMenu = () => {
            mainNav.classList.remove('active');
            navToggle.classList.remove('active');
            body.classList.remove('no-scroll');
            // Cerrar todos los submenús abiertos al cerrar el menú principal
            mainNav.querySelectorAll('.has-submenu.open').forEach(sm => sm.classList.remove('open'));
        };

        navToggle.addEventListener('click', () => {
            if (mainNav.classList.contains('active')) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        // Cerrar menú si se hace clic en un enlace del menú (para anclas o navegación SPA)
        mainNav.querySelectorAll('.nav-link, .submenu-link').forEach(link => {
            link.addEventListener('click', (e) => {
                // Solo cerrar si es un enlace de ancla en la misma página o si no es un toggle de submenú
                const parentLi = link.closest('.has-submenu');
                if (link.getAttribute('href').startsWith('#') || !parentLi || (parentLi && !parentLi.contains(e.target))) {
                    if (window.innerWidth <= 992) { // Solo en vista móvil
                       // Si el enlace clickeado es un padre de submenú, no cerrar inmediatamente, dejar que el submenú se abra/cierre
                        if (!(link.parentElement.classList.contains('has-submenu') && link.classList.contains('nav-link'))) {
                            closeMenu();
                        }
                    }
                }
            });
        });

        // Cerrar menú si se hace clic fuera
        document.addEventListener('click', (event) => {
            if (mainNav.classList.contains('active') && !mainNav.contains(event.target) && !navToggle.contains(event.target)) {
                closeMenu();
            }
        });

        // Manejo de submenús en móvil (toggle al hacer clic en el padre)
        mainNav.querySelectorAll('.has-submenu > a').forEach(toggle => {
            toggle.addEventListener('click', function(event) {
                if (window.innerWidth <= 992 && this.parentElement.classList.contains('has-submenu')) {
                    event.preventDefault(); // Prevenir navegación del enlace padre en móvil
                    const parentLi = this.parentElement;
                    const isOpen = parentLi.classList.contains('open');

                    // Cerrar otros submenús abiertos antes de abrir uno nuevo (opcional, pero mejora UX)
                    mainNav.querySelectorAll('.has-submenu.open').forEach(sm => {
                        if (sm !== parentLi) {
                           sm.classList.remove('open');
                        }
                    });

                    parentLi.classList.toggle('open', !isOpen);
                }
            });
        });
    }

    // 3. Switch de Login/Logeado (Placeholder)
    if (loginSwitcher) {
        loginSwitcher.addEventListener('click', () => {
            // Lógica de autenticación con Google Firebase/OAuth irá aquí
            console.log('Botón de login/perfil clickeado.');
            // Simulación de cambio de estado:
            loginSwitcher.classList.toggle('active');
            // En una implementación real, esto reflejaría el estado de autenticación.
        });
    }

    // 4. Switch de Idioma (Placeholder y guardado básico)
    if (langSwitcher) {
        const langEsIcon = langSwitcher.querySelector('.lang-es');
        const langEnIcon = langSwitcher.querySelector('.lang-en');

        const currentLang = localStorage.getItem('guiatrend-lang') || 'es';
        document.documentElement.lang = currentLang;

        function updateLangIcon(lang) {
            if (lang === 'es') {
                if(langEsIcon) langEsIcon.style.display = 'inline';
                if(langEnIcon) langEnIcon.style.display = 'none';
            } else {
                if(langEsIcon) langEsIcon.style.display = 'none';
                if(langEnIcon) langEnIcon.style.display = 'inline';
            }
        }
        updateLangIcon(currentLang);

        langSwitcher.addEventListener('click', () => {
            let newLang = document.documentElement.lang === 'es' ? 'en' : 'es';
            document.documentElement.lang = newLang;
            localStorage.setItem('guiatrend-lang', newLang);
            updateLangIcon(newLang);
            // Aquí se llamaría a una función para actualizar TODO el contenido de la página al nuevo idioma.
            console.log(`Idioma cambiado a: ${newLang}. (Funcionalidad de traducción de contenido pendiente)`);
            // Forzar un re-renderizado o una actualización del contenido basado en el nuevo idioma.
            // Ejemplo: loadContentForLanguage(newLang);
        });
    }


    // 5. Lazy loading para imágenes (usando Intersection Observer)
    const lazyImages = Array.from(document.querySelectorAll("img.lazy"));

    if ("IntersectionObserver" in window) {
        const lazyImageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    if (lazyImage.dataset.srcset) { // Soporte para srcset
                        lazyImage.srcset = lazyImage.dataset.srcset;
                    }
                    lazyImage.classList.remove("lazy");
                    lazyImage.classList.add("lazy-loaded");
                    observer.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach((lazyImage) => {
            lazyImageObserver.observe(lazyImage);
        });
    } else {
        // Fallback para navegadores sin IntersectionObserver
        lazyImages.forEach((lazyImage) => {
            lazyImage.src = lazyImage.dataset.src;
            if (lazyImage.dataset.srcset) {
                lazyImage.srcset = lazyImage.dataset.srcset;
            }
            lazyImage.classList.remove("lazy");
            lazyImage.classList.add("lazy-loaded");
        });
    }

    // 6. Sección de Búsqueda y Lightbox
    const toggleFiltersButton = document.getElementById('toggle-filters-button');
    const advancedFiltersContainer = document.getElementById('advanced-filters-container');
    const mainSearchButton = document.getElementById('main-search-button');
    const applyFiltersButton = document.getElementById('apply-filters-button'); // Asumiendo que este también abre el lightbox
    const searchResultsLightbox = document.getElementById('search-results-lightbox');
    const lightboxCloseButton = document.querySelector('#search-results-lightbox .lightbox-close');

    // Mostrar/Ocultar Filtros Avanzados
    if (toggleFiltersButton && advancedFiltersContainer) {
        toggleFiltersButton.addEventListener('click', () => {
            const isExpanded = toggleFiltersButton.getAttribute('aria-expanded') === 'true' || false;
            advancedFiltersContainer.style.display = isExpanded ? 'none' : 'grid'; // 'grid' o el display que uses
            toggleFiltersButton.setAttribute('aria-expanded', !isExpanded);
            const filterArrow = toggleFiltersButton.querySelector('.filter-arrow');
            if (filterArrow) {
                filterArrow.textContent = isExpanded ? '▼' : '▲';
            }
        });
    }

    function openLightbox() {
        if (searchResultsLightbox) {
            searchResultsLightbox.style.display = 'flex'; // o 'block'
            setTimeout(() => searchResultsLightbox.classList.add('active'), 10); // Para transición
            body.classList.add('no-scroll'); // Evitar scroll del fondo
            // Aquí iría la lógica para cargar/mostrar resultados de búsqueda
            console.log("Lightbox de búsqueda abierto (simulado).");
        }
    }

    function closeLightbox() {
        if (searchResultsLightbox) {
            searchResultsLightbox.classList.remove('active');
            setTimeout(() => searchResultsLightbox.style.display = 'none', 300); // Coincidir con transición CSS
            body.classList.remove('no-scroll');
        }
    }

    if (mainSearchButton) {
        mainSearchButton.addEventListener('click', (event) => {
            event.preventDefault(); // Prevenir envío de formulario si lo hubiera
            openLightbox();
            // Aquí se simularía la búsqueda y se popularía el lightbox
        });
    }
    if (applyFiltersButton) {
         applyFiltersButton.addEventListener('click', (event) => {
            event.preventDefault();
            openLightbox();
            // Aquí se simularía la aplicación de filtros y búsqueda
        });
    }

    if (lightboxCloseButton) {
        lightboxCloseButton.addEventListener('click', closeLightbox);
    }

    // Cerrar lightbox al hacer clic fuera del contenido
    if (searchResultsLightbox) {
        searchResultsLightbox.addEventListener('click', (event) => {
            if (event.target === searchResultsLightbox) { // Si el clic es en el overlay mismo
                closeLightbox();
            }
        });
    }

    // Cerrar lightbox con tecla Escape
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && searchResultsLightbox && searchResultsLightbox.classList.contains('active')) {
            closeLightbox();
        }
    });


    // Placeholder para limpiar filtros
    const clearFiltersButton = document.getElementById('clear-filters-button');
    if (clearFiltersButton) {
        clearFiltersButton.addEventListener('click', () => {
            const filterForm = advancedFiltersContainer.querySelector('form') || advancedFiltersContainer;
            if (filterForm) {
                 // Esto es muy genérico, idealmente tendrías un form y harías form.reset()
                filterForm.querySelectorAll('select, input[type="text"], input[type="number"]').forEach(input => {
                    if(input.tagName === 'SELECT') input.selectedIndex = 0;
                    else input.value = '';
                });
                console.log("Filtros limpiados (simulado).");
            }
        });
    }


}); // Fin de DOMContentLoaded

// Más lógica de JavaScript se añadirá aquí según sea necesario.
console.log("GUIATREND script.js cargado y actualizado para búsqueda.");
