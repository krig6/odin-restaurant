import { initializeItems } from "./menuLoader";

export const initializeMenuEventHandlers = () => {
    const categoryButtons = document.querySelectorAll('.menu-btn');

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const whatButton = button.getAttribute('data-action');
            renderSelectedCategory(whatButton);
        })
    })
}

const renderSelectedCategory = (category) => {
    if (['cup', 'crust', 'churn', 'snack'].includes(category)) {
        initializeItems(category);
    }
};
