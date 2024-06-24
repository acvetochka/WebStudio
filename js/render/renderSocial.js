import {social} from "../../data/social.js";

const socialContainer = document.querySelector(".join .icons");

export const renderSocial = (arr) => {
    const markup = arr.map(({href, img}) => {
        return `<li class="icons__list">
            <a href=${href} class="icons__link">
              <svg class="icons__svg">
                <use href=${img}></use>
              </svg>
            </a>
          </li>`
    }).join("");

    return markup;
}


const markup = renderSocial(social);
socialContainer.innerHTML = markup