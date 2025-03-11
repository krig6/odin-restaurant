import {
  menuImages,
  menuData
} from '../menu/menuData.js';

import { buildMenuGrid } from './menuGridBuilder.js';

import { setActiveLink } from '../navigation/pageNavigation.js';

export const loadMenuItems = (category) => {
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

  setActiveLink(category, '#menu-header .category-link');
  buildMenuGrid(categoryData);
};
