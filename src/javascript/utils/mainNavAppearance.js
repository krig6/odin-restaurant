export const toggleMainNavColors = () => {
    const headerNavLinks = document.querySelectorAll('#site-header .nav-link');
    headerNavLinks.forEach(link => {
        link.classList.toggle('change-color');
    });
}

export const resetToDefaultNavColors = () => {
    const headerNavLinks = document.querySelectorAll('#site-header .nav-link');
    headerNavLinks.forEach(link => {
        link.classList.remove('change-color');
    });
}

export const setHeaderSticky = (shouldBeSticky) => {
    const headerElement = document.getElementById('site-header');
    headerElement.classList.toggle('sticky', shouldBeSticky);
}
