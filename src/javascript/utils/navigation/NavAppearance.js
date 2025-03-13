import { getElement } from '../domUtils/contentHandler.js';

export const toggleMainNavColors = () => {
  const header = getElement('site-header');
  header.classList.toggle('change-color');
};

export const resetToDefaultNavColors = (page) => {
  const header = getElement('site-header');
  const hasChangeColor = header.classList.contains('change-color');

  if (page !== 'about') {
    header.classList.remove('change-color');
  }
  else {
    if (!hasChangeColor) {
      toggleMainNavColors();
    }
  }
};

export const updateHeaderStickyState = (page) => {
  const shouldStick = page !== 'home' && page !== 'about';
  setHeaderSticky(shouldStick);
};

const setHeaderSticky = (shouldBeSticky) => {
  const headerElement = document.getElementById('site-header');
  headerElement.classList.toggle('sticky', shouldBeSticky);
};

