import { deleteCarousel } from '../utils/carousel/carouselManager.js';
import { clearMainContent } from '../utils/domUtils/contentHandler.js';

import { initializeNavEventListeners } from '../utils/navigation/navEventListeners.js';

import { loadMenuItems } from '../utils/menu/menuLoader.js';
import { buildMenuHeader } from '../utils/menu/menuHeader.js';

import '../../styles/menuSection.css';
import { removeTheme } from '../utils/background/backgroundUtils.js';

export const setupMenuPageStructure = () => {
  deleteCarousel();
  clearMainContent();
  removeTheme('email-theme');
  buildMenuHeader();
  loadMenuItems('cup');
  initializeNavEventListeners();
};
