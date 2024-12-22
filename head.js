// head.js
// JavaScript for handling the responsive menu

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const body = document.querySelector('body');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Close the menu when a link is clicked
const navLinks = document.querySelectorAll('.nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

// Ensure the hamburger menu works correctly when resizing
window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) {
        nav.classList.remove('active');
    }
});
