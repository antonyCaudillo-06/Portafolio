// Menú móvil
const menuToggle = document.querySelector("#menuToggle");
const mainNav = document.querySelector("#mainNav");

if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
        const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
        menuToggle.setAttribute("aria-expanded", String(!isOpen));
        menuToggle.setAttribute("aria-label", isOpen ? "Abrir menú" : "Cerrar menú");
        mainNav.classList.toggle("open", !isOpen);
    });

    mainNav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Abrir menú");
            mainNav.classList.remove("open");
        });
    });
}

// Año automático en el pie de página
const currentYear = document.querySelector("#currentYear");
if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

// Mensaje de ayuda al pulsar un proyecto.
// Puedes cambiar estos enlaces por demos reales o repositorios de GitHub.
document.querySelectorAll(".project-detail").forEach((link) => {
    link.addEventListener("click", () => {
        const projectName = link.dataset.project;
        const subject = encodeURIComponent(`Consulta sobre el proyecto: ${projectName}`);
        const contactButton = document.querySelector("#contactButton");
        if (contactButton) {
            contactButton.href = `mailto:tu-correo@ejemplo.com?subject=${subject}`;
        }
    });
});
