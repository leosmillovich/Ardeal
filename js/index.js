document.addEventListener("DOMContentLoaded", function() {
    var videoSection = document.getElementById("videoSection");
    var newSection = document.getElementById("newSection");
    var myVideo = document.getElementById("myVideo");

    // Event listener para detectar cuando el video ha terminado
    myVideo.addEventListener("ended", function() {
        // Ocultar la sección del video
        videoSection.style.display = "none";
        // Mostrar la nueva sección
        newSection.style.display = "flex";
    });
});
