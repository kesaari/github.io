let menuBtn = document.querySelector('.navigation__menu');
let submenu = document.querySelector('menu');
let closeBtn = document.querySelector('.close')
let overlay = document.querySelector('.overlay')
let menuShow = false;

menuBtn.addEventListener('click', function() {
  if (menuShow == false) { 
    submenu.style.display = "block";
    menuShow = true;
} else {
  submenu.style.display = "none";
  menuShow = false;
}
});

closeBtn.addEventListener('click', function() {
    submenu.style.display = "none";
    menuShow = false;
});
overlay.addEventListener('click', function() {
  submenu.style.display = "none";
  menuShow = false;
});


document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        submenu.style.display = "none";
        menuShow = false;
    }});

    const swiper = new Swiper('.swiper', {
      // Optional parameters
      loop: true,
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    });

    let windowWidth = documentElement.clientWidth
    let x = window.matchMedia("(max-width: 768px)")
 
      if (windowWidth <= 768) {
        Swiper ()
      }

    window.addEventListener ('resize', function() {
      if (window.matchMedia("(max-width: 768px)").matches) {
        console.log('aboba')
      }
    })