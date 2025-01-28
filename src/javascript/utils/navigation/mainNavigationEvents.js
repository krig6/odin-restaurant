import { handlePageNavigation } from "./pageNavigation";

export const initializeNavEventHandlers = () => {
    const headerNavLinks = document.querySelectorAll('#site-header .nav-link');
    const featuredNavlinks = document.querySelectorAll('.featured-link-card');

    if (headerNavLinks) {
        headerNavLinks.forEach(link => {
            link.addEventListener('click', handleNavLinkClick);
        });
    }

    if (featuredNavlinks) {
        featuredNavlinks.forEach(link => {
            link.addEventListener('click', handleNavLinkClick)
        })
    }

}

const handleNavLinkClick = (event) => {
    event.preventDefault();
    const targetPage = event.currentTarget.getAttribute('data-action');
    handlePageNavigation(targetPage);
    history.pushState(null, null, `#${targetPage}`);
};

