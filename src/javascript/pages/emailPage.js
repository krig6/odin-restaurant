import '../../styles/emailComponent.css';

import { deleteCarousel } from '../utils/carousel/carouselManager.js';

import { clearMainContent } from '../utils/domUtils/mainContentUtils.js';

import { initializeEmailFormSection } from '../components/emailComponent.js';

import { initializeFormValidation } from '../utils/formValidation/validateFields.js';

import { initializeNavEventHandlers } from '../utils/navigation/mainNavigationEvents.js';

export const renderEmailPageContent = () => {
  deleteCarousel();
  clearMainContent();
  initializeEmailFormSection();
  initializeFormValidation();
  initializeNavEventHandlers();
};
