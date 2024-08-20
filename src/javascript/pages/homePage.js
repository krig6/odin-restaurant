
import { initializeCarouselComponent } from '../components/carouselComponent';
import { initializeFeaturedLinks } from '../components/featuredLinksComponent';
import { clearMainContent } from '../utils/domUtils/clearMainContent'

export const renderHomePageContent = () => {
    clearMainContent();
    initializeCarouselComponent();
    initializeFeaturedLinks();
}