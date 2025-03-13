import { createCustomElement } from '../utils/domUtils/elementFactory.js';
import { getElement } from '../utils/domUtils/contentHandler.js';

import emailFormData from '../data/emailForm.json';

import { buildSocialMediaSection } from './socialMediaSection.js';

export const buildEmailSection = () => {
  const mainContentElement = getElement('main-content');
  if (!mainContentElement) return;

  const emailSection = createCustomElement('div', {
    classes: 'email-section-container'
  });

  const infoBlock = createInfoBlock();
  const formBlock = createFormBlock();

  emailSection.append(infoBlock, formBlock);
  mainContentElement.append(emailSection);
};

const createInfoBlock = () => {
  const infoContainer = createCustomElement('div', {
    classes: 'info-section'
  });

  const infoHeading = createCustomElement('h2', {
    classes: 'info-heading',
    text: emailFormData['infoBlock'].infoHeading
  });

  const infoText = createCustomElement('p', {
    classes: 'info-text',
    text: emailFormData['infoBlock'].infoText
  });

  const socialIconsWrapper = buildSocialMediaSection('email');

  infoContainer.append(infoHeading, infoText, socialIconsWrapper);
  return infoContainer;
};

const createFormBlock = () => {
  const form = createCustomElement('form', {
    classes: 'contact-form',
    id: 'contact-form'
  });

  form.method = 'post';
  form.action = '#';

  const formFields = getFormFields().map(createInputField).filter(Boolean);
  const submitButton = createSubmitButton();

  formFields.forEach((field) => form.append(field));
  form.append(submitButton);
  return form;
};

const getFormFields = () => {
  return emailFormData['formFields'].filter(
    ({ labelText, id, type, className, placeholder }) =>
      labelText && id && type && className && placeholder
  );
};

const createInputField = ({
  labelText,
  id,
  type,
  className,
  placeholder,
  required
}) => {
  const inputFieldWrapper = createCustomElement('div', {
    classes: 'form-field'
  });

  const label = createCustomElement('label', {
    classes: 'input-label',
    htmlFor: id,
    text: labelText
  });

  let inputElement;

  if (type === 'input') {
    inputElement = createCustomElement(type, {
      id,
      classes: className,
      placeholder,
      required,
      type
    });
  } else {
    inputElement = createCustomElement(type, {
      id,
      classes: className,
      placeholder,
      required,
      type
    });
  }

  inputFieldWrapper.append(label, inputElement);
  return inputFieldWrapper;
};

const createSubmitButton = () => {
  const buttonWrapper = createCustomElement('div', {
    classes: 'submit-button-container'
  });

  const submitButton = createCustomElement('button', {
    id: emailFormData['submitButton'].id,
    classes: emailFormData['submitButton'].className,
    type: emailFormData['submitButton'].type,
    text: emailFormData['submitButton'].buttonText
  });

  submitButton.addEventListener('click', (event) => {
    event.preventDefault();
  });

  buttonWrapper.append(submitButton);
  return buttonWrapper;
};
