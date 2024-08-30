import { menuImages, menuData } from '../menu/menuData'
import { renderMenuItems } from '../menu/menuRenderer';
import { setActiveLink } from "../navigation/pageNavigation";

export const initializeItems = (category) => {
    if (!menuData[category]) {
        console.error(`Category '${category}' not found in data.`);
        return;
    }

    const categoryData = menuData[category].map(product => {
        const imageName = product.src;
        return {
            ...product,
            src: menuImages[category][imageName] || ''
        };
    });

    setActiveLink(category, '#header .menu-btn')
    renderMenuItems(categoryData);
};
