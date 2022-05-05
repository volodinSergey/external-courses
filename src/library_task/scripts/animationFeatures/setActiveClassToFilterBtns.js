const setActiveClassToFilterButtons = (filterBtnsParent, filterBtnsSelector, activeClass) => {
  const filterButtonsParent = document.querySelector(filterBtnsParent);
  const filterButtons = document.querySelectorAll(`.${filterBtnsSelector}`);

  filterButtons[0].classList.add(activeClass);

  filterButtonsParent.addEventListener('click', (e) => {
    const target = e.target;

    if (target && target.classList.contains(filterBtnsSelector)) {
      filterButtons.forEach((button) => button.classList.remove(activeClass));

      target.classList.add(activeClass);
    }
  });
};

export { setActiveClassToFilterButtons };
