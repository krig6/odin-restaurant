import { fetchAllImages } from '../imageUtils/imageLoader.js';

import cupData from '../../data/cupMenu.json';
import crustData from '../../data/crustMenu.json';
import churnData from '../../data/churnMenu.json';
import snackData from '../../data/snackMenu.json';

export const menuImages = {
  cup: fetchAllImages(import.meta.webpackContext('../../../assets/images/cup', {
    recursive: false,
    regExp: /\.(png|jpe?g|gif|svg)$/
  })),

  crust: fetchAllImages(import.meta.webpackContext('../../../assets/images/crust', {
    recursive: false,
    regExp: /\.(png|jpe?g|gif|svg)$/
  })),

  churn: fetchAllImages(import.meta.webpackContext('../../../assets/images/churn', {
    recursive: false,
    regExp: /\.(png|jpe?g|gif|svg)$/
  })),

  snack: fetchAllImages(import.meta.webpackContext('../../../assets/images/snack', {
    recursive: false,
    regExp: /\.(png|jpe?g|gif|svg)$/
  }))
};

export const menuData = {
  churn: churnData,
  cup: cupData,
  crust: crustData,
  snack: snackData
};

