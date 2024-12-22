// goontop.js

// Crear el botón dinámicamente
const goToTopButton = document.createElement("div");
goToTopButton.id = "goToTopButton";
goToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>'; // Ícono de Font Awesome
document.body.appendChild(goToTopButton);

// Mostrar/Ocultar el botón según la posición del scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) { // Aparece después de 200px de desplazamiento
        goToTopButton.style.display = "flex";
    } else {
        goToTopButton.style.display = "none";
    }
});

// Función para volver a la parte superior
goToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
