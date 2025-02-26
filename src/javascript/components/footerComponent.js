import '../../styles/footerComponent.css';

import { createCustomElement } from '../utils/domUtils/elementUtils.js';

import { createSocialMediaSection } from './socialMediaSection.js';

export const initializeFooterComponent = () => {

  const footerElement = document.getElementById('site-footer');

  if (!footerElement) {
    console.error('Element with id \'site-footer\' not found');
    return;
  }

  const footerSection = createFooterSection();
  const footerItem = createCopyrightElement();
  footerElement.append(footerSection, footerItem);
};

const createFooterSection = () => {
  const footerContentContainer = createCustomElement('div', {
    classes: 'footer-content-container'
  });

  const contentFragment = document.createDocumentFragment();
  contentFragment.append(createAboutSection(), createQuickLinksSection(), createSocialMediaSection());
  footerContentContainer.appendChild(contentFragment);

  return footerContentContainer;
};

const createAboutSection = () => {
  const aboutSection = createCustomElement('div', {
    classes: 'footer-about-section'
  });

  const brandNameElement = createCustomElement('h3', {
    text: 'CUP AND CRUST'
  });
  const brandSloganElement = createCustomElement('p', {
    text: 'Brews and Bakes in Harmony'
  });

  aboutSection.append(brandNameElement, brandSloganElement);

  return aboutSection;
};

const createQuickLinksSection = () => {
  const QUICK_LINKS = ['Home', 'Menu', 'Email', 'About'];

  const quickLinskNav = createCustomElement('nav', {
    classes: 'quick-link-nav'
  });
  const quickLinksHeading = createCustomElement('h3', {
    text: 'EXPLORE'
  });
  const quickLinksList = createCustomElement('ul', {
    classes: 'quick-links-list'
  });

  QUICK_LINKS.forEach(link => {
    const quickLinkItem = createQuickLinkItem(link);
    quickLinksList.appendChild(quickLinkItem);
    quickLinskNav.append(quickLinksHeading, quickLinksList);
  });

  return quickLinskNav;
};

const createQuickLinkItem = (linkText) => {
  const listItemElement = createCustomElement('li', {
    classes: 'quick-link-item'
  });

  const linkElement = createCustomElement('a', {
    classes: 'quick-link',
    text: linkText,
    href: `#${linkText.toLowerCase()}`,
    dataset: { action: linkText.toLowerCase() }
  });

  listItemElement.appendChild(linkElement);

  return listItemElement;
};

const createCopyrightElement = () => {
  const currentYear = new Date().getFullYear();

  const githubLink = createCustomElement('a', {
    dataset: {
      href: 'https://github.com/krig6',
      target: '_blank',
      rel: 'noopener noreferrer'
    }
  });

  const githubIcon = createCustomElement('i', {
    classes: 'bx bxl-github'
  });

  const footerItemContainer = createCustomElement('div', {
    classes: 'copyright-element'
  });

  const copyrightText = createCustomElement('p', {
    text: `© ${currentYear} Cup and Crust | Design and built by ej`
  });

  githubLink.appendChild(githubIcon);
  copyrightText.appendChild(githubLink);
  footerItemContainer.appendChild(copyrightText);

  return footerItemContainer;
};
