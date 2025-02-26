document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling
    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", function () {
            const section = document.getElementById(this.getAttribute("onclick").replace("scrollToSection('", "").replace("')", ""));
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Form validation
    document.getElementById("form-suscripcion").addEventListener("submit", function (event) {
        event.preventDefault();
        const email = document.getElementById("email").value;
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert("¡Gracias por suscribirte!");
            document.getElementById("email").value = "";
        } else {
            alert("Por favor, ingresa un email válido.");
        }
    });

    // FAQ Accordion
    document.querySelectorAll(".faq-btn").forEach(button => {
        button.addEventListener("click", function () {
            const text = this.nextElementSibling;
            text.style.display = text.style.display === "block" ? "none" : "block";
        });
    });
});
