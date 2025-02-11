import { fetchAllImages } from '../imageUtils/imageUtils'

import churnData from '../../data/churnItems.json';
import cupData from '../../data/cupItems.json';
import crustData from '../../data/crustItems.json';
import snackData from '../../data/snackItems.json';

export const menuImages = {
    churn: fetchAllImages(import.meta.webpackContext('../../../assets/images/churn', {
        recursive: false,
        regExp: /\.(png|jpe?g|gif|svg)$/,
    })),
    cup: fetchAllImages(import.meta.webpackContext('../../../assets/images/cup', {
        recursive: false,
        regExp: /\.(png|jpe?g|gif|svg)$/,
    })),
    crust: fetchAllImages(import.meta.webpackContext('../../../assets/images/crust', {
        recursive: false,
        regExp: /\.(png|jpe?g|gif|svg)$/,
    })),
    snack: fetchAllImages(import.meta.webpackContext('../../../assets/images/snack', {
        recursive: false,
        regExp: /\.(png|jpe?g|gif|svg)$/,
    })),
}

export const menuData = {
    churn: churnData,
    cup: cupData,
    crust: crustData,
    snack: snackData
};
