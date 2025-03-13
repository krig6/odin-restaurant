import { getElement } from '../domUtils/contentHandler.js';

import { loadMenuItems } from './menuLoader.js';

export const initializeMenuEventListeners = () => {
  const menuButtons = document.querySelectorAll('.category-link');

  menuButtons.forEach(button => {
    button.addEventListener('click', () => {
      const selectedCategory = button.getAttribute('data-action');
      handleCategorySelection(selectedCategory);
    });
  });
};

const handleCategorySelection = (selectedCategory) => {
  if (isCategoryActive(selectedCategory)) {
    console.info('Menu items are already loaded for this category.');
    return;
  }

  const validCategories = ['cup', 'crust', 'churn', 'snack'];

  if (validCategories.includes(selectedCategory)) {
    setActiveCategory(selectedCategory);
    loadMenuItems(selectedCategory);
  }
};

const isCategoryActive = (category) => {
  const categoryHeader = getElement('menu-header');
  if (!categoryHeader) return false;

  return categoryHeader.getAttribute('data-action') === category;
}

const setActiveCategory = (category) => {
  const categoryHeader = getElement('menu-header');
  if (categoryHeader) {
    categoryHeader.setAttribute('data-action', category)
  }
};

