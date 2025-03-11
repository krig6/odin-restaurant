import { getElement } from '../utils/domUtils/mainContentUtils.js';

import {
  createCustomElement,
  createImageElement
} from '../utils/domUtils/elementUtils.js';

import { fetchAllImages } from '../utils/imageUtils/imageUtils.js';

import featuredLinkData from '../data/featuredLinksData.json';

const featuredImages = fetchAllImages(
  import.meta.webpackContext('../../assets/images/featured-links-images', {
    recursive: false,
    regExp: /\.(png|jpe?g|gif|svg)$/
  })
);

export const buildFeaturedLinks = () => {
  const mainContentElement = getElement('main-content');
  if (!mainContentElement) return;

  const featuredLinksSection = createCustomElement('section', { classes: 'featured-links-section' });

  const featuredLinkCards = getValidFeaturedSections().map(createFeaturedLinkCard).filter(Boolean);

  featuredLinkCards.forEach(section => featuredLinksSection.append(section));
  mainContentElement.append(featuredLinksSection);
}

const getValidFeaturedSections = () => {
  return featuredLinkData["featuredLinks"].filter(({ title, summary, image, imageAlt, link }) =>
    title && summary && image && imageAlt && link);
}

const createFeaturedLinkCard = ({ title, summary, image, imageAlt, link }) => {
  const card = createCustomElement('article', { classes: 'featured-link-card' });
  card.dataset.action = link;

  const imageSource = featuredImages[image]

  const img = createImageElement(imageSource, { classes: 'featured-link-image', alt: imageAlt });

  const heading = createCustomElement('h3', { classes: 'featured-link-title', text: title });

  const description = createCustomElement('p', { classes: 'featured-link-summary', text: summary });

  card.append(img, heading, description);
  return card;
};

