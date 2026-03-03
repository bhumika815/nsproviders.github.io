// ===============================
// COUNTER ANIMATION
// ===============================
const counter = document.querySelectorAll('.counter');
const speed = 200; // lower = faster

function startCounters() {
    counters.forEach(counter => {
        const update = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText.replace('+', '');
            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(update, 15);
            } else {
                counter.innerText = target + "+";
            }
        };
        update();
    });
}

// Start counter when stats section comes into view
const stats = document.querySelector('.stats');
if (stats) {
    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            startCounters();
            observer.unobserve(stats);
        }
    });
    observer.observe(stats);
}


// ===============================
// MOBILE MENU TOGGLE
// ===============================
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

if (menuToggle && navbar) {
    menuToggle.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });
}


// ===============================
// CONTACT FORM SUBMISSION
// ===============================
const form = document.getElementById("contact-form");
const message = document.getElementById("form-message");

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // Show success message
        message.textContent = "Message sent successfully!";
        message.style.color = "#4ade80"; // soft green
        message.style.fontWeight = "500";

        // Reset form after submit
        form.reset();

        // Clear message after 3 seconds
        setTimeout(() => {
            message.textContent = "";
        }, 3000);
    });
}


// ================= Stats Counter =================
const counters = document.querySelectorAll('.stats h2');

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / 200;
        if(count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 10);
        } else {
            counter.innerText = target;
        }
    };

    const observer = new IntersectionObserver(entries => {
        if(entries[0].isIntersecting) updateCount();
    }, {threshold: 1});

    observer.observe(counter);
});



// ===============================
// SCROLL REVEAL ANIMATION
// ===============================
function reveal() {
    const reveals = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");

    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}
window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal); // trigger on page load too


// ===============================
// HEADER SCROLL EFFECT
// ===============================
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});



// ================= Scroll reveal =================
const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if(elementTop < windowHeight - 100) {
            el.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);



