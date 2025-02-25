import '../../styles/contactComponent.css';

import { deleteCarousel } from '../utils/carousel/carouselManager.js';

import { clearMainContent } from '../utils/domUtils/mainContentUtils.js';

import { initializeContactFormSection } from '../components/contactComponent.js';

import { initializeFormValidation } from '../utils/formValidation/validateFields.js';

export const renderEmailPageContent = () => {
  deleteCarousel();
  clearMainContent();
  initializeContactFormSection();
  initializeFormValidation();
};
