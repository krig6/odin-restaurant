import { createCustomElement } from '../utils/domUtils/elementUtils.js';

import { createSocialMediaSection } from './socialMediaSection.js';

export const initializeEmailFormSection = () => {
  const contentElement = document.getElementById('main-content');

  if (!contentElement) {
    console.log('Element with id \'main-content\' not found.');
    return;
  }

  const emailFormContainer = createEmailFormContainer();
  contentElement.appendChild(emailFormContainer);
};

const createEmailFormContainer = () => {
  const container = createCustomElement('div', { classes: 'email-form-container' });
  const infoSection = createEmailInfoSection();
  const formSection = createEmailFormSection();

  container.append(infoSection, formSection);

  return container;
};

const createEmailInfoSection = () => {
  const infoSectionContainer = createCustomElement('div', {
    classes: 'email-info-section'
  });


  const socialMediaIcons = createSocialMediaSection();
  const socialMediaIconContainer = createCustomElement('div', {
    classes: 'email-social-media-icons'
  });

  const titleElement = createCustomElement('h2', {
    classes: 'email-message-title',
    text: 'Questions? Lets get it brewing!'
  });

  const descriptionElement = createCustomElement('p', {
    classes: 'email-description',
    text: 'Need to get in touch with us? Reach out to us and let’s stir things up—whether it’s coffee, cakes, or something else brewing in your mind!'
  });

  socialMediaIconContainer.appendChild(socialMediaIcons);
  infoSectionContainer.append(titleElement, descriptionElement, socialMediaIconContainer);

  return infoSectionContainer;
};

const createEmailFormSection = () => {
  const formContainer = createCustomElement('form', {
    classes: 'email-form',
    id: 'email-form'
  });

  const formFields = [
    { label: 'First name *', id: 'first-name', type: 'input', class: 'input-first-name input' },
    { label: 'Last name', id: 'last-name', type: 'input', class: 'input-last-name input' },
    { label: 'Email *', id: 'email-address', type: 'input', class: 'input-email input' },
    { label: 'What can we help you with?', id: 'inquiry-input', type: 'textarea', class: 'inquiry-input input' }
  ];

  formFields.forEach(field => {
    const fieldContainer = createCustomElement('div', {
      classes: 'field-container'
    });

    const labelElement = createCustomElement('label', {
      classes: 'input-label',
      htmlFor: field.id,
      text: field.label
    });

    const inputElement = createCustomElement(field.type, {
      classes: field.class,
      id: field.id
    });


    fieldContainer.append(labelElement, inputElement);
    formContainer.appendChild(fieldContainer);
  });

  return formContainer;
};
