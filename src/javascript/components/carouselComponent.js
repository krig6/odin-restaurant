import carouselConfig from '../data/carouselConfig.json';

import { createCustomElement } from '../utils/domUtils/elementUtils.js';
import { createCarousel } from '../utils/carousel/carouselManager.js';

export const buildCarouselStructure = () => {
  const carousel = createCarousel();
  const carouselButtonsContainer = createCarouselButtons();
  const slidesContainer = createSlidesContainer();

  carousel.append(carouselButtonsContainer, slidesContainer);
};

const createCarouselButtons = () => {
  const carouselButtonsContainer = createCustomElement('div', {
    classes: 'carousel-buttons-container'
  });

  Object.entries(carouselConfig.carouselButtons).forEach(([type, { label }]) => {
    const buttonElement = createCustomElement('button', {
      classes: `carousel-btn ${type}`,
      html: label,
      dataset: { carouselBtn: type }
    });
    carouselButtonsContainer.append(buttonElement);
  });

  return carouselButtonsContainer;
};

const createSlidesContainer = () => {
  const slidesContainer = createCustomElement('div', {
    classes: 'slides-wrapper',
    dataset: { slides: '' }
  });

  const slideElements = carouselConfig.slides.map(({ id, className, currentStatus, cta }) => {
    const slideElement = createCustomElement('div', {
      id,
      classes: className,
      dataset: { currentStatus }
    });
    slideElement.append(createCtaSection(cta));

    return slideElement;
  })
  slidesContainer.append(...slideElements);

  return slidesContainer;
};

const createCtaSection = ({ headline, buttonText, action, buttonClass }) => {
  const containerElement = createCustomElement('div', {
    classes: 'cta-container'
  });

  const headlineElement = createCustomElement('p', {
    text: headline,
    classes: `cta-${action}-headline headline`
  });

  const buttonElement = createCustomElement('button', {
    classes: buttonClass,
    text: buttonText,
    dataset: {
      action,
      learnBtn: ''
    }
  });
  containerElement.append(headlineElement, buttonElement);

  return containerElement;
};

