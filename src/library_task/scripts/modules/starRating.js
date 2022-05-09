const renderRating = (ratingValueFromDataBase) => `
            <ul class="book__rating rating" data-total-rating='${ratingValueFromDataBase}'>
              <li class='rating__item' data-rating='5'>★</li>
              <li class='rating__item' data-rating='4'>★</li>
              <li class='rating__item' data-rating='3'>★</li>
              <li class='rating__item' data-rating='2'>★</li>
              <li class='rating__item' data-rating='1'>★</li>
            </ul>
`;

const ratingLogic = () => {
  const ratingItemsList = document.querySelectorAll('.rating__item');

  ratingItemsList.forEach((item) => {
    const ratingItem = item;

    ratingItem.addEventListener('click', () => {
      const { rating } = ratingItem.dataset;

      ratingItem.parentNode.dataset.totalRating = rating;
    });
  });
};

export { renderRating, ratingLogic };
