import { booksDataBase } from '../dataBases/booksDataBase.js';
import { renderBooks } from './rendering/renderBooks.js';
import { setActiveClassToFilterButtons } from '../animationFeatures/setActiveClassToFilterBtns.js';

const filtersModule = () => {
  const bookListParent = document.querySelector('.books-list');

  const liveSearchfilter = () => {
    const searchInput = document.querySelector('.content-box__search');
    let searchValue = '';

    searchInput.addEventListener('input', (e) => {
      searchValue = e.target.value;

      const rgx = new RegExp(searchValue, 'i');

      const filteredBooksArray = booksDataBase.filter((book) => rgx.test(book.title)
        || rgx.test(book.autor));

      bookListParent.innerHTML = '';

      renderBooks(filteredBooksArray);
    });
  };

  const filterButtonsFilter = () => {
    const filterButtonsParent = document.querySelector('.content-box__filters');

    filterButtonsParent.addEventListener('click', (e) => {
      const target = e.target;

      if (target && target.hasAttribute('data-mostpopular')) {
        const attribute = Number(target.dataset.mostpopular);

        const filteredBooks = booksDataBase.filter((book) => book.rating === attribute);

        bookListParent.innerHTML = '';

        renderBooks(filteredBooks);
      } else {
        bookListParent.innerHTML = '';

        renderBooks(booksDataBase);
      }
    });
  };

  setActiveClassToFilterButtons(
    '.content-box__filters',
    'content-box__filters-filter_button',
    'activeFilter',
  );

  liveSearchfilter();

  filterButtonsFilter();
};

export { filtersModule };
