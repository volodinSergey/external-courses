import { sidebarTagsDataBase } from '../../dataBases/sidebarTagsDatabase.js';

const renderSideBarTags = () => {
  const sidebarTagsParent = document.querySelector('.tags-list');

  sidebarTagsDataBase.forEach(({ tagText }) => {
    const tag = document.createElement('li');

    tag.classList.add('tags-list__tag');
    tag.innerHTML = `
           <a class="tags-list__tag-link">
              <div class="tags-list__tag-link_decor"></div>

              <span class="tags-list__tag-link_text">
                ${tagText}
              </span>
            </a>
      `;

    sidebarTagsParent.append(tag);
  });
};

export { renderSideBarTags };
