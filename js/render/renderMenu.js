import {menu} from "../../data/menu.js";

const path = new URL(document.URL).pathname;

const classList = [
    {
        list: ".nav",
        classLi: "nav__item",
        classLink: "nav__link",
        currentLink: "nav__link--current"
    },
    {
        list: ".mobile-menu",
        classLi: "mobile-menu__item",
        classLink: "mobile-menu__link",
        currentLink: "mobile-menu__link--current"
    }
]

const renderMenu = () => {
    classList.forEach(({list, classLi, classLink, currentLink})=> {
        const menuList = document.querySelector(list);
        
        const markup = menu.map(({name, href})=> {
            const isActive = path === href.slice(1);
            const activeClass = isActive ? currentLink : '';

            return `<li class=${classLi}>
              <a href=${href} class="${classLink} ${activeClass}">${name}</a>
            </li>`
        })
        .join('')
    
        menuList.innerHTML = markup;
    })
}


renderMenu();