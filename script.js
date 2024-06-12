
let dialog = document.querySelector("dialog");
let modalOverlay = document.querySelector('.modal__overlay')
let modalClose = document.querySelector('.modal__close')

let btnArray = document.querySelectorAll('[type="button"]');
btnArray.forEach(function(btn) {
    btn.addEventListener('click', function() {
      dialog.show();
      modalOverlay.style.display = "block";
    });
});

modalClose.addEventListener('click', function() {
    dialog.close();
    modalOverlay.style.display = "none";
})

modalOverlay.addEventListener('click', function() {
  dialog.close();
  modalOverlay.style.display = "none";
})



















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

submenu.addEventListener("click",function(e) {
  if((e.target) && (e.target.nodeName == "LI" || e.target.nodeName == "A")) {
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
        dialog.close();
        modalOverlay.style.display = "none";
    }});

    let swiper = null;

    function sliderStart() {
       if (!swiper) {
        swiper = new Swiper('.swiper', {
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            sliderCardPerView: 'auto',
          } 
        });
       } else {
        swiper.disable();
        swiper = null;
       }
    }

    window.addEventListener ('DOMContentLoaded', function() {
      if (window.matchMedia("(max-width: 768px)").matches) {
        sliderStart()
      } else {
        swiper.disable();
        swiper = null;
      }
    })

    let seeMore = document.querySelector('.see-more');
    let sliderCard = document.querySelectorAll('.profit-card-item');
    let containerDesctop = document.querySelectorAll('.display--none--desctop');
    let containerLaptop = document.querySelectorAll('.display--none--laptop')

  // seeMore.addEventListener('click', function() {
  //   if (window.matchMedia("(max-width: 1280px)").matches) {
  //     for (let i = 2; i < sliderCard.length; i++) {
  //       sliderCard[i].classList.toggle('display--block')
  //     }
  //   } else {
  //     for (let i = 3; i < sliderCard.length; i++) {
  //       sliderCard[i].classList.toggle('display--block')
  //   }

  //   }
  // });

  seeMore.addEventListener('click', function() {
    containerLaptop.classList.remove('display--none--laptop')  
  });