import { services } from "../../data/services.js";

const servicesList = document.querySelector('.services__list')

const renderServices = () => {
    const markup = services.map(({name, description, img})=> {
        return `<li class="services__item">
          <img srcset="./images/services/${img}.jpg 1x, ./images/services/${img}@2x.jpg 2x" src="./images/services/${img}.jpg"
            alt=${name}
            class="services__img" />
          <p class="services__text">${description}</p>
        </li>`
    }).join('');

    servicesList.innerHTML = markup;
}

renderServices();