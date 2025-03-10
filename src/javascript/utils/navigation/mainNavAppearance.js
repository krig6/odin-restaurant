export const toggleMainNavColors = () => {
  const headerNavLinks = document.querySelectorAll('#site-header .nav-link');
  headerNavLinks.forEach(link => {
    link.classList.toggle('change-color');
  });
};

export const resetToDefaultNavColors = (page) => {
  const headerNavLinks = document.querySelectorAll('#site-header .nav-link');
  const hasChangeColor = Array.from(headerNavLinks).some(link => link.classList.contains('change-color')
  );

  if (page !== 'about') {
    headerNavLinks.forEach(link => {
      link.classList.remove('change-color');
    });
  } else {
    if (!hasChangeColor) {
      toggleMainNavColors();
    }
  }

};

export const updateHeaderStickyState = (page) => {
  const shouldStick = page !== 'home' && page !== 'about';
  setHeaderSticky(shouldStick);
};

const setHeaderSticky = (shouldBeSticky) => {
  const headerElement = document.getElementById('site-header');
  headerElement.classList.toggle('sticky', shouldBeSticky);
};
