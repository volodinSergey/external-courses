import { renderRating, ratingLogic } from '../starRating.js';

const renderBooks = (dataBase) => {
  const bookListParent = document.querySelector('.books-list');

  dataBase.forEach(({
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

            ${renderRating(rating)}
      `;

    bookListParent.appendChild(book);
  });

  ratingLogic();
};

export { renderBooks };
