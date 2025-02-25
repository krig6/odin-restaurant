import {
  createCustomElement,
  createImageElement
} from '../utils/domUtils/elementUtils.js';

import aboutSections from '../data/aboutPageContent.json';

import aboutMainImage from '../../assets/images/carousel-slideshow-images/secondary-image.jpg';

import { fetchAllImages } from '../utils/imageUtils/imageUtils.js';

const fetchSegmentImages = fetchAllImages(
  import.meta.webpackContext('../../assets/images/about-page-images/', {
    recursive: false,
    regExp: /\.(png|jpe?g|gif|svg)$/,
  })
);

export const renderMainAboutImage = () => {
  const mainContentElement = document.getElementById('main-content');

  if (!mainContentElement) {
    console.log('Element with id \'main-content\' not found.');
    return;
  }

  const introBanner = createCustomElement('div', {
    classes: 'intro-banner'
  });

  const introText = createCustomElement('p', {
    classes: 'intro-text',
    text: 'Brewing More Than Coffee, Creating Connections'
  });

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
  introBanner.appendChild(introText);
  mainContentElement.append(introBanner, aboutMainSection);
};

export const populateAboutSections = () => {
  const mainContentElement = document.getElementById('main-content');

  if (!mainContentElement) {
    console.log('Element with id \'main-content\' not found.');
    return;
  }

  const aboutSectionWrapper = createCustomElement('section', {
    classes: 'about-section-wrapper'
  });

  aboutSections.forEach(section => {
    const { id, heading, image, content } = section;

    const aboutSection = createCustomElement('div', {
      classes: `${id}-container about-section`
    });

    const sectionTextContainer = createCustomElement('section', {
      classes: `${id}-text about-section-text`,
    });

    const sectionTitle = createCustomElement('h6', {
      classes: 'about-section-title',
      text: heading
    });

    const imageContainer = createCustomElement('div', {
      classes: 'section-image-container'
    });

    const sectionImage = createImageElement(fetchSegmentImages[image], {
      classes: `${id}-image about-section-image`
    });

    sectionTextContainer.appendChild(sectionTitle);

    if (content && content.length > 0) {
      content.forEach(para => {
        Object.keys(para).forEach(paragraphKey => {
          const paragraphElement = createCustomElement('p', {
            text: para[paragraphKey],
          });
          sectionTextContainer.appendChild(paragraphElement);
        });
      });
    }

    imageContainer.appendChild(sectionImage);
    aboutSection.append(sectionTextContainer, imageContainer);
    aboutSectionWrapper.appendChild(aboutSection);
    mainContentElement.appendChild(aboutSectionWrapper);
  });
};

export const renderMessageSection = () => {
  const mainContentElement = document.getElementById('main-content');

  if (!mainContentElement) {
    console.log('Element with id \'main-content\' not found.');
    return;
  }

  const messageContainer = createCustomElement('section', {
    classes: 'message-container'
  });

  const messageTitle = createCustomElement('h6', {
    classes: 'message-title',
    text: 'A Brew Steeped in Tradition'
  });

  const messageText = createCustomElement('p', {
    classes: 'message-text',
    text: 'Long ago, a humble baker discovered the secret to the perfect balance—where the crisp of a golden crust met the warmth of a rich, comforting brew. They believed that every great conversation, every moment of reflection, and every shared laugh deserved something handcrafted with care. Over time, their passion became a tradition, passed down through generations, until it found its home here at Cup and Crust. Today, we carry on that legacy, serving flavors that tell a story of warmth, craft, and connection—one sip, one bite at a time.'
  });

  messageContainer.append(messageTitle, messageText);
  mainContentElement.appendChild(messageContainer);
};
