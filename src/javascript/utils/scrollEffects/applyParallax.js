import gsap from 'gsap';

import ScrollTrigger from 'gsap/ScrollTrigger.js';

gsap.registerPlugin(ScrollTrigger);

export const applyParallax = () => {
  const imageElements = document.querySelectorAll('.about-section-image');
  const mainImage = document.querySelector('.about-main-image');
  const mainImageContainer = mainImage?.parentElement;

  if (!mainImageContainer) {
    console.log('No parent container found.');
    return;
  };

  gsap.set(mainImage, {
    scale: 1.2,
    y: '-50%'
  });

  gsap.to(mainImage, {
    y: '50%',
    ease: 'none',
    scrollTrigger: {
      trigger: mainImageContainer,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  });

  imageElements.forEach((image) => {
    const imageContainer = image.parentElement;

    if (!imageContainer) {
      console.log('No parent container found.');
      return;
    };

    imageContainer.style.overflow = 'hidden';
    imageContainer.style.position = 'relative';

    gsap.set(image, {
      scale: 1.2,
      y: '-45%'
    });

    gsap.to(image, {
      y: '45%',
      ease: 'none',
      scrollTrigger: {
        trigger: imageContainer,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  });
};
