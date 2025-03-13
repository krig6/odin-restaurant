import {
  fetchAllImages,
  loadImagesIntoCache
} from '../imageUtils/imageLoader.js';

import {
  createCustomElement,
  createImageElement
} from '../domUtils/elementFactory.js';
import { getElement } from '../domUtils/contentHandler.js';

import { startImageAnimation } from './carouselImageAnimator.js';

export const populateCarouselImages = () => {
  const carouselImagesUrls = fetchCarouselImages();
  if (carouselImagesUrls.length > 0) {
    createImageGallery(carouselImagesUrls);
    createImageGallery(carouselImagesUrls, 'single-image');
  }
};

const createImageGallery = (images, type = 'multiple') => {
  const targetElementId =
    type === 'multiple' ? 'multiple-image' : 'single-image';
  const targetElement = getElement(targetElementId);
  const multipleImageContainer = createCustomElement('div', {
    classes: `${type}-image-container`
  });

  const singleImageContainer = createCustomElement('div', {
    classes: `${type}-image-container`
  });

  if (!targetElement) return;

  const imagesToDisplay =
    type === 'multiple' ? images.slice(0, -1) : images.slice(-1);
  const imageFragment = document.createDocumentFragment();
  imagesToDisplay.forEach((imageUrl) => {
    const imageElement = createImageElement(imageUrl, {
      classes: type === 'multiple' ? 'multiple-images' : 'single-image',
      alt: type === 'multiple' ? 'Food and Beverages' : 'Outdoor Coffee'
    });
    imageFragment.append(imageElement);
    if (type === 'multiple') {
      multipleImageContainer.append(imageFragment);
      targetElement.append(multipleImageContainer);
    } else {
      singleImageContainer.append(imageFragment);
      targetElement.append(singleImageContainer);
    }
  });

  if (type === 'multiple') {
    startImageAnimation(images, 2000);
  }
};

const fetchCarouselImages = () => {
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
    return [];
  }
  loadImagesIntoCache(carouselImagesUrls);

  return carouselImagesUrls;
};
