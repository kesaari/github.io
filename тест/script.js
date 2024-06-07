const spoiler = document.querySelector('.spoiler').addEventListener('click', () => {
    const slides = document.querySelectorAll('.services__swiper-wrapper .swiper-slide-1');
    const button = document.querySelector('.spoiler');
  
    const spoilerIcon = button.classList.contains('services__spoiler--rotate');
  
    if (spoilerIcon) {
      button.classList.remove('services__spoiler--rotate');
    } else {
      button.classList.add('services__spoiler--rotate');
    }
  
    if (window.innerWidth >= 768 && window.innerWidth <= 1439) {
      let visible = slides[2].style.display === 'block';
  
      for (let i = 2; i < slides.length; i++) {
        if (visible) {
          slides[i].style.display = 'none';
        } else {
          slides[i].style.display = 'block';
        }
      }
    } else {
      let visible = slides[3].style.display === 'block';
  
      for (let i = 3; i < slides.length; i++) {
        if (visible) {
          slides[i].style.display = 'none';
        } else {
          slides[i].style.display = 'block';
        }
      }
    }
  });