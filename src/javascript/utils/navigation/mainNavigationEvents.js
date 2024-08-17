import { handlePageNavigation } from "./pageNavigation";

export const initializeMainNavEventHandlers = () => {
    const headerNavLinks = document.querySelectorAll('#site-header .nav-link');
    headerNavLinks.forEach(link => {
        link.addEventListener('click', handleNavLinkClick);
    });
};

const handleNavLinkClick = (event) => {
    event.preventDefault();
    const targetPage = event.currentTarget.getAttribute('data-action');
    handlePageNavigation(targetPage);
    history.pushState(null, null, `#${targetPage}`);
};

