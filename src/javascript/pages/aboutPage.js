import '../../styles/aboutComponent.css'
import { deleteCarousel } from "../utils/carousel/carouselManager"
import { clearMainContent } from "../utils/domUtils/mainContentUtils";
import { setupAboutMainImage, populateAboutPageSections } from "../utils/about/aboutPageLayout";

export const renderAboutPageContent = () => {
    deleteCarousel();
    clearMainContent();
    setupAboutMainImage()
    populateAboutPageSections()
}