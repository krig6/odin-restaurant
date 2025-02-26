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
    console.log('Menu items are already loaded for this category.');
    return;
  }

  if (['cup', 'crust', 'churn', 'snack'].includes(category)) {
    handleCurrentTab(category, true);
    initializeItems(category);
  }
};

const handleCurrentTab = (category, shouldSet = false) => {
  const menuHeader = document.getElementById('category-name');
  if (!menuHeader) {
    console.log('Element with id \'category-name\' not found.');
    return false;
  }

  const previousTab = menuHeader.getAttribute('data-action');

  if (shouldSet) {
    menuHeader.setAttribute('data-action', category);
  }

  return previousTab === category;
};
