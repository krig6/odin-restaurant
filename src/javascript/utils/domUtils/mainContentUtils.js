export const clearMainContent = () => {
  if (isMainContentPresent()) {
    const contentElement = document.getElementById('main-content');
    if (contentElement) {
      while (contentElement.firstChild) {
        contentElement.removeChild(contentElement.firstChild);
      }
      /* eslint-disable no-console */
      console.log('Main content has been cleared.');
      /* eslint-enable no-console */

    } else {
      console.error('Content element not found in the document.');
    }
  } else {
    /* eslint-disable no-console */
    console.log('No content to clear.');
    /* eslint-enable no-console */
  }
};

const isMainContentPresent = () => {
  return !!document.getElementById('main-content');
};
