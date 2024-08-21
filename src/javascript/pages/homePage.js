
import { initializeCarouselComponent } from '../components/carouselComponent';
import { initializeFeaturedLinks } from '../components/featuredLinksComponent';
import { clearMainContent } from '../utils/domUtils/mainContentUtils'

export const renderHomePageContent = () => {
    clearMainContent();
    initializeCarouselComponent();
    initializeFeaturedLinks();
}