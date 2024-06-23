// import {social} from "../../data/social.js";
import {clients} from "../../data/clients.js"

const clientsList = document.querySelector(".clients__list");

console.log(clientsList);

const renderClients = () => {
    const markup = clients.map(({name, href, svg}) => {
        return `<li class="clients__item">
          <a href=${href} class="clients__link">
            <svg class="clients__icon" width="106" height="60">
            <title>${name}</title>
              <use href=${svg}></use>
            </svg>
          </a>
        </li>`
    }).join("");

    clientsList.innerHTML = markup
}

renderClients();