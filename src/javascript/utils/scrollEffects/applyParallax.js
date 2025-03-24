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

  const mm = gsap.matchMedia();

  // Main image parallax effect (applies to all screen sizes)
  gsap.set(mainImage, { scale: 1.2, y: '0%' });

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

  mm.add('(max-width:600px)', () => {
    imageElements.forEach((image) => {
      const imageContainer = image.parentElement;
      if (!imageContainer) throw new Error('No parent container found.');

      imageContainer.style.overflow = 'hidden';
      imageContainer.style.position = 'relative';

      gsap.set(image, { scale: 1.3, y: '-26%' });

      gsap.to(image, {
        y: '30%',
        ease: 'none',
        scrollTrigger: {
          trigger: imageContainer,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  });

  mm.add('(min-width: 601px) and (max-width: 768px)', () => {
    imageElements.forEach((image) => {
      const imageContainer = image.parentElement;
      if (!imageContainer) throw new Error('No parent container found.');

      imageContainer.style.overflow = 'hidden';
      imageContainer.style.position = 'relative';

      gsap.set(image, { scale: 1.25, y: '-30%' });

      gsap.to(image, {
        y: '30%',
        ease: 'none',
        scrollTrigger: {
          trigger: imageContainer,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  });

  mm.add('(min-width: 769px)', () => {
    imageElements.forEach((image) => {
      const imageContainer = image.parentElement;
      if (!imageContainer) throw new Error('No parent container found.');

      imageContainer.style.overflow = 'hidden';
      imageContainer.style.position = 'relative';

      gsap.set(image, { scale: 1.3, y: '-50%' });

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

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  });
};
