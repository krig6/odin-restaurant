export const applyParallax = async () => {
  const { gsap } = await import('gsap');
  const { ScrollTrigger } = await import('gsap/ScrollTrigger.js');

  gsap.registerPlugin(ScrollTrigger);

  const imageElements = document.querySelectorAll('.about-section-image');
  const mainImage = document.querySelector('.hero-image');
  const mainImageContainer = mainImage?.parentElement;

  if (!mainImageContainer) {
    throw new Error('No parent container found.');
  }

  gsap.set(mainImage, {
    scale: 1.2,
    y: '0%'
  });

  gsap.to(mainImage, {
    y: '50%',
    ease: 'none',
    scrollTrigger: {
      trigger: mainImageContainer,
      start: 'top',
      end: 'bottom',
      scrub: true
    }
  });

  imageElements.forEach((image) => {
    const imageContainer = image.parentElement;

    if (!imageContainer) {
      throw new Error('No parent container found.');
    }

    imageContainer.style.overflow = 'hidden';
    imageContainer.style.position = 'relative';

    gsap.set(image, {
      scale: 1.2,
      y: '-50%'
    });

    gsap.to(image, {
      y: '50%',
      ease: 'none',
      scrollTrigger: {
        trigger: imageContainer,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  });
};
