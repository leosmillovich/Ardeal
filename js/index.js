//Te amo chatgpt
document.addEventListener('DOMContentLoaded', function() {
    // Función para resaltar el enlace de navegación activo
    function highlightNavLink() {
        // Verificar que el ancho de la pantalla sea mayor a 1200px
        if (window.innerWidth > 980) {
            // Obtiene la posición vertical actual del scroll
            let scrollPosition = window.scrollY;

            // Itera sobre cada enlace de navegación
            let navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(function(navLink) {
                let targetId = navLink.getAttribute('href').substring(1); // Obtiene el ID del objetivo de la sección
                let target = document.getElementById(targetId);

                // Comprueba si el objetivo de la sección está visible en la ventana gráfica
                if (target.offsetTop <= scrollPosition && target.offsetTop + target.offsetHeight > scrollPosition) {
                    // Agrega la clase 'active' al enlace correspondiente y elimina la clase 'active' de los demás
                    navLinks.forEach(function(link) {
                        link.classList.remove('active');
                    });
                    navLink.classList.add('active');
                }
            });
        }
    }

    // Llama a la función al cargar la página y al hacer scroll
    window.addEventListener('scroll', highlightNavLink);
    highlightNavLink(); // Llama a la función cuando la página se carga inicialmente
});
