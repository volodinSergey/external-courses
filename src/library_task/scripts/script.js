import { booksDataBase } from './dataBases/booksDataBase.js';

import { renderBooks } from './modules/rendering/renderBooks.js';
import { renderNavigationList } from './modules/rendering/renderNavigationList.js';
import { renderSideBarTags } from './modules/rendering/renderSidebarTags.js';

import { filtersModule } from './modules/filter.js';

import { modalsModule } from './modules/modals/modals.js';

document.addEventListener('DOMContentLoaded', () => {
  renderBooks(booksDataBase);

  renderNavigationList();

  renderSideBarTags();

  filtersModule();

  modalsModule();
});
