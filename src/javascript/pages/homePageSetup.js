import { clearMainContent } from '../utils/domUtils/contentHandler.js';
import { isCarouselPresent } from '../utils/carousel/carouselManager.js';

import { buildCarouselStructure } from '../components/carousel.js';
import { buildFeaturedLinks } from '../components/featuredLinks.js';

import { populateCarouselImages } from '../utils/carousel/carouselImageLoader.js';
import {
  initializeCarouselEventListeners,
  initializeLearnMoreButtonHandlers
} from '../utils/carousel/carouselNavigation.js';
import { initializeNavEventListeners } from '../utils/navigation/navEventListeners.js';

import '../../styles/carousel.css';
import '../../styles/carouselImageAnimation.css';
import '../../styles/ctaSection.css';
import '../../styles/featuredLinks.css';
import { removeTheme } from '../utils/background/backgroundUtils.js';

export const setupHomePageStructure = () => {
  clearMainContent();

  if (isCarouselPresent()) return;

  buildCarouselStructure();
  initializeCarouselEventListeners();
  initializeLearnMoreButtonHandlers();
  populateCarouselImages();
  removeTheme('email-theme');
  buildFeaturedLinks();
  initializeNavEventListeners();
};
