import '../../styles/aboutComponent.css';

import {
  renderMainAboutImage,
  populateAboutSections,
  renderMessageSection
} from '../components/aboutComponent.js';

import { deleteCarousel } from '../utils/carousel/carouselManager.js';

import { clearMainContent } from '../utils/domUtils/mainContentUtils.js';

import { applyParallax } from '../utils/scrollEffects/applyParallax.js';

import { initializeNavEventHandlers } from '../utils/navigation/mainNavigationEvents.js';

export const renderAboutPageContent = () => {
  deleteCarousel();
  clearMainContent();
  renderMainAboutImage();
  populateAboutSections();
  renderMessageSection();
  applyParallax();
  initializeNavEventHandlers();
};
