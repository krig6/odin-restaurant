import { createCustomElement } from '../domUtils/elementUtils.js';

import { checkElementById } from '../domUtils/mainContentUtils.js';

export const deleteCarousel = () => {
  if (isCarouselPresent()) {
    const carouselElement = checkElementById('hero-carousel');

    if (carouselElement) {
      carouselElement.remove();
      /*eslint-disable no-console */
      console.info('Carousel deleted successfully.');
      /* eslint-enable no-console */
    } else {
      throw new Error('Carousel element not found in the document.');
    }
  } else {
    /*eslint-disable no-console */
    console.info('No carousel to delete.');
    /* eslint-enable no-console */
  }
};

export const createCarousel = () => {
  const carouselElement = checkElementById('hero-carousel');
  if (carouselElement) {
    /*eslint-disable no-console */
    console.info('Carousel already exists.');
    /* eslint-enable no-console */
    return;
  }

  const newCarouselElement = createCustomElement('section', {
    id: 'hero-carousel',
    classes: 'carousel',
    dataset: { carousel: '' }
  });

  const mainContentElement = document.getElementById('main-content');
  document.body.insertBefore(newCarouselElement, mainContentElement);
  /*eslint-disable no-console */
  console.info('Carousel created successfully.');
  /* eslint-enable no-console */
};

export const isCarouselPresent = () => {
  return !!document.getElementById('hero-carousel');
};
