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

