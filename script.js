
// Mobile Menu Toggle
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-link");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    // Change icon based on state
    const icon = menuBtn.querySelector("i");
    if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
    } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    }
});

links.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        const icon = menuBtn.querySelector("i");
         icon.classList.remove("fa-times");
         icon.classList.add("fa-bars");
    });
});

// Scroll Animation for Navbar
const navbar = document.querySelector(".navbar");
let lastScroll = 0;

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = "none";
    } else {
        navbar.style.boxShadow = "0 10px 30px -10px rgba(2, 12, 27, 0.7)";
    }
    
    lastScroll = currentScroll;
});

