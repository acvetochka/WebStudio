import { benefits } from "../../data/benefits.js";

const benefitsList = document.querySelector('.benefits__list')

const renderBenefits = () => {
    const markup = benefits.map(({title, text, icon})=> {
        return `<li class="benefits__item">
        <div class="benefits__icons-container">
          <svg class="benefits__icon">
              <use href=${icon}></use>
            </svg>
        </div>
        <h3 class="benefits__title">${title}</h3>
        <p class="benefits__text">${text}</p>
      </li>`
    }).join('');

    benefitsList.innerHTML = markup;
}

renderBenefits();