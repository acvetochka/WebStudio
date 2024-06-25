import { projects } from "../../data/projects.js";

const projectsList = document.querySelector(".projects__list");

const renderProjects = () => {
    const markup = projects.map(({title, category, description, classJs, img})=> {
        return `<li class="projects__item ${classJs}">
            <a href="#" class="projects__link">
              <div class="projects__thumb">
                <picture>
                  <source srcset="
                        ./images/portfolio/${img}.jpg    1x,
                        ./images/portfolio/${img}@2x.jpg 2x
                      " media="(min-width: 1200px)" />
                  <source srcset="
                        ./images/portfolio/${img}-tablet.jpg    1x,
                        ./images/portfolio/${img}-tablet@2x.jpg 2x
                      " media="(min-width: 768px)" />
                  <img srcset="
                        ./images/portfolio/${img}-mobile.jpg    1x,
                        ./images/portfolio/${img}-mobile@2x.jpg 2x
                      " src="./images/portfolio/${img}-mobile.jpg" alt="Технокряк" class="projects__img" />
                </picture>
                <p class="projects__overlay">${description}</p>
              </div>
              <div class="projects__border">
                <h2 class="projects__title">${title}</h2>
                <p class="projects__text">${category}</p>
              </div>
            </a>
          </li>`

    }).join('');

    projectsList.innerHTML = markup;
}

renderProjects();