import { menuImages, menuData } from './menuAssets.js';

import { buildMenuGrid } from './menuGrid.js';

import { setActiveLink } from '../navigation/pageNavigation.js';

export const loadMenuItems = (category) => {
  if (!menuData[category]) {
    console.error(`Category '${category}' not found in data.`);
    return;
  }

  const categoryData = menuData[category].map((product) => {
    const imageName = product.image;
    return {
      ...product,
      image: menuImages[category][imageName] || ''
    };
  });

  setActiveLink(category, '#menu-header .category-link');
  buildMenuGrid(categoryData);
};
