const getRating = (n) => `
    <ul class="book__rating rating" data-total-rating='${n}'>
            <li class='rating__item' data-rating='5'>★</li>
            <li class='rating__item' data-rating='4'>★</li>
            <li class='rating__item' data-rating='3'>★</li>
            <li class='rating__item' data-rating='2'>★</li>
            <li class='rating__item' data-rating='1'>★</li>
    </ul>       
  `;

export { getRating };
