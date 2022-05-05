import { renderNavigationList } from './modules/rendering/renderNavigationList.js';
import { renderSideBarTags } from './modules/rendering/renderSidebarTags.js';
import { renderBooks } from './modules/rendering/renderBooks.js';

import { setActiveClassToFilterButtons } from './animationFeatures/setActiveClassToFilterBtns.js';

document.addEventListener('DOMContentLoaded', () => {
  renderNavigationList();

  renderSideBarTags();

  renderBooks();

  setActiveClassToFilterButtons(
    '.content-box__filters',
    'content-box__filters-filter_button',
    'activeFilter',
  );
});
