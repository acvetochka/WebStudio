import {social} from "../../data/social.js";

const socialContainer = document.querySelector(".join .icons");

console.log(socialContainer);

export const renderSocial = (arr, container) => {
    const markup = arr.map(({name, href, img}) => {
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
// renderSocial(social, socialContainer);
    // socialContainer.innerHTML = markup