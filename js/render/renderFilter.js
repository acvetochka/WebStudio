
const filterList = document.querySelector('.filter__list');
const filter = ["Усі", "Веб-сайти", "Додатки", "Дизайн", "Маркетинг"]

const renderFilter = () => {
    const markup = filter.map(item => {
        return ` <li class="filter__item">
            <button type="button" class="filter__button">${item}</button>
          </li>`
    }).join('');

    filterList.innerHTML = markup
}

renderFilter();