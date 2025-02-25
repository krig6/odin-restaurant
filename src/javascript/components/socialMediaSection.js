import { createCustomElement } from '../utils/domUtils/elementUtils.js';

export const createSocialMediaSection = () => {
  const socialMediaSection = createCustomElement('div', {
    classes: 'social-media-list social-media-content',
  });

  const socialMediaHeading = createCustomElement('h3', {
    text: 'SOCIALS',
  });
  const socialMediaIconsContainer = createCustomElement('nav', {
    classes: 'social-media-icons-container',
  });
  const socialMediaList = document.createElement('ul', {
    classes: 'social-media-list'
  });

  const SOCIAL_MEDIA_ICONS = ['bxl-github', 'bxl-twitter', 'bxl-instagram-alt', 'bxl-linkedin-square'];

  const socialMediaFragment = document.createDocumentFragment();
  SOCIAL_MEDIA_ICONS.forEach(iconClass => socialMediaFragment.appendChild(createSocialMediaItem(iconClass)));
  socialMediaList.appendChild(socialMediaFragment);
  socialMediaIconsContainer.appendChild(socialMediaList);
  socialMediaSection.append(socialMediaHeading, socialMediaIconsContainer);

  return socialMediaSection;
};

const createSocialMediaItem = (iconClass) => {
  const listItemElement = createCustomElement('li', {
    classes: 'social-media-item',
  });
  const linkElement = createCustomElement('a');
  const iconElement = createCustomElement('i', {
    classes: `bx ${iconClass}`,
  });

  linkElement.appendChild(iconElement);
  listItemElement.appendChild(linkElement);

  return listItemElement;
};
