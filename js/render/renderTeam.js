import { team } from "../../data/team.js";
import { renderSocial } from "./renderSocial.js";

const teamList = document.querySelector(".team__list");

const renderTeam = () => {
  const markup = team
    .map(({ name, position, img, social }) => {
      return `<li class="team__item">
          <picture>
            <source srcset="./images/team/${img}.jpg 1x, ./images/team/${img}@2x.jpg 2x}" media="(min-width: 1200px)" />

            <source srcset="./images/team/${img}-tablet.jpg 1x, ./images/team/${img}-tablet@2x.jpg 2x"
              media="(min-width: 768px)" />

            <img srcset="./images/team/${img}-mobile.jpg 1x, ./images/team/${img}-mobile@2x.jpg 2x"
              src="./images/team/${img}-mobile.jpg" alt=${name} class="team__img" />
          </picture>

          <h3 class="team__name">${name}</h3>
          <p lang="en" class="team__direct">${position}</p>

          <ul class="icons">${renderSocial(social)}</ul>
        </li>`;
    })
    .join("");

  teamList.innerHTML = markup;
};

renderTeam();
