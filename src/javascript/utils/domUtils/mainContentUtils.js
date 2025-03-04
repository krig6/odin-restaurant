import { createCustomElement } from "./elementUtils.js";

export const clearMainContent = (elementID = 'main-content') => {
  const mainContentElement = checkElementById(elementID);
  if (!mainContentElement) {
    console.log(`Element with id '${elementID}' not found.`);
    return;
  }

  while (mainContentElement.firstChild) {
    mainContentElement.removeChild(mainContentElement.firstChild);
  }
  console.log(`Element with id '${elementID}' has been cleared.`);
};

export const isElementPresent = (elementID) => {
  const mainContentElement = checkElementById(elementID);
  if (!mainContentElement) {
    const errorMessageElement = createCustomElement('div', {
      classes: 'missing-content',
      text: `Uh-oh, our page is a little 'half-baked'. Don't worry, we're fixing this!'`
    });
    document.body.appendChild(errorMessageElement);
    return null;
  }

  return mainContentElement;
};

export const checkElementById = (elementID) => {
  return document.getElementById(elementID);
};
