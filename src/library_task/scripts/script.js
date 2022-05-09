import { booksDataBase } from './dataBases/booksDataBase.js';

import { renderBooks } from './modules/rendering/renderBooks.js';
import { renderNavigationList } from './modules/rendering/renderNavigationList.js';
import { renderSideBarTags } from './modules/rendering/renderSidebarTags.js';

import { setActiveClassToFilterButtons } from './animationFeatures/setActiveClassToFilterBtns.js';

document.addEventListener('DOMContentLoaded', () => {
  renderBooks(booksDataBase);

  renderNavigationList();

  renderSideBarTags();

  setActiveClassToFilterButtons(
    '.content-box__filters',
    'content-box__filters-filter_button',
    'activeFilter',
  );
});
