import '../../styles/mainNavigation.css'
import { createCustomElement } from "../utils/elementUtils";

const NAV_ITEMS = ['home', 'menu', 'email', 'about'];

export const initializeMainNavigation = () => {
    const headerElement = document.getElementById('site-header');

    if (!headerElement) {
        console.error(`Element with id 'site-header' not found`);
        return;
    }

    const navigationMenu = createNavigationMenu();
    headerElement.appendChild(navigationMenu);
};

const createNavigationMenu = () => {
    const navElement = createCustomElement('nav', {
        classes: 'main-navigation',
    });

    const ulElement = createCustomElement('ul', {
        classes: 'nav-list',
    });

    const fragment = document.createDocumentFragment();

    NAV_ITEMS.forEach(item => {
        const navItemElement = createNavigationItem(item);
        fragment.appendChild(navItemElement);
    });

    ulElement.appendChild(fragment);
    navElement.appendChild(ulElement);

    return navElement;
};

const createNavigationItem = (item) => {
    const listItemElement = createCustomElement('li', {
        classes: 'nav-item',
    });

    const linkElement = createCustomElement('a', {
        classes: 'nav-link',
        text: item.toUpperCase(),
        href: `#${item}`,
        dataset: { action: item },
    });

    listItemElement.appendChild(linkElement);

    return listItemElement;
};