var menuBtn = document.querySelector('.navigation__menu');
var submenu = document.querySelector('menu');
var closeBtn = document.querySelector('.close')

menuBtn.addEventListener('click', function() {
    submenu.style.display = "block";
});

closeBtn.addEventListener('click', function() {
    submenu.style.display = "none";
});

document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        submenu.style.display = "none";
    }});