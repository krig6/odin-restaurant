export function fetchAllImages(requireContext) {
    const images = {};

    requireContext.keys().forEach((item) => {
        try {
            const imagePath = requireContext(item);
            const imageName = item.replace('./', '');
            images[imageName] = imagePath.default || imagePath;
        } catch (error) {
            console.error(`Failed to load image ${item}:`, error);
        }
    });

    return images;
}

export function loadImagesIntoCache(imageURLs) {
    if (!Array.isArray(imageURLs)) {
        console.error('Expected an array of image URLs');
        return;
    }

    imageURLs.forEach((url) => {
        const img = new Image();
        img.src = url;
        img.onload = () => console.log(`Image loaded: ${url}`);
        img.onerror = (e) => console.error(`Failed to load image: ${url}`, e);
    });
}

export const prepareCarouselImages = () => {
    const imagesContext = require.context('../../../assets/images/carousel-slideshow-images', false, /\.(png|jpe?g|gif|svg)$/);

    const carouselImages = fetchAllImages(imagesContext);

    const carouselImagesUrls = Array.isArray(carouselImages)
        ? carouselImages
        : Object.values(carouselImages).flat();

    if (!carouselImagesUrls || carouselImagesUrls.length === 0) {
        console.error("No images found for the carousel.");
    }

    loadImagesIntoCache(carouselImagesUrls);

    return carouselImagesUrls;
}

