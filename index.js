// header

document.addEventListener('click', function(event) {
    const header = document.querySelector('header');
    const navLinks = header.querySelector('.nav-links');
    const hamburger = header.querySelector('.burger');
    const body = document.body;
    const html = document.documentElement;


    if (event.target.closest('.burger')) {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        body.classList.toggle('active');
        html.classList.toggle('active');
    }
});