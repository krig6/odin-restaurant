import '../../styles/carouselComponent.css';

import '../../styles/ctaSection.css';

import {
  initializeCarouselEventHandlers,
  initializeLearnMoreButtonHandlers
} from '../utils/carousel/carouselControls.js';

import { createCarousel } from '../utils/carousel/carouselManager.js';

import { createCustomElement } from '../utils/domUtils/elementUtils.js';

import { setupCarouselImages } from '../utils/carousel/carouselImageSetup.js';

import { isCarouselPresent } from '../utils/carousel/carouselManager.js';

export const initializeCarouselComponent = () => {
  if (isCarouselPresent()) return;

  setupCarouselStructure();
  initializeCarouselEventHandlers();
  initializeLearnMoreButtonHandlers();
  setupCarouselImages();
};

const setupCarouselStructure = () => {
  createCarousel();
  const carouselElement = document.getElementById('hero-carousel');
  if (!carouselElement) {
    throw new Error('Element with id "hero-carousel" not found.');
  }

  const previousButton = createCarouselButton('prev', '&#8249');
  const nextButton = createCarouselButton('next', '&#8250');

  carouselElement.append(previousButton, nextButton);

  const slidesContainer = createCustomElement('div', {
    classes: 'slides-wrapper',
    dataset: { slides: '' }
  });

  const firstSlide = createSlide('image-gallery', 'slide', 'active');
  const secondSlide = createSlide('single-image', 'slide', 'inactive');
  slidesContainer.append(firstSlide, secondSlide);
  carouselElement.appendChild(slidesContainer);
};


const createCarouselButton = (type, label) => {
  const button = createCustomElement('button', {
    classes: `carousel-btn ${type}`,
    html: label,
    dataset: { carouselBtn: type }
  });

  return button;
};

const createCtaSection = ({ id, description, buttonText, action, btnClass }) => {

  const ctaSection = createCustomElement('div', {
    id: id,
    classes: `cta-section ${id}-class`
  });
  const ctaText = createCustomElement('p', {
    text: description
  });
  const ctaButton = createCustomElement('button', {
    classes: btnClass,
    text: buttonText,
    dataset: {
      action: action,
      learnBtn: ''
    }
  });

  ctaSection.append(ctaText, ctaButton);
  return ctaSection;
};

const createSlide = (id, className, currentStatus) => {
  const CTA_ITEMS = [
    {
      id: 'cta-primary',
      description: 'BREWS AND BAKES IN HARMONY',
      buttonText: 'LEARN MORE',
      containerId: 'image-gallery',
      action: 'menu',
      btnClass: 'learn-btn'
    },
    {
      id: 'cta-secondary',
      description: 'A TASTE OF OUR STORY',
      buttonText: 'LEARN MORE',
      containerId: 'single-image',
      action: 'about',
      btnClass: 'learn-btn'
    }
  ];

  const slideContainer = createCustomElement('div', {
    id: id,
    classes: className,
    dataset: { currentStatus }

  });
  const fragment = document.createDocumentFragment();

  CTA_ITEMS
    .filter(item => item.containerId === id)
    .forEach(item => fragment.appendChild(createCtaSection(item)));

  slideContainer.appendChild(fragment);

  return slideContainer;
};
