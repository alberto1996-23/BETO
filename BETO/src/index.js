"use strict";
// Function to handle smooth scrolling
function smoothScroll(target) {
    const elem = document.querySelector(target);
    if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
    }
}
//Add event listener
document.addEventListener('loadDomContent', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            const target = link.getAttribute('href');
            if (target) {
                smoothScroll(target);
            }
        });
    });
});
