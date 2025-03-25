import { deleteCarousel } from '../utils/carousel/carouselManager.js';

import { clearMainContent } from '../utils/domUtils/contentHandler.js';

import { buildEmailSection } from '../components/emailSection.js';

import { initializeFormValidation } from '../utils/formValidation/formValidation.js';

import { initializeNavEventListeners } from '../utils/navigation/navEventListeners.js';

import '../../styles/emailSection.css';
import { applyTheme } from '../utils/background/backgroundUtils.js';

export const setupEmailPageStructure = () => {
  deleteCarousel();
  clearMainContent();
  applyTheme('email-theme');
  buildEmailSection();
  initializeFormValidation();
  initializeNavEventListeners();
};
