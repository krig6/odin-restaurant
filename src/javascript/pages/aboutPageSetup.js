import { clearMainContent } from '../utils/domUtils/contentHandler.js';

import {
  createHeroImageSection,
  buildAboutSection,
  createBrandStory,
  applyHeroText
} from '../components/aboutSection.js';

import { deleteCarousel } from '../utils/carousel/carouselManager.js';
import { toggleMainNavColors } from '../utils/navigation/navAppearance.js';

import { initializeNavEventListeners } from '../utils/navigation/navEventListeners.js';

import { applyParallax } from '../utils/scrollEffects/applyParallax.js';

import '../../styles/aboutSection.css';
import { removeTheme } from '../utils/background/backgroundUtils.js';

export const setupAboutPageStructure = () => {
  deleteCarousel();
  clearMainContent();
  toggleMainNavColors();
  applyHeroText();
  createHeroImageSection();
  removeTheme('email-theme');
  buildAboutSection();
  createBrandStory();
  applyParallax();
  initializeNavEventListeners();
};
