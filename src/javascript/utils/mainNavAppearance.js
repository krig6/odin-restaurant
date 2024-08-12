export const toggleMainNavColors = () => {
    const navigationLinks = document.querySelectorAll('#site-header .nav-link');
    navigationLinks.forEach(link => {
        link.classList.toggle('change-color');
    });
}
