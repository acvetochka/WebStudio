import { contacts } from "../../data/contacts.js";

const menu = contacts.slice(1);
console.log(menu);

const contactsList = document.querySelector(".contact-list");
const addressList = document.querySelector(".address__list");
const contsctsListNav = document.querySelector(".contacts-head");
const contactsMenu = document.querySelector(".contacts-menu");

const renderContacts = () => {
    const markup = contacts.map(({label, blank, description, href})=> {
        const target = "target='_blank' rel='noopener noreferrer'"

        return `<li class="contact-item">
             <span class="contact-name">${label}</span>
            <a href=${href} ${blank ? target : ""}
              class="contact-section__link">${description}</a>
          </li>`
    }).join('');

    if(contactsList) {
        contactsList.innerHTML = markup;
    }
}

const renderContactsToFooter = () => {
    const markup = contacts.map(({id, blank, description, href})=> {
        const target = "target='_blank' rel='noopener noreferrer'"

        return `<li>
              <a href=${href} ${blank ? target : ""}
                class=${id==="address" ? "address__link" : "address__item"}>${description}</a>
            </li>`
    }).join('');

    addressList.innerHTML = markup;
}

const renderContactNav = () => {
    const markup = menu.map(({icon, description, href})=> {
        return `<li class="contacts-head__item">
          <a href=${href} class="contacts-head__link">
            <svg class="contacts-head__icon" width=${icon.width} height=${icon.height}>
              <use href=${icon.href}></use>
            </svg>
            ${description}
          </a>
        </li>`
    }).join('');

    contsctsListNav.innerHTML = markup;
}

const renderContactsMenu = () => {
    const markup = menu.map(({href, id, description})=> {
        return ` <li class="contacts-menu__item">
          <a href=${href} class="contacts-menu__${id}"> ${description} </a>
        </li>`
    }).join('');

    contactsMenu.innerHTML = markup;
}


renderContacts();
renderContactsToFooter();
renderContactNav();
renderContactsMenu();