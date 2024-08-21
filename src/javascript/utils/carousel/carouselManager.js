import { createCustomElement } from "../domUtils/elementUtils";

export const deleteCarousel = () => {
    if (isCarouselPresent()) {
        const carouselElement = document.getElementById('hero-carousel');

        if (carouselElement) {
            carouselElement.remove();
            console.log('Carousel deleted successfully.');
        } else {
            console.error('Carousel element not found in the document.');
        }
    } else {
        console.log('No carousel to delete.');
    }
};

export const createCarousel = () => {
    const carouselElement = document.getElementById('hero-carousel');
    if (carouselElement) {
        console.log('Carousel already exists.');
        return;
    }

    const newCarouselElement = createCustomElement('section', {
        id: 'hero-carousel',
        classes: 'carousel',
        dataset: { carousel: '' }
    });

    const contentElement = document.getElementById('main-content');
    document.body.insertBefore(newCarouselElement, contentElement);
    console.log('Carousel created successfully.');
};

export const isCarouselPresent = () => {
    const carouselElement = document.getElementById('hero-carousel');

    return !!carouselElement;
};

