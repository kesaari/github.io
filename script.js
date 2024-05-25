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


var items = document.querySelectorAll('.display--none');
var seeMoreBtn = document.querySelector('.see-more');


seeMoreBtn.addEventListener('click', function() {
  items.classList.toggle('display--none')
});

// Получаем элементы слайдера
const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('.profit__slide'));
const slideCount = slides.length;
let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

// Инициализация слайдера
updateSlider();