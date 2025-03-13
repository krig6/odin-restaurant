import { deleteCarousel } from '../utils/carousel/carouselManager.js';

import { clearMainContent } from '../utils/domUtils/contentHandler.js';

import { buildEmailSection } from '../components/emailSection.js';

import { initializeFormValidation } from '../utils/formValidation/formValidation.js';

import { initializeNavEventListeners } from '../utils/navigation/navEventListeners.js';

import '../../styles/emailSection.css';

export const setupEmailPageStructure = () => {
  deleteCarousel();
  clearMainContent();
  buildEmailSection();
  initializeFormValidation();
  initializeNavEventListeners();
};
