import {social} from "../../data/social.js";

const socialContainer = document.querySelector(".join .icons");
const socialMenu = document.querySelector(".social-menu")

export const renderSocial = (arr) => {
    const markup = arr.map(({href, img, name}) => {
        return `<li class="icons__list">
            <a href=${href} class="icons__link" aria-label=${name}>
              <svg class="icons__svg">
                <use href=${img}></use>
              </svg>
            </a>
          </li>`
    }).join("");

    return markup;
}

const markup = renderSocial(social);
socialContainer.innerHTML = markup;

const renderSocialMenu = () => {
  const markup = social.map(({href, name})=> {
    return `<li class="social-menu__item">
          <a href=${href} class="social-menu__link">${name}</a>
        </li>`
  }).join('');

  socialMenu.innerHTML = markup;
}

renderSocialMenu()