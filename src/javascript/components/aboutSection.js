import {
  createCustomElement,
  createImageElement
} from '../utils/domUtils/elementFactory.js';
import { getElement } from '../utils/domUtils/contentHandler.js';
import { fetchAllImages } from '../utils/imageUtils/imageLoader.js';
import { getValidData } from '../utils/dataUtils/filterData.js';

import aboutSectionData from '../data/aboutPageContent.json';

import baristaImage from '../../assets/images/about-page-images/barista-image.jpg';

const fetchSegmentImages = fetchAllImages(
  import.meta.webpackContext('../../assets/images/about-page-images/', {
    recursive: false,
    regExp: /\.(png|jpe?g|gif|svg)$/
  })
);

export const applyHeroText = () => {
  const mainContentElement = getElement('main-content');
  if (!mainContentElement) return;

  const overlayContainer = createCustomElement('div', {
    classes: 'overlay-container'
  });

  const overlayText = createCustomElement('p', {
    classes: 'overlay-text',
    text: aboutSectionData['overlay'].overlayText
  });

  overlayContainer.appendChild(overlayText);
  mainContentElement.appendChild(overlayContainer);
};

export const createHeroImageSection = () => {
  const mainContentElement = getElement('main-content');
  if (!mainContentElement) return;

  const heroSection = createCustomElement('section', {
    classes: 'hero-image-section'
  });

  const heroImage = createImageElement(baristaImage, {
    classes: 'hero-image'
  });

  heroSection.append(heroImage);
  mainContentElement.append(heroSection);
};

export const buildAboutSection = () => {
  const mainContentElement = getElement('main-content');
  if (!mainContentElement) return;

  const aboutSectionWrapper = createCustomElement('div', {
    classes: 'about-sections-wrapper'
  });

  const validAboutSections = getValidData(
    aboutSectionData.aboutSection,
    'id',
    'title',
    'description',
    'image'
  )
    .map(createAboutSection)
    .filter(Boolean);

  validAboutSections.forEach((section) => aboutSectionWrapper.append(section));
  mainContentElement.append(aboutSectionWrapper);
};

const createAboutSection = ({ id, title, description, image }) => {
  const aboutSection = createCustomElement('div', {
    classes: `${id}-container about-section`
  });

  const aboutTextSection = createAboutTextSection(id, title, description);
  const aboutImageSection = createAboutImageSection(id, image);

  aboutSection.append(aboutTextSection, aboutImageSection);
  return aboutSection;
};

const createAboutTextSection = (id, title, description) => {
  const textContainer = createCustomElement('div', {
    classes: `${id}-text about-text-content`
  });

  const textTitle = createCustomElement('h3', {
    classes: 'about-title',
    text: title
  });

  const textParagraphs = createCustomElement('h3', {
    classes: 'about-paragraphs'
  });

  description?.forEach((paragraph) => {
    Object.values(paragraph).forEach((text) => {
      textParagraphs.appendChild(
        createCustomElement('p', { text, classes: 'about-text-description' })
      );
    });
  });
  textContainer.append(textTitle, textParagraphs);

  return textContainer;
};

const createAboutImageSection = (id, image) => {
  const imageContainer = createCustomElement('div', {
    classes: 'about-image-container'
  });

  const fetchImage = fetchSegmentImages[image];

  const imageElement = createImageElement(fetchImage, {
    classes: `${id}-image about-section-image`
  });

  imageContainer.append(imageElement);
  return imageContainer;
};

export const createBrandStory = () => {
  const mainContentElement = getElement('main-content');
  if (!mainContentElement) return;

  const brandStoryContainer = createCustomElement('section', {
    classes: 'brand-story-container'
  });

  const brandStoryTitle = createCustomElement('h6', {
    classes: 'brand-story-title',
    text: aboutSectionData['brandStory'].brandStoryTitle
  });

  const brandStoryText = createCustomElement('p', {
    classes: 'brand-story-text',
    text: aboutSectionData['brandStory'].brandStoryText
  });

  brandStoryContainer.append(brandStoryTitle, brandStoryText);
  mainContentElement.appendChild(brandStoryContainer);
};
