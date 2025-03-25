import { setupHomePageStructure } from '../../pages/homePageSetup.js';
import { setupMenuPageStructure } from '../../pages/menuPageSetup.js';
import { setupEmailPageStructure } from '../../pages/emailPageSetup.js';
import { setupAboutPageStructure } from '../../pages/aboutPageSetup.js';

import { smoothScrollToTop } from '../scrollEffects/smoothScrollToTop.js';

import {
  resetToDefaultNavColors,
  updateHeaderStickyState
} from './navAppearance.js';

export const handlePageNavigation = (page) => {
  if (isCurrentPage(page)) {
    console.info(`Already on the ${page} page, no need to reload.`);
    return;
  }

  smoothScrollToTop();
  navigateToPage(page);
  resetToDefaultNavColors(page);
  updateHeaderStickyState(page);
  setPageHash(page);
  setActiveLink(page, '#site-header .nav-link');
  setActiveLink(page, '#site-footer .quick-link');
};

export const setActiveLink = (page, linkSelector) => {
  const links = document.querySelectorAll(linkSelector);
  links.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('data-action') === page);
  });
};

const setPageHash = (page) => {
  if (location.hash !== `#${page}`) {
    location.hash = page;
  }
};

const isCurrentPage = (page) => {
  return location.hash === `#${page}`;
};

const navigateToPage = (page) => {
  switch (page) {
    case 'menu':
      setupMenuPageStructure();
      break;
    case 'email':
      setupEmailPageStructure();
      break;
    case 'about':
      setupAboutPageStructure();
      break;
    case 'home':
    default:
      setupHomePageStructure();
      break;
  }
};

export const initializePage = () => {
  const initialPage = location.hash.substring(1) || 'home';
  navigateToPage(initialPage);
  setActiveLink(initialPage, '#site-header .nav-link');
  setActiveLink(initialPage, '#site-footer .quick-link');
  updateHeaderStickyState(initialPage);
};
