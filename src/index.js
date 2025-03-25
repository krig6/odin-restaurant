import { initializePage } from './javascript/utils/navigation/pageNavigation.js';
import { buildMainNavigation } from './javascript/components/siteNavigation.js';
import { buildFooterStructure } from './javascript/components/footer.js';

import '../src/styles/global.css';
import '../src/styles/siteNavigation.css';
import '../src/styles/footer.css';

document.addEventListener('DOMContentLoaded', initializePage);
buildMainNavigation();
buildFooterStructure();
