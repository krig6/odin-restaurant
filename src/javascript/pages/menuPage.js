import { deleteCarousel } from '../utils/carousel/carouselManager.js';

import { clearMainContent } from '../utils/domUtils/mainContentUtils.js';

import { initializeMenu } from '../components/menuComponent.js';

export const renderMenuPageContent = () => {
  deleteCarousel();
  clearMainContent();
  initializeMenu();
};
