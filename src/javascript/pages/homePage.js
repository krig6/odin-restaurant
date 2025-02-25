
import { initializeCarouselComponent } from '../components/carouselComponent.js';

import { initializeFeaturedLinks } from '../components/featuredLinksComponent.js';

import { clearMainContent } from '../utils/domUtils/mainContentUtils.js';

export const renderHomePageContent = () => {
  clearMainContent();
  initializeCarouselComponent();
  initializeFeaturedLinks();
};
