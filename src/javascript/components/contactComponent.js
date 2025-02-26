import { createCustomElement } from '../utils/domUtils/elementUtils.js';

import { createSocialMediaSection } from './socialMediaSection.js';

export const initializeContactFormSection = () => {
  const contentElement = document.getElementById('main-content');

  if (!contentElement) {
    console.log('Element with id \'main-content\' not found.');
    return;
  }

  const contactFormContainer = createContactFormContainer();
  contentElement.appendChild(contactFormContainer);
};

const createContactFormContainer = () => {
  const container = createCustomElement('div', { classes: 'contact-form-container' });
  const infoSection = createContactInfoSection();
  const formSection = createContactFormSection();

  container.append(infoSection, formSection);

  return container;
};

const createContactInfoSection = () => {
  const infoSectionContainer = createCustomElement('div', {
    classes: 'contact-info-section'
  });


  const socialMediaIcons = createSocialMediaSection();
  const socialMediaIconContainer = createCustomElement('div', {
    classes: 'email-social-media-icons'
  });

  const titleElement = createCustomElement('h2', {
    classes: 'contact-title',
    text: 'Questions? Lets get it brewing!'
  });

  const descriptionElement = createCustomElement('p', {
    classes: 'contact-description',
    text: 'Need to get in touch with us? Reach out to us and let’s stir things up—whether it’s coffee, cakes, or something else brewing in your mind!'
  });

  socialMediaIconContainer.appendChild(socialMediaIcons);
  infoSectionContainer.append(titleElement, descriptionElement, socialMediaIconContainer);

  return infoSectionContainer;
};

const createContactFormSection = () => {
  const formContainer = createCustomElement('form', {
    classes: 'contact-form',
    id: 'contact-form'
  });

  const formFields = [
    { label: 'First name *', id: 'first-name', type: 'input', class: 'input-first-name' },
    { label: 'Last name', id: 'last-name', type: 'input', class: 'input-last-name' },
    { label: 'Email *', id: 'email-address', type: 'input', class: 'input-email' },
    { label: 'What can we help you with?', id: 'inquiry-input', type: 'textarea', class: 'inquiry-input' }
  ];

  formFields.forEach(field => {
    const fieldContainer = createCustomElement('div', {
      classes: 'field-container'
    });
    const labelElement = createCustomElement('label', {
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
