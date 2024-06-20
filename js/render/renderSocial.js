import social from "../../data/social.json";

const socialContainer = document.querySelector(".join .icons");

console.log(socialContainer);

const renderSocial = () => {
    const markup = social.map(({name, href, img}) => {
        return `<li class="icons__list">
            <a href=${href} class="icons__link">
              <svg class="icons__svg">
                <use href=${img}></use>
              </svg>
            </a>
          </li>`
    }).join("");

    socialContainer.innerHTML(markup)
}

renderSocial();