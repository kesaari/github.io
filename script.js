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

    let swiper = null;

    function sliderStart() {
       if (!swiper) {
        swiper = new Swiper('.swiper', {
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            slidesPerView: 'auto',
          }
        });
       }
    }

    window.addEventListener ('resize', function() {
      if (window.matchMedia("(max-width: 768px)").matches) {
        sliderStart()
      } else {
        swiper.disable();
        swiper = null;
      }
    })