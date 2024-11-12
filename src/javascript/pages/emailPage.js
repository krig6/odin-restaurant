
import { deleteCarousel } from "../utils/carousel/carouselManager";
import { clearMainContent } from "../utils/domUtils/mainContentUtils";
import { initializeContactFormSection } from "../utils/contact/contactForm";

export const renderEmailPageContent = () => {
    deleteCarousel();
    clearMainContent();
    initializeContactFormSection();
}