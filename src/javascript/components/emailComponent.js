import { createCustomElement } from '../utils/domUtils/elementUtils.js';

import { createSocialMediaSection } from './socialMediaSection.js';

export const initializeEmailFormSection = () => {
  const contentElement = document.getElementById('main-content');

  if (!contentElement) {
    throw new Error('Element with id \'main-content\' not found.');
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


  const socialMediaIcons = createSocialMediaSection('email');
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
    id: 'email-form',
  });

  formContainer.method = 'post';
  formContainer.action = '#';

  const formFields = [
    { label: 'First name *', id: 'first-name', type: 'input', class: 'input-first-name input', placeholder: 'Cupford', required: true },
    { label: 'Last name', id: 'last-name', type: 'input', class: 'input-last-name input', placeholder: 'Crustington' },
    { label: 'Email *', id: 'email-address', type: 'input', class: 'input-email input', placeholder: 'contact@cupandcrust.com', required: true },
    { label: 'What can we help you with?', id: 'inquiry-input', class: 'inquiry-input input', placeholder: 'Share your thoughts, from the first sip to the last bite!', required: true },
    { label: 'Submit', id: 'submit-button', type: 'submit', class: 'inquiry-submit' },
  ];

  formFields.forEach(field => {
    const { label, id, type, class: classes, placeholder, required } = field;

    let inputElement;

    if (type === 'input') {
      inputElement = createCustomElement('input', { classes, id, type: type, placeholder, required });
    } else if (type === 'submit') {
      inputElement = createCustomElement('button', { classes, id, type: type, text: label });
    } else {
      inputElement = createCustomElement('textarea', { classes, id, placeholder, required });
    }
    const fieldContainer = createFieldContainer(label !== 'Submit' ? label : null, id, inputElement);
    formContainer.appendChild(fieldContainer);
  });
  return formContainer;
};

const createFieldContainer = (labelText, labelFor, inputElement) => {
  const fieldContainer = createCustomElement('div', {
    classes: 'field-container'
  });

  if (labelText) {
    const labelElement = createCustomElement('label', {
      classes: 'input-label',
      htmlFor: labelFor,
      text: labelText
    });
    fieldContainer.appendChild(labelElement);
  }
  fieldContainer.appendChild(inputElement);
  return fieldContainer;
};

