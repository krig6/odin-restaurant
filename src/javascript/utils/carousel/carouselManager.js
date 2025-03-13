import { createCustomElement } from '../domUtils/elementFactory.js';

import { getElement, checkElementById } from '../domUtils/contentHandler.js';

export const deleteCarousel = () => {
  if (isCarouselPresent()) {
    const carouselElement = getElement('hero-carousel');

    if (carouselElement) {
      carouselElement.remove();
      console.info('Carousel deleted successfully.');
    } else {
      throw new Error('Carousel element not found in the document.');
    }
  } else {
    console.info('No carousel to delete.');
  }
};

export const createCarousel = () => {
  const carouselElement = checkElementById('hero-carousel');
  if (carouselElement) {
    console.info('Carousel already exists.');
    return;
  }

  const newCarouselElement = createCustomElement('section', {
    id: 'hero-carousel',
    classes: 'carousel',
    dataset: { carousel: '' }
  });

  const mainContentElement = checkElementById('main-content');

  document.body.insertBefore(newCarouselElement, mainContentElement);

  console.info('Carousel created successfully.');
  return newCarouselElement;
};

export const isCarouselPresent = () => {
  return !!document.getElementById('hero-carousel');
};
