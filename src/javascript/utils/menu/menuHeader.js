import { createCustomElement } from '../domUtils/elementFactory.js';
import { getElement } from '../domUtils/contentHandler.js';

import { initializeMenuEventListeners } from './menuHandler.js';

const MENU_CATEGORIES = ['cup', 'crust', 'churn', 'snack'];

export const buildMenuHeader = () => {
  const mainContentElement = getElement('main-content');

  const menuHeader = createCustomElement('div', {
    id: 'menu-header',
    classes: 'menu-header',
    dataset: { action: 'cup' }
  });

  const categoryNav = createCustomElement('nav', { classes: 'category' });
  const categoryList = createCustomElement('ul', { classes: 'category-list' });

  MENU_CATEGORIES.map(createCategoryItem).forEach(categoryItem => categoryList.append(categoryItem));

  categoryNav.append(categoryList);
  menuHeader.append(categoryNav);
  mainContentElement.append(menuHeader);
  initializeMenuEventListeners();
};

const createCategoryItem = (category) => {
  const listItem = createCustomElement('li');
  const categoryLink = createCustomElement('a', {
    classes: 'category-link',
    dataset: { action: category }
  });
  categoryLink.textContent = category.charAt(0).toUpperCase() + category.slice(1);
  listItem.appendChild(categoryLink);

  return listItem;
};
