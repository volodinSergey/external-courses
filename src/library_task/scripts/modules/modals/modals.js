import { addBookLogic } from './addBookLogic.js';

const modalsModule = () => {
  const initModal = (modal, openModalTrigger, closeModalTrigger) => {
    const modalWindow = document.querySelector(modal);
    const openModalButton = document.querySelector(openModalTrigger);
    const closeModalButton = modalWindow.querySelector(closeModalTrigger);

    const openModal = () => {
      modalWindow.classList.add('modalWindowOpened');
      document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
      modalWindow.classList.remove('modalWindowOpened');
      document.body.style.overflow = '';
    };

    openModalButton.addEventListener('click', () => openModal());

    closeModalButton.addEventListener('click', () => closeModal());

    addBookLogic(modalWindow);
  };

  initModal('.modal', '[data-open-modal]', '[data-close-modal]');
};

export { modalsModule };
