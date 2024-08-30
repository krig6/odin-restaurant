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
    if (handleCurrentTab(category)) {
        console.log('Menu items are already loaded for this category.')
        return;
    }

    if (['cup', 'crust', 'churn', 'snack'].includes(category)) {
        initializeItems(category);
        handleCurrentTab(category, true);
    }
};

const handleCurrentTab = (category, shouldSet = false) => {
    const headerElement = document.getElementById('header');
    if (!headerElement) {
        console.log(`Element with id 'header' not found.`)
        return;
    }

    const currentTab = headerElement.getAttribute('data-action');

    if (shouldSet) {
        headerElement.setAttribute('data-action', category);
    }

    return currentTab === category;
}


