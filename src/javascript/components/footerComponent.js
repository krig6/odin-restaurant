import '../../styles/footerComponent.css';
import { createCustomElement } from "../utils/domUtils/elementUtils";

export const initializeFooterComponent = () => {

    const footerElement = document.getElementById('site-footer');

    if (!footerElement) {
        console.error(`Element with id 'site-footer' not found`);
        return;
    }

    const footerSection = createFooterSection();
    const footerItem = createFooterItem();
    footerElement.append(footerSection, footerItem);
};

const createFooterSection = () => {
    const footerContentContainer = createCustomElement('div', {
        classes: 'footer-content-container',
    });

    const contentFragment = document.createDocumentFragment();
    contentFragment.append(createAboutSection(), createQuickLinksSection(), createSocialMediaSection());
    footerContentContainer.appendChild(contentFragment);

    return footerContentContainer;
};

const createAboutSection = () => {
    const aboutSection = createCustomElement('div', {
        classes: 'footer-about-section footer-content',
    });

    const brandNameElement = createCustomElement('h3', {
        text: 'Cup and Crust',
    });
    const brandSloganElement = createCustomElement('p', {
        text: 'Brews and Bakes in Harmony. Visit us for a delightful experience.',
    });

    aboutSection.append(brandNameElement, brandSloganElement);

    return aboutSection;
};

const createQuickLinksSection = () => {
    const QUICK_LINKS = ['Home', 'Menu', 'Email', 'About'];

    const quickLinksSection = createCustomElement('div', {
        classes: 'footer-quick-links-section footer-content',
    });
    const quickLinksHeading = createCustomElement('h3', {
        text: 'Quick Links',
    });
    const quickLinksList = createCustomElement('ul', {
        classes: 'quick-links-list',
    });

    const quickLinksFragment = document.createDocumentFragment();

    QUICK_LINKS.forEach(link => {
        quickLinksFragment.appendChild(createQuickLinkItem(link));
    });
    quickLinksList.appendChild(quickLinksFragment);

    quickLinksSection.append(quickLinksHeading, quickLinksList);

    return quickLinksSection;
};

const createQuickLinkItem = (linkText) => {
    const listItemElement = createCustomElement('li', {
        classes: 'quick-link-item',
    });

    const linkElement = createCustomElement('a', {
        classes: 'quick-link',
        text: linkText.toUpperCase(),
        href: `#${linkText.toLowerCase()}`,
        dataset: { action: linkText.toLowerCase() },
    });

    listItemElement.appendChild(linkElement);

    return listItemElement;
};

const createSocialMediaSection = () => {
    const socialMediaSection = createCustomElement('div', {
        classes: 'footer-social-media-section footer-content',
    });

    const socialMediaHeading = createCustomElement('h3', {
        text: 'Follow Us',
    });
    const socialMediaIconsContainer = createCustomElement('div', {
        classes: 'social-media-icons-container',
    });
    const socialMediaList = document.createElement('ul');

    const SOCIAL_MEDIA_ICONS = ['bxl-facebook', 'bxl-twitter', 'bxl-instagram-alt', 'bxl-linkedin-square'];

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

const createFooterItem = () => {
    const footerItemContainer = createCustomElement('div', {
        classes: 'footer-item',
    });
    const copyrightText = createCustomElement('p', {
        text: '\u00A9 2024 Cup and Crust. All rights reserved.',
    });

    footerItemContainer.appendChild(copyrightText);

    return footerItemContainer;
};
