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
    img.onerror = (e) => console.error(`Failed to load image: ${url}`, e);
  });
}
