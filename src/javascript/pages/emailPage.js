
import { deleteCarousel } from '../utils/carousel/carouselManager.js';

import { clearMainContent } from '../utils/domUtils/mainContentUtils.js';

import { buildEmailSection } from '../components/emailComponent.js';

import { initializeFormValidation } from '../utils/formValidation/validateFields.js';

import { initializeNavEventHandlers } from '../utils/navigation/mainNavigationEvents.js';

import '../../styles/emailComponent.css';

export const setupEmailPageStructure = () => {
  deleteCarousel();
  clearMainContent();
  buildEmailSection();
  initializeFormValidation();
  initializeNavEventHandlers();
};
