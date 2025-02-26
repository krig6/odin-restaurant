import {
  menuImages,
  menuData
} from '../menu/menuData.js';

import { renderMenuItems } from '../menu/menuRenderer.js';

import { setActiveLink } from '../navigation/pageNavigation.js';

export const initializeItems = (category) => {
  if (!menuData[category]) {
    console.error(`Category '${category}' not found in data.`);
    return;
  }

  const categoryData = menuData[category].map(product => {
    const imageName = product.src;
    return {
      ...product,
      src: menuImages[category][imageName] || ''
    };
  });

  setActiveLink(category, '#category-name .menu-btn');
  renderMenuItems(categoryData);
};
