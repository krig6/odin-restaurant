import { createCustomElement } from '../utils/domUtils/elementFactory.js';
import { getElement } from '../utils/domUtils/contentHandler.js';

import { initializeNavEventListeners } from '../utils/navigation/navEventListeners.js';

import svgData from '../data/svgPaths.json';

const NAV_LINKS = ['home', 'menu', 'email', 'about'];

export const buildMainNavigation = () => {
  const headerElement = getElement('site-header');
  if (!headerElement) return;

  const navigation = createNavigation();
  const brandLogo = createBrandLogo();
  const navUtilities = createNavigationUtilities();
  headerElement.append(brandLogo, navigation, navUtilities);
  initializeNavEventListeners();
};

const createNavigation = () => {
  const nav = createCustomElement('nav', {
    classes: 'main-navigation'
  });

  const navList = createCustomElement('ul', {
    classes: 'nav-list'
  });

  const navItems = NAV_LINKS.map(createNavItem);
  navItems.forEach((item) => navList.append(item));
  nav.append(navList);

  return nav;
};

const createNavItem = (linkText) => {
  const listItem = createCustomElement('li', {
    classes: 'nav-item'
  });

  const link = createCustomElement('a', {
    classes: 'nav-link',
    text: linkText.toUpperCase(),
    href: `#${linkText}`,
    dataset: { action: linkText }
  });

  listItem.appendChild(link);
  return listItem;
};

const createBrandLogo = () => {
  const logoWrapper = createCustomElement('div', {
    classes: 'logo-wrapper'
  });

  const logoLink = createCustomElement('a', {
    html: svgData['svgIcons'].logo,
    classes: 'logo-link',
    dataset: {
      href: 'https://github.com/krig6/odin-restaurant',
      target: '_blank',
      rel: 'noopener noreferrer'
    }
  });

  logoWrapper.append(logoLink);
  return logoWrapper;
};

const createNavigationUtilities = () => {
  const utilitiesWrapper = createCustomElement('div', {
    classes: 'utility-wrapper'
  });

  const helpIcon = createCustomElement('span', {
    classes: 'utility-icon help-icon',
    html: svgData['svgIcons'].helpIcon
  });

  const languageIcon = createCustomElement('span', {
    classes: 'utility-icon language-icon',
    html: svgData['svgIcons'].languageIcon
  });

  const profileIcon = createCustomElement('span', {
    classes: 'utility-icon profile-icon',
    html: svgData['svgIcons'].profileIcon
  });

  utilitiesWrapper.append(helpIcon, languageIcon, profileIcon);
  return utilitiesWrapper;
};
