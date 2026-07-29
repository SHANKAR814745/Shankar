// ===============================
// Typing Animation
// ===============================

const typingText = [
    "Full Stack Java Developer",
    "Web Developer",
    "Java Programmer",
    "Frontend Developer"
];

const typingElement = document.getElementById("typing");

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    if (!typingElement) return;

    const currentText = typingText[textIndex];

    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex--);
    } else {
        typingElement.textContent = currentText.substring(0, charIndex++);
    }

    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentText.length + 1) {
        speed = 1500;
        isDeleting = true;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex++;

        if (textIndex >= typingText.length) {
            textIndex = 0;
        }
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// ===============================
// Mobile Menu
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const menu = document.getElementById("menu");

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        if (menu.style.display === "flex") {

            menu.style.display = "none";

        } else {

            menu.style.display = "flex";
            menu.style.flexDirection = "column";
            menu.style.position = "absolute";
            menu.style.top = "80px";
            menu.style.right = "20px";
            menu.style.background = "#112e42";
            menu.style.padding = "20px";
            menu.style.borderRadius = "10px";
            menu.style.gap = "20px";

        }

    });

}


// ===============================
// Smooth Scrolling
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// ===============================
// Navbar Active Link
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// ===============================
// Reveal Animation on Scroll
// ===============================

const revealElements = document.querySelectorAll(
".hero, .about, .skills, .projects, .education, .contact"
);

function reveal() {

    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {

        const revealTop = element.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }

    });

}

reveal();

window.addEventListener("scroll", reveal);