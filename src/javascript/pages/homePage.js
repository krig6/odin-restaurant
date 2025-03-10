import { clearMainContent } from '../utils/domUtils/mainContentUtils.js';
import { isCarouselPresent } from '../utils/carousel/carouselManager.js';

import { buildCarouselStructure } from '../components/carouselComponent.js';
import { buildFeaturedLinks } from '../components/featuredLinksComponent.js';

import { populateCarouselImages } from '../utils/carousel/carouselImageSetup.js';
import { initializeCarouselEventHandlers, initializeLearnMoreButtonHandlers } from '../utils/carousel/carouselControls.js';
import { initializeNavEventHandlers } from '../utils/navigation/mainNavigationEvents.js';

import '../../styles/carouselComponent.css';
import '../../styles/carouselImageTransition.css'
import '../../styles/ctaSection.css';
import '../../styles/featuredLinksComponent.css';

export const setupHomePageStructure = () => {
  clearMainContent();

  if (isCarouselPresent()) return;

  buildCarouselStructure();
  initializeCarouselEventHandlers();
  initializeLearnMoreButtonHandlers();
  populateCarouselImages();
  buildFeaturedLinks();
  initializeNavEventHandlers();
};
