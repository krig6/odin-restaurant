export const clearMainContent = () => {
    const contentContainer = document.getElementById('main-content');
    if (!contentContainer) {
        console.error('Element with id "main-content" not found.');
        return;
    }
    while (contentContainer.firstChild) {
        contentContainer.removeChild(contentContainer.firstChild);
    }
};
