import {
  createCustomElement,
  createImageElement
} from '../domUtils/elementUtils.js';

import { getElement } from '../domUtils/mainContentUtils.js';

export const renderMenuItems = (items) => {
  clearMenuWrapper();

  const mainContentElement = getElement('main-content');
  if (!mainContentElement) return;

  const menuWrapper = createCustomElement('section', {
    classes: 'category-products'
  });


  const grid = createCustomElement('section', {
    classes: 'product-grid'
  });

  items.forEach(item => {
    const article = createCustomElement('article', {
      classes: 'product-card'
    });
    const img = createImageElement(item.src, {
      classes: 'product-image',
      alt: item.alt
    });

    article.appendChild(img);

    const productName = createCustomElement('span', {
      text: item.alt,
      classes: 'product-name'
    });

    article.appendChild(productName);

    const desc = createCustomElement('p', {
      text: item.description,
      classes: 'product-desc'
    });

    article.appendChild(desc);

    const price = createCustomElement('span', {
      text: item.price,
      classes: 'product-price'
    });
    article.appendChild(price);

    grid.appendChild(article);
  });

  menuWrapper.appendChild(grid);
  mainContentElement.appendChild(menuWrapper);
};

const clearMenuWrapper = () => {
  const menu = document.querySelector('.category-products');
  if (menu) {
    menu.remove();
  }
};
