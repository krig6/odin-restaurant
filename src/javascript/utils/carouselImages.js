import { createImageElement } from "./elementUtils";
import { prepareCarouselImages } from "./imageUtils";


export const setupCarouselImages = () => {
    const carouselImagesUrls = prepareCarouselImages();

    if (carouselImagesUrls.length > 0) {
        populateImageGallery(carouselImagesUrls);
        populateSingleImage(carouselImagesUrls);
    }

}

const populateImageGallery = (images) => {
    const imageGalleryElement = document.getElementById('image-gallery');

    if (!imageGalleryElement) {
        console.error("Element with id 'image-gallery' not found.");
        return;
    }

    const fragment = document.createDocumentFragment();
    images.slice(0, -1).forEach(imageUrl => {
        const img = createImageElement(imageUrl, {
            classes: 'rotating-images',
            alt: 'Food and Beverages'
        });
        fragment.appendChild(img);
    });

    imageGalleryElement.appendChild(fragment);
}


const populateSingleImage = (images) => {
    const singleImageElement = document.getElementById('single-image');

    if (!singleImageElement) {
        console.error("Element with id 'single-image' not found.");
        return;
    }

    images.slice(-1).forEach(imageUrl => {
        const img = createImageElement(imageUrl, {
            classes: 'single-image',
            alt: 'Barista'
        });
        singleImageElement.appendChild(img)
    });
}


