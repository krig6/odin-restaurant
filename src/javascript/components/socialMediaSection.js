import { createCustomElement } from '../utils/domUtils/elementFactory.js';

import '../../styles/socialMediaSection.css';

import socialMediaIcons from '../data/socialMediaIcons.json';

export const buildSocialMediaSection = (page = '') => {
  const socialMediaSection = createCustomElement('div', {
    classes: `${page ? `${page}-social-media` : ''}`
  });

  const socialMediaHeading = createCustomElement('h3', {
    text: 'SOCIALS',
    classes: 'social-heading'
  });

  const socialMediaIconsContainer = createCustomElement('nav', {
    classes: 'social-media-icons-container'
  });

  const socialMediaList = createCustomElement('ul', {
    classes: 'social-icon-list'
  });

  const validSocialMediaIcons = getValidSocialMediaIcons()
    .map(createSocialMediaIcons)
    .filter(Boolean);

  validSocialMediaIcons.forEach((icon) => socialMediaList.append(icon));
  socialMediaIconsContainer.appendChild(socialMediaList);
  socialMediaSection.append(socialMediaHeading, socialMediaIconsContainer);
  return socialMediaSection;
};

const createSocialMediaIcons = ({ icon, target }) => {
  const listItemElement = createCustomElement('li', {
    classes: 'social-media-item'
  });

  const linkElement = createCustomElement('a', {
    dataset: {
      href: target,
      target: '_blank',
      rel: 'noopener noreferrer'
    }
  });

  const iconElement = createCustomElement('i', {
    classes: `bx ${icon}`
  });

  linkElement.appendChild(iconElement);
  listItemElement.appendChild(linkElement);
  return listItemElement;
};

const getValidSocialMediaIcons = () => {
  return socialMediaIcons.filter(({ icon, target }) => icon && target);
};
