export const smoothScrollToTop = () => {
    setTimeout(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, 100);
};
