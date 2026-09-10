document.querySelectorAll('[data-carousel]').forEach((carousel) => {
  const slides = Array.from(carousel.querySelectorAll('.festival-carousel-slide'));
  const previous = carousel.querySelector('.carousel-previous');
  const next = carousel.querySelector('.carousel-next');
  const current = carousel.querySelector('[data-carousel-current]');
  let index = 0;

  const showSlide = (newIndex) => {
    slides[index].classList.remove('is-active');
    slides[index].setAttribute('aria-hidden', 'true');
    index = (newIndex + slides.length) % slides.length;
    slides[index].classList.add('is-active');
    slides[index].removeAttribute('aria-hidden');
    current.textContent = String(index + 1);
  };

  slides.forEach((slide, slideIndex) => {
    if (slideIndex !== 0) slide.setAttribute('aria-hidden', 'true');
  });

  previous.addEventListener('click', () => showSlide(index - 1));
  next.addEventListener('click', () => showSlide(index + 1));
});
