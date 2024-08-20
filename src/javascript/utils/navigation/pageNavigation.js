import { renderHomePageContent } from "../../pages/homePage";
import { smoothScrollToTop } from "./smoothScrollToTop";
import { resetToDefaultNavColors, updateHeaderStickyState } from "./mainNavAppearance";

export const handlePageNavigation = (page) => {
    smoothScrollToTop();

    switch (page) {
        case 'menu':
            initializeMenuPage();
            break;
        case 'email':
            initializeContactPage();
            break;
        case 'about':
            initializeAboutPage();
            break;
        case 'home':
        default:
            renderHomePageContent();
            break;
    }

    resetToDefaultNavColors();
    updateHeaderStickyState(page);
    setPageHash(page);

    setActiveLink(page, '#site-header .nav-link');
    setActiveLink(page, '#site-footer .quick-link');
};

const setActiveLink = (page, linkSelector) => {
    const links = document.querySelectorAll(linkSelector);
    links.forEach(link => {
        link.classList.toggle('active', link.getAttribute('data-action') === page);
    });
};

const setPageHash = (page) => {
    if (location.hash !== `#${page}`) {
        location.hash = page;
    }
};
