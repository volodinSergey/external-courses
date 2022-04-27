const sliderConfig = {
  slidesParent: document.querySelector('.slider__slides'),
  slidesClass: 'slider__slides-img',
  buttonsParent: document.querySelector('.slider__buttons'),
  prevButton: document.querySelector('.slider__buttons-button_prev'),
  nextButton: document.querySelector('.slider__buttons-button_next'),
  activeClass: 'activeSlide',
};

const keyCodes = {
  arrowLeftKeyCode: 'ArrowLeft',
  arrowRightKeyCode: 'ArrowRight',
};

const slidesDataBase = [
  'images/slides/slide1.jpg',
  'images/slides/slide2.jpg',
  'images/slides/slide3.jpg',
  'images/slides/slide4.jpg',
  'images/slides/slide5.jpg',
  'images/slides/slide6.jpg',
];

const slider = (config) => {
  const {
    slidesParent,
    buttonsParent,
    prevButton,
    nextButton,
    slidesClass,
    activeClass,
  } = config;

  const {
    arrowLeftKeyCode,
    arrowRightKeyCode,
  } = keyCodes;

  let slideIndex = 0;

  const renderSlides = () => {
    slidesDataBase.forEach((slideSrc) => {
      const slide = document.createElement('img');

      slide.src = slideSrc;
      slide.alt = 'slide';
      slide.classList.add(slidesClass);

      slidesParent.append(slide);
    });

    return document.querySelectorAll(`.${slidesClass}`);
  };

  const slides = renderSlides();

  const showSlide = () => {
    slides.forEach((slide) => slide.classList.remove(activeClass));
    slides[slideIndex].classList.add(activeClass);
  };

  showSlide();

  const moveSlidesBackward = () => {
    slideIndex -= 1;

    if (slideIndex < 0) slideIndex = slides.length - 1;

    showSlide(slideIndex);
  };

  const moveSlidesForward = () => {
    slideIndex += 1;

    if (slideIndex > slides.length - 1) slideIndex = 0;

    showSlide(slideIndex);
  };

  buttonsParent.addEventListener('click', (e) => {
    const target = e.target;

    if (target && target === prevButton) moveSlidesBackward();

    if (target && target === nextButton) moveSlidesForward();
  });

  const moveSlidesByKeyboard = () => {
    document.addEventListener('keydown', (e) => {
      const keyCode = e.key;

      if (keyCode === arrowLeftKeyCode) moveSlidesBackward();

      if (keyCode === arrowRightKeyCode) moveSlidesForward();
    });
  };

  moveSlidesByKeyboard();
};

slider(sliderConfig);
