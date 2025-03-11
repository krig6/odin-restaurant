import { deleteCarousel } from '../utils/carousel/carouselManager.js';
import { clearMainContent } from '../utils/domUtils/mainContentUtils.js';

import { initializeNavEventHandlers } from '../utils/navigation/mainNavigationEvents.js';

import { loadMenuItems } from '../utils/menu/menuLoader.js';
import { buildMenuHeader } from '../utils/menu/menuHeader.js';

import '../../styles/menuComponent.css';

export const buildMenuPageStructure = () => {
  deleteCarousel();
  clearMainContent();
  buildMenuHeader();
  loadMenuItems('cup');
  initializeNavEventHandlers();
};

