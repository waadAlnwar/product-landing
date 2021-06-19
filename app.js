const navBtn = document.querySelector('.menu-toggle');
const navClose = document.querySelector('.icon-times');
const nav= document.querySelector('#nav');
const overlay= document.querySelector('.overlay');

navBtn.addEventListener('click', function() {
    nav.classList.toggle('nav-show')
    overlay.classList.toggle('overlay-open')
})

nav.addEventListener('click', function() {
    nav.classList.remove('nav-show')
    overlay.classList.remove('overlay-open')
})