export function loadAllImages(requireContext) {
    let images = {};
    requireContext.keys().forEach((item) => {
        images[item.replace('./', '')] = requireContext(item).default;
    });

    return images;
}
