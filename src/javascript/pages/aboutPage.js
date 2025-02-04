import '../../styles/aboutComponent.css'
import { deleteCarousel } from "../utils/carousel/carouselManager"
import { clearMainContent } from "../utils/domUtils/mainContentUtils";
import { renderMainAboutImage, populateAboutSections, renderMessageSection } from "../components/aboutComponent";
import { applyParallax } from '../utils/scrollEffects/applyParallax';

export const renderAboutPageContent = () => {
    deleteCarousel();
    clearMainContent();
    renderMainAboutImage()
    populateAboutSections()
    renderMessageSection();
    applyParallax();
}