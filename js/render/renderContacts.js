import { contacts } from "../../data/contacts.js";

const contactsList = document.querySelector(".contact-list");

const renderContacts = () => {
    const markup = contacts.map(({label, blank, description, href})=> {
        const target = "target='_blank' rel='noopener noreferrer'"
        // const target = 
        return `<li class="contact-item">
             <span class="contact-name">${label}</span>
            <a href=${href} ${blank ? target : ""}
              class="contact-section__link">${description}</a>
          </li>`
    }).join('');

    contactsList.innerHTML = markup;
}

renderContacts();