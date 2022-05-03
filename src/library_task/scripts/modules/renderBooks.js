import { booksDataBase } from '../dataBases/imagesDataBase.js';
import { getRating } from './starRating.js';

const renderBooksFromDataBase = () => {
  const bookListParent = document.querySelector('.books-list');

  booksDataBase.forEach(({
    image, title, autor, rating,
  }) => {
    const book = document.createElement('li');

    book.classList.add('books-list__book', 'book');
    book.innerHTML = `
            <img class="book__img" src=${image} alt="Book image">

            <h3 class="book__title">${title}</h3>

            <p class="book__autor">
              by <em class="book__autor-name">${autor}</em>
            </p>

            ${getRating(rating)}
      `;

    bookListParent.append(book);
  });
};

export { renderBooksFromDataBase };
