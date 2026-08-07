// Scroll animations
if (window.AOS) {
    AOS.init({
        duration: 700,
        once: true,
        offset: 40,
        easing: "ease-out-cubic"
    });
}

// Mobile navigation
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-links a");

function closeMenu() {
    if (!menuToggle || !navMenu) return;

    menuToggle.classList.remove("active");
    navMenu.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
    document.body.classList.remove("menu-open");
}

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("active");

        menuToggle.classList.toggle("active", isOpen);
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
        document.body.classList.toggle("menu-open", isOpen);
    });

    navLinks.forEach((link) => link.addEventListener("click", closeMenu));

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") closeMenu();
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 980) closeMenu();
    });
}

// Header background after scrolling
const siteHeader = document.querySelector(".site-header");

function updateHeader() {
    if (!siteHeader) return;
    siteHeader.classList.toggle("scrolled", window.scrollY > 16);
}

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

// Keep only one FAQ item open at a time
const faqItems = document.querySelectorAll(".faq-list details");

faqItems.forEach((item) => {
    item.addEventListener("toggle", () => {
        if (!item.open) return;

        faqItems.forEach((otherItem) => {
            if (otherItem !== item) otherItem.removeAttribute("open");
        });
    });
});

// Automatic footer year
const currentYear = document.querySelector("#current-year");
if (currentYear) currentYear.textContent = new Date().getFullYear();

// ================= CONTACT FORM =================

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm && formStatus) {

    const submitButton = contactForm.querySelector(".form-submit");

    contactForm.addEventListener("submit", async (event) => {

        event.preventDefault();

        submitButton.disabled = true;
        submitButton.textContent = "Sending...";

        formStatus.textContent = "";
        formStatus.className = "form-status";

        try {

            const formData = new FormData(contactForm);

            const response = await fetch(
                "https://formsubmit.co/ajax/muzammilswatti7@gmail.com",
                {
                    method: "POST",
                    headers: {
                        "Accept": "application/json"
                    },
                    body: formData
                }
            );

            if (!response.ok) {
                throw new Error("Form submission failed");
            }

            formStatus.innerHTML =
                "<strong>Thank you! Your project details have been received.</strong><br>" +
                "Our team will review your request and contact you shortly by email or WhatsApp.";

            formStatus.classList.add("success");

            contactForm.reset();

            submitButton.textContent = "Message Sent ✓";

            setTimeout(() => {
                submitButton.textContent = "Send Your Project Details";
                submitButton.disabled = false;
            }, 3000);

        } catch (error) {

            formStatus.innerHTML =
                "<strong>Something went wrong.</strong><br>" +
                "Please try again or contact us directly on WhatsApp.";

            formStatus.classList.add("error");

            submitButton.textContent = "Try Again";
            submitButton.disabled = false;
        }

    });

}