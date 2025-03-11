import { clearMainContent } from '../utils/domUtils/mainContentUtils.js';
import { isCarouselPresent } from '../utils/carousel/carouselManager.js';

import { buildCarouselStructure } from '../components/carouselComponent.js';
import { buildFeaturedLinks } from '../components/featuredLinksComponent.js';

import { populateCarouselImages } from '../utils/carousel/carouselImageSetup.js';
import { initializeCarouselEventListeners, initializeLearnMoreButtonHandlers } from '../utils/carousel/carouselControls.js';
import { initializeNavEventListeners } from '../utils/navigation/mainNavigationEvents.js';

import '../../styles/carouselComponent.css';
import '../../styles/carouselImageTransition.css'
import '../../styles/ctaSection.css';
import '../../styles/featuredLinksComponent.css';

export const setupHomePageStructure = () => {
  clearMainContent();

  if (isCarouselPresent()) return;

  buildCarouselStructure();
  initializeCarouselEventListeners();
  initializeLearnMoreButtonHandlers();
  populateCarouselImages();
  buildFeaturedLinks();
  initializeNavEventListeners();
};
