export const clearMainContent = () => {
    if (isMainContentPresent()) {
        const contentElement = document.getElementById('main-content');
        if (contentElement) {
            while (contentElement.firstChild) {
                contentElement.removeChild(contentElement.firstChild);
            }
            console.log('Main content has been cleared.')

        } else {
            console.error('Content element not found in the document.');
        }
    } else {
        console.log('No content to clear.');
    }
};

const isMainContentPresent = () => {
    return !!document.getElementById('main-content');
}
