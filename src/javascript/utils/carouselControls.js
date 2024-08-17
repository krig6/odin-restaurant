import { toggleMainNavColors } from "./mainNavAppearance";

export const initializeCarouselEventHandlers = () => {
    const carouselButtons = document.querySelectorAll('[data-carousel-btn]');

    carouselButtons.forEach(button => {
        button.addEventListener('click', () => {
            toggleCarouselButtonColors();
            removeCarouselButtonFocus();
            toggleMainNavColors();
            const offset = button.dataset.carouselBtn === "next" ? 1 : -1;
            const slides = button.closest('[data-carousel]').querySelector('[data-slides]')

            const activeSlide = slides.querySelector('[data-current-status="active"]');
            let newIndex = [...slides.children].indexOf(activeSlide) + offset;

            if (newIndex < 0) newIndex = slides.children.length - 1;
            if (newIndex >= slides.children.length) newIndex = 0;

            slides.children[newIndex].dataset.currentStatus = 'active';
            delete activeSlide.dataset.currentStatus;
        })
    })
}

const toggleCarouselButtonColors = () => {
    const carouselButtons = document.querySelectorAll('#hero-carousel .carousel-btn');
    carouselButtons.forEach(button => {
        button.classList.toggle('change-color');
    });
}

const removeCarouselButtonFocus = () => {
    const carouselButtons = document.querySelectorAll('#hero-carousel .carousel-btn');
    carouselButtons.forEach(button => {
        button.blur();
    });
}
