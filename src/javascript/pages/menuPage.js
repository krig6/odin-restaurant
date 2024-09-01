import { deleteCarousel } from "../utils/carousel/carouselManager"
import { clearMainContent } from "../utils/domUtils/mainContentUtils";
import { initializeMenu } from "../components/menuComponent";

export const renderMenuPageContent = () => {
    deleteCarousel();
    clearMainContent();
    initializeMenu();
}

