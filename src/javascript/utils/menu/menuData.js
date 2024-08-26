import { fetchAllImages } from '../imageUtils/imageUtils'

import churnData from '../../data/churnItems.json';
import cupData from '../../data/cupItems.json';
import crustData from '../../data/crustItems.json';
import snackData from '../../data/snackItems.json';

export const menuImages = {
    churn: fetchAllImages(require.context('../../../assets/images/churn', false, /\.(png|jpe?g|gif|svg)$/)),
    cup: fetchAllImages(require.context('../../../assets/images/cup', false, /\.(png|jpe?g|gif|svg)$/)),
    crust: fetchAllImages(require.context('../../../assets/images/crust', false, /\.(png|jpe?g|gif|svg)$/)),
    snack: fetchAllImages(require.context('../../../assets/images/snack', false, /\.(png|jpe?g|gif|svg)$/))
}

export const menuData = {
    churn: churnData,
    cup: cupData,
    crust: crustData,
    snack: snackData
};
