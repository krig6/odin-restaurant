import { isElementPresent } from '../domUtils/mainContentUtils.js';

import { initializeItems } from './menuLoader.js';

export const initializeMenuEventHandlers = () => {
  const categoryButtons = document.querySelectorAll('.menu-btn');

  categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.getAttribute('data-action');
      renderSelectedCategory(category);
    });
  });
};

const renderSelectedCategory = (category) => {
  if (handleCurrentTab(category)) {
    /* eslint-disable no-console */
    console.info('Menu items are already loaded for this category.');
    /* eslint-enable no-console */
    return;
  }

  if (['cup', 'crust', 'churn', 'snack'].includes(category)) {
    handleCurrentTab(category, true);
    initializeItems(category);
  }
};

const handleCurrentTab = (category, shouldSet = false) => {
  const menuHeader = isElementPresent('category-name');
  if (!menuHeader) return;

  const previousTab = menuHeader.getAttribute('data-action');

  if (shouldSet) {
    menuHeader.setAttribute('data-action', category);
  }

  return previousTab === category;
};
