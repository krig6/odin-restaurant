import { createCustomElement } from "./elementFactory.js";

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

export const getElement = (elementID) => {
  const mainContentElement = checkElementById(elementID);

  if (!mainContentElement) {
    document.body.appendChild(createErrorMessage());
    return null;
  }
  return mainContentElement;
};

const createErrorMessage = () => {
  const errorMessageElement = createCustomElement('div', {
    classes: 'missing-content',
    text: `Uh-oh, our page is a little 'half-baked'. Don't worry, we're fixing this!'`
  });

  return errorMessageElement;
}

export const checkElementById = (elementID) => {
  return document.getElementById(elementID);
};
