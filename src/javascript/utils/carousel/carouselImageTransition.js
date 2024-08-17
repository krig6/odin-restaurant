export const startImageRotation = (images, interval) => {
    const rotatingElements = document.querySelectorAll('.rotating-images');
    const imagesToRotate = images.slice(0, -1);

    if (rotatingElements.length === 0) {
        console.error('No elements found with the class "rotating-images".');
        return;
    }

    if (rotatingElements.length !== imagesToRotate.length) {
        console.error('Mismatch between the number of rotating elements and images.');
        return;
    }

    initializeImages(rotatingElements, imagesToRotate, 0);
    transitionImages(rotatingElements, imagesToRotate, interval);
};

const initializeImages = (elements, images, currentIndex) => {
    elements.forEach((element, index) => {
        element.style.opacity = index === currentIndex ? '1' : '0';
        element.style.backgroundImage = `url(${images[index]})`;
    });
};

const transitionImages = (elements, images, interval) => {
    let currentIndex = 0;

    const updateImageStates = () => {
        const nextIndex = (currentIndex + 1) % images.length;

        elements.forEach((element, index) => {
            element.style.opacity = index === nextIndex ? '1' : '0';
            element.style.backgroundImage = `url(${images[index]})`;
        });

        currentIndex = nextIndex;
    };

    setInterval(updateImageStates, interval);
};
