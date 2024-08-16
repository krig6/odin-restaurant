import { createCustomElement } from './elementUtils';

export const deleteCarousel = () => {
    const carouselElement = document.getElementById('hero-carousel');
    if (!carouselElement) {
        console.error('Element with id "hero-carousel" not found.');
        return;
    }
    carouselElement.remove();
    console.log('Carousel deleted successfully.');
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
