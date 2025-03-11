import { clearMainContent } from '../utils/domUtils/mainContentUtils.js';

import {
  createHeroImageSection,
  buildAboutSection,
  createBrandStory,
  createIntroBanner
} from '../components/aboutComponent.js';

import { deleteCarousel } from '../utils/carousel/carouselManager.js';
import { toggleMainNavColors } from '../utils/navigation/mainNavAppearance.js';

import { initializeNavEventListeners } from '../utils/navigation/mainNavigationEvents.js';

import { applyParallax } from '../utils/scrollEffects/applyParallax.js';

import '../../styles/aboutComponent.css';

export const setupAboutPageStructure = () => {
  deleteCarousel();
  clearMainContent();
  toggleMainNavColors();
  createIntroBanner();
  createHeroImageSection();
  buildAboutSection();
  createBrandStory();
  applyParallax();
  initializeNavEventListeners();
};
