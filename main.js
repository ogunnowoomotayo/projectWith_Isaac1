const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__meun'); // Corrected class name

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});