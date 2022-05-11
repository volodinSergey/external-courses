import { booksDataBase } from '../../dataBases/booksDataBase.js';
import { renderBooks } from '../rendering/renderBooks.js';

const addBookLogic = (modalWindow) => {
  const bookTitleInput = modalWindow.querySelector('.modal__form-input--bookTitle');
  const authorNameInput = modalWindow.querySelector('.modal__form-input--authorName');
  const chooseRatingInput = modalWindow.querySelector('.modal__form-input--rating');
  const addBookButton = modalWindow.querySelector('.modal__form-button');
  const bookListParent = document.querySelector('.books-list');

  addBookButton.addEventListener('click', (e) => {
    e.preventDefault();

    const newBookData = {
      image: './images/book-images/defaultBook.jpg',
      title: bookTitleInput.value,
      autor: authorNameInput.value,
      rating: chooseRatingInput.value,
    };

    booksDataBase.push(newBookData);

    bookListParent.innerHTML = '';

    bookTitleInput.value = '';
    authorNameInput.value = '';
    chooseRatingInput.value = '';

    renderBooks(booksDataBase);
  });
};

export { addBookLogic };
