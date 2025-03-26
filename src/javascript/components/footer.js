import { createCustomElement } from '../utils/domUtils/elementFactory.js';

import { buildSocialMediaSection } from './socialMediaSection.js';

import footerData from '../data/footerData.json';
import { getValidData } from '../utils/dataUtils/filterData.js';

export const buildFooterStructure = () => {
  const footerElement = document.getElementById('site-footer');
  if (!footerElement) {
    console.error('Element with id "site-footer" not found');
    return;
  }

  const footerContainer = createCustomElement('div', {
    classes: 'footer-wrapper'
  });

  const brandInfoSection = createBrandInfo();
  const quickLinkSection = createQuickNavLinksSection();
  const socialIconsWrapper = buildSocialMediaSection('footer');
  const copyrightSection = createCopyrightElement();

  footerContainer.append(
    brandInfoSection,
    quickLinkSection,
    socialIconsWrapper
  );
  footerElement.append(footerContainer, copyrightSection);
};

const createBrandInfo = () => {
  const brandInfoContainer = createCustomElement('div', {
    classes: 'brand-info-container'
  });

  const brandNameElement = createCustomElement('h3', {
    classes: footerData['brand'].className,
    text: footerData['brand'].name
  });

  const brandSloganElement = createCustomElement('p', {
    classes: footerData['brand'].sloganClassName,
    text: footerData['brand'].slogan
  });

  brandInfoContainer.append(brandNameElement, brandSloganElement);
  return brandInfoContainer;
};

const createQuickNavLinksSection = () => {
  const quickNavLinkContainer = createCustomElement('nav', {
    classes: 'footer-nav'
  });

  const quickLinksHeading = createCustomElement('h3', {
    classes: 'footer-nav-heading',
    text: footerData['quickLinks'].listHeading
  });

  const quickLinksList = createCustomElement('ul', {
    classes: 'footer-nav-list'
  });

  const quickLinkItems = getValidData(
    footerData.quickLinks.links,
    'heading',
    'link',
    'className'
  )
    .map(createQuickLinkItem)
    .filter(Boolean);
  quickLinkItems.forEach((items) => quickLinksList.append(items));

  quickNavLinkContainer.append(quickLinksHeading, quickLinksList);
  return quickNavLinkContainer;
};

const createQuickLinkItem = ({ heading, link, className }) => {
  const listItemElement = createCustomElement('li', {
    classes: 'footer-nav-item'
  });

  const linkElement = createCustomElement('a', {
    classes: className,
    text: heading,
    href: link,
    dataset: { action: heading.toLowerCase() }
  });

  listItemElement.appendChild(linkElement);
  return listItemElement;
};
const createCopyrightElement = () => {
  const currentYear = new Date().getFullYear();

  const footerItemContainer = createCustomElement('div', {
    classes: 'copyright-info'
  });

  const githubLink = createCustomElement('a', {
    dataset: {
      href: footerData.copyright.github.link,
      target: '_blank',
      rel: 'noopener noreferrer'
    }
  });

  const githubIcon = createCustomElement('i', {
    classes: footerData.copyright.github.iconClass
  });

  const copyrightText = createCustomElement('p', {
    text: footerData['copyright'].text.replace('{year}', currentYear),
    classes: footerData['copyright'].textClassName
  });

  githubLink.appendChild(githubIcon);
  copyrightText.appendChild(githubLink);
  footerItemContainer.appendChild(copyrightText);
  return footerItemContainer;
};
