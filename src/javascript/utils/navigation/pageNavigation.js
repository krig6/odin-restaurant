import { renderHomePageContent } from "../../pages/homePage";
import { renderMenuPageContent } from "../../pages/menuPage";
import { smoothScrollToTop } from "./smoothScrollToTop";
import { resetToDefaultNavColors, updateHeaderStickyState } from "./mainNavAppearance";

export const handlePageNavigation = (page) => {
    if (isCurrentPage(page)) {
        console.log(`Already on the ${page} page, no need to reload.`);
        return;
    };

    smoothScrollToTop();

    switch (page) {
        case 'menu':
            renderMenuPageContent();
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

const isCurrentPage = (page) => {
    return location.hash === `#${page}`
}