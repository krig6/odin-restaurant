import '../../styles/menuComponent.css';

import { initializeItems } from '../utils/menu/menuLoader.js';

import { setupMenuHeader } from '../utils/menu/menuHeader.js';

export const initializeMenu = () => {
  setupMenuHeader();
  initializeItems('cup');
};
