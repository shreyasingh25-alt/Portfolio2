


const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
    });
});




const typingText = document.getElementById("typingText");

const roles = [
    "Frontend Developer",
    "Full Stack Developer",
    "JavaScript Developer",
    "React Developer"
];

let roleIndex = 0;
let characterIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (isDeleting) {
        characterIndex--;
    } else {
        characterIndex++;
    }

    typingText.textContent =
        currentRole.substring(0, characterIndex);

    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && characterIndex === currentRole.length) {
        speed = 1500;
        isDeleting = true;
    }

    else if (isDeleting && characterIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 400;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();



const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.15
    }
);

revealElements.forEach((element) => {
    observer.observe(element);
});




const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});




document.getElementById("year").textContent =
    new Date().getFullYear();




const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        formStatus.textContent = "Please fill in all fields.";
        return;
    }

    const subject = encodeURIComponent(
        `Portfolio Contact from ${name}`
    );

    const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    const mailtoLink =
        `mailto:singhshreya30630@gmail.com?subject=${subject}&body=${body}`;

    formStatus.textContent =
        "Opening your email application...";

    window.location.href = mailtoLink;

});




const sections = document.querySelectorAll("main section[id]");
const navigationLinks = document.querySelectorAll(".nav-links a");

const sectionObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                navigationLinks.forEach((link) => {

                    link.classList.toggle(
                        "active",
                        link.getAttribute("href") === `#${entry.target.id}`
                    );

                });

            }

        });

    },
    {
        rootMargin: "-30% 0px -60% 0px"
    }
);

sections.forEach((section) => {
    sectionObserver.observe(section);
});
