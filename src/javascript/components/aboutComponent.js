import {
  createCustomElement,
  createImageElement
} from '../utils/domUtils/elementUtils.js';

import aboutSections from '../data/aboutPageContent.json';

import aboutMainImage from '../../assets/images/carousel-slideshow-images/secondary-image.jpg';

import { fetchAllImages } from '../utils/imageUtils/imageUtils.js';

import { isElementPresent } from '../utils/domUtils/mainContentUtils.js';

const fetchSegmentImages = fetchAllImages(
  import.meta.webpackContext('../../assets/images/about-page-images/', {
    recursive: false,
    regExp: /\.(png|jpe?g|gif|svg)$/
  })
);

export const createBanner = () => {
  const mainContentElement = isElementPresent('main-content');

  if (!mainContentElement) return;

  const introBanner = createCustomElement('div', {
    classes: 'intro-banner'
  });

  const introText = createCustomElement('p', {
    classes: 'intro-text',
    text: 'Brewing More Than Coffee, Creating Connections'
  });

  introBanner.appendChild(introText);
  mainContentElement.appendChild(introBanner);
};

export const renderMainAboutImage = () => {
  const mainContentElement = isElementPresent('main-content');

  if (!mainContentElement) return;

  const aboutMainSection = createCustomElement('section', {
    classes: 'about-main-section'
  });

  const imageWrapper = createCustomElement('section', {
    classes: 'about-main-image-wrapper'
  });

  const mainImage = createImageElement(aboutMainImage, {
    classes: 'about-main-image'
  });

  imageWrapper.appendChild(mainImage);
  aboutMainSection.appendChild(imageWrapper);
  mainContentElement.appendChild(aboutMainSection);
};

export const populateAboutSections = () => {
  const mainContentElement = isElementPresent('main-content');

  if (!mainContentElement) return;

  const aboutSectionWrapper = createCustomElement('section', {
    classes: 'about-section-wrapper'
  });

  const aboutSectionElements = aboutSections.map(({ id, heading, image, content }) => {
    if (!id || !heading || !image || !content) {
      console.log('Missing data!');
      return null;
    }

    const aboutSection = createCustomElement('div', {
      classes: `${id}-container about-section`
    });

    const sectionTextContainer = createCustomElement('section', {
      classes: `${id}-text about-section-text`
    });

    const sectionTitle = createCustomElement('h6', {
      classes: 'about-section-title',
      text: heading
    });

    sectionTextContainer.appendChild(sectionTitle);

    content?.forEach(para => {
      if (Object.values(para).length === 0) {
        console.log('Empty content for this section!');
      }
      Object.values(para).forEach(text => {
        sectionTextContainer.appendChild(createCustomElement('p', { text }));
      })
    });

    const imageContainer = createCustomElement('div', {
      classes: 'section-image-container'
    });

    const sectionImagePath = fetchSegmentImages[image];

    if (!sectionImagePath) {
      console.log('Missing image date!');
    }

    const sectionImage = createImageElement(sectionImagePath, {
      classes: `${id}-image about-section-image`
    });

    imageContainer.appendChild(sectionImage);
    aboutSection.append(sectionTextContainer, imageContainer);
    return aboutSection;
  });

  aboutSectionElements.forEach(section => aboutSectionWrapper.appendChild(section));
  mainContentElement.appendChild(aboutSectionWrapper);
};

export const renderMessageSection = () => {
  const mainContentElement = isElementPresent('main-content');

  if (!mainContentElement) return;

  const messageContainer = createCustomElement('section', {
    classes: 'about-message-container'
  });

  const messageTitle = createCustomElement('h6', {
    classes: 'about-message-title',
    text: 'A Brew Steeped in Tradition'
  });

  const messageText = createCustomElement('p', {
    classes: 'about-message-text',
    text: 'Long ago, a humble baker discovered the secret to the perfect balance—where the crisp of a golden crust met the warmth of a rich, comforting brew. They believed that every great conversation, every moment of reflection, and every shared laugh deserved something handcrafted with care. Over time, their passion became a tradition, passed down through generations, until it found its home here at Cup and Crust. Today, we carry on that legacy, serving flavors that tell a story of warmth, craft, and connection—one sip, one bite at a time.'
  });

  messageContainer.append(messageTitle, messageText);
  mainContentElement.appendChild(messageContainer);
};
