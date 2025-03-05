export const startImageRotation = (imageUrls, rotationInterval) => {
  const imageElements = document.querySelectorAll('.multiple-images');
  const imagesToDisplay = imageUrls.slice(0, -1);

  if (imageElements.length === 0) {
    console.error('No elements found with the class "rotating-images".');
    return;
  }

  if (imageElements.length !== imagesToDisplay.length) {
    console.error('Mismatch between the number of rotating elements and images.');
    return;
  }

  initializeImageElements(imageElements, imagesToDisplay, 0);
  rotateImageElements(imageElements, imagesToDisplay, rotationInterval);
};

const initializeImageElements = (elements, images, currentImageIndex) => {
  elements.forEach((element, index) => {
    element.style.opacity = index === currentImageIndex ? '1' : '0';
    element.style.backgroundImage = `url(${images[index]})`;
  });
};

const rotateImageElements = (elements, images, interval) => {
  let currentImageIndex = 0;
  const updateImageOpacity = () => {
    const nextImageIndex = (currentImageIndex + 1) % images.length;

    elements.forEach((element, index) => {
      element.style.opacity = index === nextImageIndex ? '1' : '0';
      element.style.backgroundImage = `url(${images[index]})`;
    });
    currentImageIndex = nextImageIndex;
  };

  setInterval(updateImageOpacity, interval);
};
