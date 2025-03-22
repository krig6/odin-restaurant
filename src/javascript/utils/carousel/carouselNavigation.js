import { toggleMainNavColors } from '../navigation/navAppearance.js';

import { handlePageNavigation } from '../navigation/pageNavigation.js';

export const initializeCarouselEventListeners = () => {
  const carouselButtons = document.querySelectorAll('[data-carousel-btn]');
  const carousel = document.querySelector('[data-carousel]');
  const slides = carousel.querySelector('[data-slides]');
  let startX = 0;
  let endX = 0;

  // Swipe event handlers
  carousel.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  });

  carousel.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].clientX;
    handleSwipe();
  });

  const handleSwipe = () => {
    const swipeThreshold = 50; // Minimum swipe distance to trigger

    if (startX - endX > swipeThreshold) {
      toggleMainNavColors();
      moveSlide(1); // Swipe left (Next)
    } else if (endX - startX > swipeThreshold) {
      toggleMainNavColors();
      moveSlide(-1); // Swipe right (Previous)
    }
  };

  const moveSlide = (offset) => {
    const activeSlide = slides.querySelector('[data-current-status="active"]');
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;

    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.currentStatus = 'active';
    delete activeSlide.dataset.currentStatus;
  };

  carouselButtons.forEach((button) => {
    ['click', 'touchend'].forEach((event) => {
      button.addEventListener(event, (e) => {
        e.preventDefault();
        toggleCarouselButtonColors();
        removeCarouselButtonFocus();
        toggleMainNavColors();
        const offset = button.dataset.carouselBtn === 'next' ? 1 : -1;
        const slides = button
          .closest('[data-carousel]')
          .querySelector('[data-slides]');

        const activeSlide = slides.querySelector(
          '[data-current-status="active"]'
        );
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;

        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;

        slides.children[newIndex].dataset.currentStatus = 'active';
        delete activeSlide.dataset.currentStatus;
      });
    });
  });
};

const toggleCarouselButtonColors = () => {
  const carouselButtons = document.querySelectorAll(
    '#hero-carousel .carousel-btn'
  );
  carouselButtons.forEach((button) => {
    button.classList.toggle('change-color');
  });
};

const removeCarouselButtonFocus = () => {
  const carouselButtons = document.querySelectorAll(
    '#hero-carousel .carousel-btn'
  );
  carouselButtons.forEach((button) => {
    button.blur();
  });
};

export const initializeLearnMoreButtonHandlers = () => {
  const learnButtons = document.querySelectorAll('[data-learn-btn]');

  learnButtons.forEach((button) => {
    button.addEventListener('click', handleLearnMoreClick);
  });
};

const handleLearnMoreClick = (event) => {
  const targetPage = event.currentTarget.getAttribute('data-action');
  handlePageNavigation(targetPage);
  history.pushState(null, null, `#${targetPage}`);
};
