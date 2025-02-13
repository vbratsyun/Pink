const slides = document.querySelectorAll('.comment__slide');
const buttons = document.querySelectorAll('.pagination-list--comment .pagination-list__toggle');
const buttonBack = document.querySelector('.pagination-arrows__prew');
const buttonForward = document.querySelector('.pagination-arrows__next');
const carousel = document.querySelector('.comment__carousel');

// Функция для обновления активного слайда и кнопки пагинации
const updateCarousel = (index) => {
  slides.forEach((slide) => slide.classList.remove('comment__slide--current'));
  buttons.forEach((btn) => btn.classList.remove('pagination-list__toggle--current'));

  slides[index].classList.add('comment__slide--current');
  buttons[index].classList.add('pagination-list__toggle--current');
};

// Обработчик кликов по кнопкам пагинации
buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    updateCarousel(index); // Переключаем слайд при клике на пагинацию
  });
});

// Обработчик клика по кнопке 'Предыдущий'
const onButtonBackClick = () => {
  let currentIndex = [...slides].findIndex((slide) => slide.classList.contains('comment__slide--current'));
  currentIndex = currentIndex > 0 ? currentIndex - 1 : slides.length - 1; // Переход на предыдущий слайд, если это не первый
  updateCarousel(currentIndex);
};

// Обработчик клика по кнопке 'Следующий'
const onButtonForwardClick = () => {
  let currentIndex = [...slides].findIndex((slide) => slide.classList.contains('comment__slide--current'));
  currentIndex = currentIndex < slides.length - 1 ? currentIndex + 1 : 0; // Переход на следующий слайд, если это не последний
  updateCarousel(currentIndex);
};

// Назначаем обработчики для кнопок стрелок
buttonBack.addEventListener('click', onButtonBackClick);
buttonForward.addEventListener('click', onButtonForwardClick);

// Инициализация начального состояния
updateCarousel(0);

