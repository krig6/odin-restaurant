import '../../../styles/carouselImageTransition.css';

import { createImageElement } from '../domUtils/elementUtils.js';

import { startImageRotation } from './carouselImageTransition.js';

import {
  fetchAllImages,
  loadImagesIntoCache
} from '../imageUtils/imageUtils.js';

export const setupCarouselImages = () => {
  const carouselImagesUrls = prepareCarouselImages();
  if (carouselImagesUrls.length > 0) {
    populateImageGallery(carouselImagesUrls);
    populateSingleImage(carouselImagesUrls);
  }
};

const populateImageGallery = (images) => {
  const imageGalleryElement = document.getElementById('image-gallery');

  if (!imageGalleryElement) {
    console.error('Element with id \'image-gallery\' not found.');
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
  startImageRotation(images, 2000);
};

const populateSingleImage = (images) => {
  const singleImageElement = document.getElementById('single-image');

  if (!singleImageElement) {
    console.error('Element with id \'single-image\' not found.');
    return;
  }

  images.slice(-1).forEach(imageUrl => {
    const img = createImageElement(imageUrl, {
      classes: 'single-image',
      alt: 'Barista'
    });
    singleImageElement.appendChild(img);
  });
};

const prepareCarouselImages = () => {
  const imagesContext = import.meta.webpackContext(
    '../../../assets/images/carousel-slideshow-images',
    {
      recursive: false,
      regExp: /\.(png|jpe?g|gif|svg)$/
    }
  );

  const carouselImages = fetchAllImages(imagesContext);

  const carouselImagesUrls = Array.isArray(carouselImages)
    ? carouselImages
    : Object.values(carouselImages).flat();

  if (!carouselImagesUrls || carouselImagesUrls.length === 0) {
    console.error('No images found for the carousel.');
  }

  loadImagesIntoCache(carouselImagesUrls);

  return carouselImagesUrls;
};
