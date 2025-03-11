import {
  createCustomElement,
  createImageElement
} from '../domUtils/elementUtils.js';

import { getElement } from '../domUtils/mainContentUtils.js';

export const buildMenuGrid = (items) => {
  removeExistingMenuGrid();

  const mainContentElement = getElement('main-content');
  if (!mainContentElement) return;

  const categorySelection = createCustomElement('section', {
    classes: 'category-products'
  });

  const productGrid = createCustomElement('section', {
    classes: 'product-grid'
  });

  const productItems = items.map(createProductCard);

  productItems.forEach(item => productGrid.append(item))

  categorySelection.appendChild(productGrid);
  mainContentElement.appendChild(categorySelection);
};

const createProductCard = (item) => {
  const article = createCustomElement('article', {
    classes: 'product-card'
  });

  const img = createImageElement(item.image, {
    classes: 'product-image',
    alt: item.imageAlt
  });

  const productName = createCustomElement('span', {
    text: item.imageAlt,
    classes: 'product-name'
  });

  const desc = createCustomElement('p', {
    text: item.description,
    classes: 'product-desc'
  });

  const price = createCustomElement('span', {
    text: item.price,
    classes: 'product-price'
  });

  article.append(img, productName, desc, price);
  return article;
}

const removeExistingMenuGrid = () => {
  const menu = document.querySelector('.category-products');
  if (menu) {
    menu.remove();
  }
};

