import { initializeMenuEventHandlers } from '../menu/menuControls.js';

import { createCustomElement } from '../domUtils/elementUtils.js';

const CATEGORY_LINKS = ['cup', 'crust', 'churn', 'snack'];

export const setupMenuHeader = () => {
  const contentElement = document.getElementById('main-content');
  const menuHeader = createCustomElement('div', {
    id: 'category-name',
    classes: 'category-name',
    dataset: { action: 'cup' }
  });
  const nav = createCustomElement('nav', { classes: 'category-links' });
  const ul = createCustomElement('ul', { classes: 'category' });

  CATEGORY_LINKS.forEach(item => ul.appendChild(createCategoryButtons(item)));
  nav.appendChild(ul);
  menuHeader.appendChild(nav);
  contentElement.appendChild(menuHeader);

  initializeMenuEventHandlers();
};

const createCategoryButtons = (btnClass) => {
  const li = createCustomElement('li');
  const button = createCustomElement('button', {
    classes: 'menu-btn',
    dataset: { action: btnClass }
  });
  button.textContent = btnClass.charAt(0).toUpperCase() + btnClass.slice(1);
  li.appendChild(button);

  return li;
};
