import { renderBooksFromDataBase } from './modules/renderBooks.js';
import { setActiveClassToFilterButtons } from './modules/setActiveClassToFilterBtns.js';

document.addEventListener('DOMContentLoaded', () => {
  renderBooksFromDataBase();

  setActiveClassToFilterButtons(
    '.content-box__filters',
    'content-box__filters-filter_button',
    'activeFilter',
  );
});
