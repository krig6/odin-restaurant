import { renderHomePageContent } from '../../pages/homePage.js';

import { renderMenuPageContent } from '../../pages/menuPage.js';

import { renderAboutPageContent } from '../../pages/aboutPage.js';

import { renderEmailPageContent } from '../../pages/emailPage.js';

import { smoothScrollToTop } from '../scrollEffects/smoothScrollToTop.js';

import {
  resetToDefaultNavColors,
  updateHeaderStickyState
} from './mainNavAppearance.js';

export const handlePageNavigation = (page) => {
  if (isCurrentPage(page)) {
    console.log(`Already on the ${page} page, no need to reload.`);
    return;
  };

  smoothScrollToTop();
  navigateToPage(page);
  resetToDefaultNavColors();
  updateHeaderStickyState(page);
  setPageHash(page);
  setActiveLink(page, '#site-header .nav-link');
  setActiveLink(page, '#site-footer .quick-link');
};

export const setActiveLink = (page, linkSelector) => {
  const links = document.querySelectorAll(linkSelector);
  links.forEach(link => {
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
      renderMenuPageContent();
      break;
    case 'email':
      renderEmailPageContent();
      break;
    case 'about':
      renderAboutPageContent();
      break;
    case 'home':
    default:
      renderHomePageContent();
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
