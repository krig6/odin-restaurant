import { toggleMainNavColors } from '../navigation/navAppearance.js';

import { handlePageNavigation } from '../navigation/pageNavigation.js';

export const initializeCarouselEventListeners = () => {
  initializeSwipeEvents();

  const carouselButtons = document.querySelectorAll('[data-carousel-btn]');
  carouselButtons.forEach((button) => {
    button.addEventListener('click', () => {
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

const initializeSwipeEvents = () => {
  const carousel = document.querySelector('[data-carousel]');
  if (!carousel) return;

  let isSwipeEnabled = window.innerWidth <= 768;

  const updateSwipeEvents = () => {
    isSwipeEnabled = window.innerWidth <= 768;
  };

  const handleTouchStart = (e) => {
    if (!isSwipeEnabled) return;
    carousel.dataset.startX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!isSwipeEnabled) return;
    const startX = parseFloat(carousel.dataset.startX || 0);
    const endX = e.changedTouches[0].clientX;
    handleSwipe(startX, endX);
  };

  window.addEventListener('resize', updateSwipeEvents);
  carousel.addEventListener('touchstart', handleTouchStart, {
    passive: true
  });
  carousel.addEventListener('touchend', handleTouchEnd);
};

const handleSwipe = (startX, endX) => {
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
  const carousel = document.querySelector('[data-carousel]');
  if (!carousel) return;

  const slides = carousel.querySelector('[data-slides]');
  if (!slides) return;

  const activeSlide = slides.querySelector('[data-current-status="active"]');
  if (!activeSlide) return;

  let newIndex = [...slides.children].indexOf(activeSlide) + offset;

  if (newIndex < 0) newIndex = slides.children.length - 1;
  if (newIndex >= slides.children.length) newIndex = 0;

  slides.children[newIndex].dataset.currentStatus = 'active';
  delete activeSlide.dataset.currentStatus;
};
