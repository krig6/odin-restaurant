import "../../styles/contactComponent.css"
import { deleteCarousel } from "../utils/carousel/carouselManager";
import { clearMainContent } from "../utils/domUtils/mainContentUtils";
import { initializeContactFormSection } from "../components/contactComponent";
import { initializeFormValidation } from "../utils/formValidation/validateFields";

export const renderEmailPageContent = () => {
    deleteCarousel();
    clearMainContent();
    initializeContactFormSection();
    initializeFormValidation();
}