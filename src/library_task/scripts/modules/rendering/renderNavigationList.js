import { navigationListDataBase } from '../../dataBases/navigationListDataBase.js';

const renderNavigationList = () => {
  const navigationListParent = document.querySelector('.sidebar-nav__list');

  navigationListDataBase.forEach(({
    text, icon,
  }) => {
    const listItem = document.createElement('li');

    listItem.classList.add('sidebar-nav__list-item');
    listItem.innerHTML = `
                <a class="sidebar-nav__list-link">
                  ${icon}

                  <span class="sidebar-nav__list-link_text">
                    ${text}
                  </span>
                </a>
    `;

    navigationListParent.append(listItem);
  });
};

export { renderNavigationList };
