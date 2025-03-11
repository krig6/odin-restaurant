import { createCustomElement } from '../utils/domUtils/elementUtils.js';

import '../../styles/socialMediaSection.css';


const SOCIAL_MEDIA_ICONS = ['bxl-github', 'bxl-twitter', 'bxl-instagram-alt', 'bxl-linkedin-square'];

export const buildSocialMediaSection = (page = '') => {
  const socialMediaSection = createCustomElement('div', {
    classes: `${page ? `${page}-social-media-list` : ''}`
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

  const socialMediaIcons = SOCIAL_MEDIA_ICONS.map(createSocialMediaIcons);
  socialMediaIcons.forEach(icon => socialMediaList.append(icon));
  socialMediaIconsContainer.appendChild(socialMediaList);
  socialMediaSection.append(socialMediaHeading, socialMediaIconsContainer);

  return socialMediaSection;
};

const createSocialMediaIcons = (iconClass) => {
  const listItemElement = createCustomElement('li', {
    classes: 'social-media-item'
  });

  const linkElement = createCustomElement('a');
  const iconElement = createCustomElement('i', {
    classes: `bx ${iconClass} `
  });

  linkElement.appendChild(iconElement);
  listItemElement.appendChild(linkElement);

  return listItemElement;
};
