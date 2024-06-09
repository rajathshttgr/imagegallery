// Hamburger icon, navigation menu
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('open');
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const carouselImages = document.querySelector('.carousel-images');
  const items = document.querySelectorAll('.carousel-item');
  let index = 0;

  function updateCarousel() {
    carouselImages.style.transition = 'transform 0.5s ease-in-out';
    carouselImages.style.transform = `translateX(-${index * 100}%)`;

    if (index >= items.length) {
      setTimeout(() => {
        carouselImages.style.transition = 'none';
        index = 0;
        carouselImages.style.transform = `translateX(0)`;
      }, 500);
    } else if (index < 0) {
      setTimeout(() => {
        carouselImages.style.transition = 'none';
        index = items.length - 1;
        carouselImages.style.transform = `translateX(-${index * 100}%)`;
      }, 500);
    }
  }

  prevBtn.addEventListener('click', () => {
    index--;
    updateCarousel();
  });

  nextBtn.addEventListener('click', () => {
    index++;
    updateCarousel();
  });

  // Auto loop
  setInterval(() => {
    index++;
    updateCarousel();
  }, 5000);
});